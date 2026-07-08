import { Container } from '../components/layout/Container';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/animations/PageTransition';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { HomeTechEcosystem } from '../components/sections/HomeTechEcosystem';
import { CTA } from '../components/sections/CTA';
import { pageSeo } from '../lib/seo';

export default function Home() {
  const seo = pageSeo({ title: 'Enoch Wanjala — Frontend Engineer', description: 'Modern frontend portfolio for fast, responsive, accessible websites.', path: '/' });
  return (
    <PageTransition>
      <SEO {...seo} />
      <Container>
        <Hero />
        <About />
        <HomeTechEcosystem />
        <CTA />
      </Container>
    </PageTransition>
  );
}
