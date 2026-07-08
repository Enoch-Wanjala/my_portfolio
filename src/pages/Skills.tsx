import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/animations/PageTransition';
import { TechStack } from '../components/sections/TechStack';
import { Services } from '../components/sections/Services';
import { GitHubStats } from '../components/sections/GitHubStats';
import { pageSeo } from '../lib/seo';

export default function Skills() {
  const seo = pageSeo({ title: 'Skills & Capabilities — Enoch Wanjala', description: 'Technical stack, services, and engineering capabilities.', path: '/skills' });
  return (
    <PageTransition>
      <SEO {...seo} />
      <Container>
        <PageHeader eyebrow="available for hire" title="Expertise" accent="& Capabilities." description="Bridging the gap between design and high-performance engineering. I build digital systems that are fast, scalable, and visually precise." />
        <TechStack />
        <Services />
        <GitHubStats />
      </Container>
    </PageTransition>
  );
}
