import { FiCopy, FiMail, FiMessageSquare, FiPhone } from 'react-icons/fi';
import { contactInfo } from '../../data/contact';
import { socials } from '../../data/socials';
import { Card } from '../ui/Card';
import { copyToClipboard } from '../../utils/copy';

export function ContactDetails() {
  const rows = [
    ['Electronic_Mail', contactInfo.email, FiMail],
    ['Secure_Instant_Message', 'WhatsApp / Telegram', FiMessageSquare],
    ['Phone_Line', contactInfo.phone, FiPhone]
  ] as const;

  return (
    <div className="space-y-6">
      <Card>
        <p className="eyebrow">direct_communications</p>
        <div className="mt-6 space-y-6">
          {rows.map(([label, value, Icon]) => (
            <div key={label} className="grid grid-cols-[auto_1fr_auto] gap-4">
              <Icon className="mt-1 text-2xl text-mint" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{label}</p>
                <p className="mt-1 break-all text-lg font-bold">{value}</p>
              </div>
              <button onClick={() => void copyToClipboard(value)} aria-label={`Copy ${label}`} className="text-muted hover:text-mint"><FiCopy /></button>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <p className="eyebrow">digital_footprint</p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {socials.slice(0, 2).map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-line bg-black/30 px-5 py-4 font-mono text-sm hover:border-mint">
              <social.icon /> {social.label}
            </a>
          ))}
        </div>
      </Card>
      <div className="hidden aspect-video border border-line bg-[radial-gradient(circle_at_50%_50%,rgba(42,211,109,.2),transparent_50%)] lg:block">
        <p className="mt-[42%] px-4 font-mono text-[10px] uppercase tracking-widest text-muted">neural_net_visualization_v01</p>
      </div>
    </div>
  );
}
