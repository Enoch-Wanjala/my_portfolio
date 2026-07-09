import { Container } from '../components/layout/Container';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/animations/PageTransition';
import { TechStack } from '../components/sections/TechStack';
import { Services } from '../components/sections/Services';
import { GitHubStats } from '../components/sections/GitHubStats';
import { Reveal } from '../components/animations/Reveal';
import { pageSeo } from '../lib/seo';

function SkillsHero() {
  return (
    <section className="mb-20 pt-14">
      <Reveal>
        <div className="mb-4 inline-block rounded-full border border-line px-3 py-1">
          <span className="animate-flicker font-mono text-xs uppercase tracking-widest text-mint">Available for Hire</span>
        </div>
        <h1 className="mb-6 max-w-4xl text-hero font-black leading-[1.1] tracking-[-.04em] text-[#e5e1e4]">
          Expertise <span className="text-mint">&</span> Capabilities.
        </h1>
        <p className="max-w-2xl text-base leading-[1.6] text-muted">
          Bridging the gap between design and high-performance engineering. I build digital systems that are fast, scalable, and visually precise.
        </p>
      </Reveal>
    </section>
  );
}

export default function Skills() {
  const seo = pageSeo({ title: 'Skills & Capabilities — Enoch Wanjala', description: 'Technical stack, services, and engineering capabilities.', path: '/skills' });
  return (
    <PageTransition>
      <SEO {...seo} />
      <Container>
        <SkillsHero />
        <TechStack />
        <Services />
        <GitHubStats />
      </Container>
    </PageTransition>
  );
}

