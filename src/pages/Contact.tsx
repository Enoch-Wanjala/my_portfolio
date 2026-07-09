import { Container } from '../components/layout/Container';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/animations/PageTransition';
import { ContactForm } from '../components/sections/ContactForm';
import { ContactDetails } from '../components/sections/ContactDetails';
import { Reveal } from '../components/animations/Reveal';
import { pageSeo } from '../lib/seo';

function ContactHero() {
  return (
    <section className="mb-20 pt-14">
      <Reveal>
        <div className="mb-8 flex items-center gap-3">
          <div className="relative flex size-3 items-center justify-center">
            <div className="absolute size-full animate-pulse-green rounded-full bg-mint" />
            <div className="relative size-1.5 rounded-full bg-mint" />
          </div>
          <span className="font-mono text-xs uppercase tracking-[.05em] text-mint">Currently Available for New Projects</span>
        </div>
        <h1 className="mb-6 text-[48px] font-black leading-[1.1] tracking-[-.04em] text-[#e5e1e4] md:text-hero">
          Let’s <span className="italic text-mint">Connect.</span>
        </h1>
        <p className="max-w-2xl text-base leading-[1.6] text-muted">
          Ready to transform your technical vision into a high-performance reality? Whether it’s a complex cloud architecture or a sleek frontend interface, I’m here to engineer the solution.
        </p>
      </Reveal>
    </section>
  );
}

export default function Contact() {
  const seo = pageSeo({ title: 'Contact — Enoch Wanjala', description: 'Start a new project with Enoch Wanjala.', path: '/contact' });
  return (
    <PageTransition>
      <SEO {...seo} />
      <Container>
        <ContactHero />
        <div className="grid items-start gap-6 pb-fluid lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactDetails />
          </div>
        </div>
      </Container>
    </PageTransition>
  );
}
