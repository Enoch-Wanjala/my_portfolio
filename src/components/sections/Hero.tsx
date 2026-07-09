import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { ButtonAnchor, ButtonLink } from '../ui/Button';
import { Reveal } from '../animations/Reveal';
import { CodeWindow } from './CodeWindow';
import { whatsappUrl } from '../../data/socials';
import { site } from '../../constants/site';

export function Hero() {
  return (
    <section className="py-12 md:py-32">
      <Reveal className="home-hero-lockup">
        <p className="eyebrow before:mr-3 before:inline-block before:h-px before:w-10 before:bg-mint before:align-middle">
          Frontend engineer & UI developer
        </p>
        <h1 className="mt-6 max-w-4xl text-balance text-hero font-black leading-[1.08] tracking-[-.04em] text-[#e5e1e4]">
          Building <span className="text-mint">Modern Websites</span> That Leave Lasting Impressions.
        </h1>
        <p className="mt-7 max-w-[43rem] text-pretty text-base leading-[1.6] text-muted md:text-[1.02rem]">
          I help individuals, brands, and businesses establish a strong online presence through clean,
          responsive, and user-friendly websites designed to engage visitors and support business growth.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink to="/projects">View My Work <FiArrowUpRight /></ButtonLink>
          <ButtonAnchor href={whatsappUrl} target="_blank" rel="noreferrer" variant="ghost" aria-label="Message Enoch on WhatsApp">
            <FaWhatsapp /> WhatsApp
          </ButtonAnchor>
          <ButtonAnchor href={`mailto:${site.email}`} variant="ghost" aria-label="Email Enoch">
            <FiMail /> Email
          </ButtonAnchor>
        </div>
      </Reveal>
      <Reveal className="mt-20 max-w-[52rem]">
        <CodeWindow />
      </Reveal>
    </section>
  );
}
