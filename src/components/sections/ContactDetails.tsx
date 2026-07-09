import { FiCopy, FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { contactInfo } from '../../data/contact';
import { socials, whatsappUrl } from '../../data/socials';
import { copyToClipboard } from '../../utils/copy';

const phoneHref = `tel:+254${contactInfo.phone.slice(1)}`;

const communicationRows = [
  {
    label: 'Electronic_Mail',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    copyValue: contactInfo.email,
    icon: FiMail
  },
  {
    label: 'WhatsApp_Message',
    value: 'WhatsApp / Telegram',
    href: whatsappUrl,
    copyValue: contactInfo.phone,
    icon: FaWhatsapp
  },
  {
    label: 'Phone_Line',
    value: contactInfo.phone,
    href: phoneHref,
    copyValue: contactInfo.phone,
    icon: FiPhone
  }
] as const;

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-6">
      <section className="group border border-[#353437] bg-panel p-8 transition-colors duration-500 hover:border-mint">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-mint">Direct_Communications</p>
        <div className="space-y-8">
          {communicationRows.map(({ label, value, href, copyValue, icon: Icon }) => (
            <div key={label} className="grid grid-cols-[auto_1fr_auto] gap-4">
              <Icon className="mt-1 text-2xl text-mint" aria-hidden />
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase text-outline">{label}</p>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="block break-all text-base text-[#e5e1e4] transition-colors hover:text-mint">
                  {value}
                </a>
              </div>
              <button onClick={() => void copyToClipboard(copyValue)} aria-label={`Copy ${label}`} className="text-muted hover:text-mint"><FiCopy /></button>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-[#353437] bg-panel p-8">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-mint">Digital_Footprint</p>
        <div className="grid grid-cols-2 gap-4">
          {socials.slice(0, 2).map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="group flex items-center gap-3 border border-[#353437] bg-[#0e0e10] p-4 font-mono text-xs uppercase tracking-[.05em] transition-all hover:border-mint hover:text-mint">
              <social.icon className="transition-colors group-hover:text-mint" aria-hidden />
              {social.label}
            </a>
          ))}
        </div>
      </section>

      <div className="relative hidden h-48 overflow-hidden border border-[#353437] lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,226,119,.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase text-outline">NEURAL_NET_VISUALIZATION_V01</p>
      </div>
    </div>
  );
}
