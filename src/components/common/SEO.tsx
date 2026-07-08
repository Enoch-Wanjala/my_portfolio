import { Helmet } from 'react-helmet-async';
import { site } from '../../constants/site';
import { absoluteUrl, personJsonLd } from '../../lib/seo';

type Props = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function SEO({ title, description, path, keywords = [] }: Props) {
  const canonical = absoluteUrl(path);
  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={site.author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content={site.themeColor} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={site.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(personJsonLd())}</script>
    </Helmet>
  );
}
