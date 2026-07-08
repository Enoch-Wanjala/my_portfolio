import { ButtonLink } from '../ui/Button';
import { Reveal } from '../animations/Reveal';

export function CTA() {
  return (
    <Reveal>
      <section className="my-fluid border border-line bg-panel2 px-6 py-16 text-center">
        <h2 className="text-title font-black tracking-[-.05em]">Ready to launch your next project?</h2>
        <p className="mx-auto mt-5 max-w-xl text-muted">Let’s talk about how we can build something incredible together that helps your business thrive online.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink to="/contact">Get In Touch</ButtonLink>
          <a href="/resume.pdf" className="btn border border-line bg-black/30 text-mint">Download Resume (PDF)</a>
        </div>
      </section>
    </Reveal>
  );
}
