import { ButtonLink } from '../ui/Button';
import { Reveal } from '../animations/Reveal';

export function CTA() {
  return (
    <Reveal>
      <section className="py-32">
        <div className="relative isolate overflow-hidden rounded-lg border border-line bg-panel2 p-12 text-center md:p-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-mint/10 to-transparent" aria-hidden />
          <h2 className="mx-auto mb-8 max-w-2xl text-title-sm font-bold leading-[1.2] tracking-[-.03em] text-[#e5e1e4]">Ready to launch your next project?</h2>
          <p className="mx-auto mb-12 max-w-xl text-base leading-[1.6] text-muted">Let’s talk about how we can build something incredible together that helps your business thrive online.</p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <ButtonLink to="/contact" className="px-12 py-4 text-lg">Get In Touch</ButtonLink>
            <a href="/resume.pdf" className="font-mono text-xs uppercase tracking-[.05em] text-mint transition-colors hover:text-[#15803d] hover:underline">Download Resume (.PDF)</a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
