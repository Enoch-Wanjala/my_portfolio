import { Container } from '../components/layout/Container';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/animations/PageTransition';
import { PageHeader } from '../components/layout/PageHeader';
import { ContactForm } from '../components/sections/ContactForm';
import { ContactDetails } from '../components/sections/ContactDetails';
import { pageSeo } from '../lib/seo';

export default function Contact() {
  const seo = pageSeo({ title: 'Contact — Enoch Wanjala', description: 'Start a new project with Enoch Wanjala.', path: '/contact' });
  return (
    <PageTransition>
      <SEO {...seo} />
      <Container>
        <PageHeader eyebrow="currently available for new projects" title="Let’s" accent="Connect." description="Ready to transform your technical vision into a high-performance reality? Whether it’s a complex cloud architecture or a sleek frontend interface, I’m here to engineer the solution." />
        <div className="grid gap-7 pb-fluid lg:grid-cols-[1.25fr_.9fr]">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </PageTransition>
  );
}
