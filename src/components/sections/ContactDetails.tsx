import { FiCopy, FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { contactInfo } from '../../data/contact';
import { socials, whatsappUrl } from '../../data/socials';
import { Card } from '../ui/Card';
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
    <div className="space-y-6">
      <Card>
        <p className="eyebrow">direct_communications</p>
        <div className="mt-6 space-y-6">
          {communicationRows.map(({ label, value, href, copyValue, icon: Icon }) => (
            <div key={label} className="grid grid-cols-[auto_1fr_auto] gap-4">
              <Icon className="mt-1 text-2xl text-mint" aria-hidden />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{label}</p>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="mt-1 block break-all text-lg font-bold hover:text-mint">
                  {value}
                </a>
              </div>
              <button onClick={() => void copyToClipboard(copyValue)} aria-label={`Copy ${label}`} className="text-muted hover:text-mint"><FiCopy /></button>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <p className="eyebrow">digital_footprint</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {socials.slice(0, 3).map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-line bg-[#0e0e10] px-5 py-4 font-mono text-sm hover:border-mint hover:text-mint">
              <social.icon className={social.label === 'WhatsApp' ? 'text-mint' : undefined} /> {social.label}
            </a>
          ))}
        </div>
      </Card>
      <div className="hidden aspect-video border border-line bg-[radial-gradient(circle_at_50%_50%,rgba(74,226,119,.18),transparent_50%)] lg:block">
        <p className="mt-[42%] px-4 font-mono text-[10px] uppercase tracking-widest text-muted">neural_net_visualization_v01</p>
      </div>
    </div>
  );
}
