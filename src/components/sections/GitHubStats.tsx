import { FiExternalLink, FiTerminal } from 'react-icons/fi';
import { ButtonLink } from '../ui/Button';
import { Card } from '../ui/Card';
import { Reveal } from '../animations/Reveal';

const rows = [
  ['commits_ytd', '1,422'],
  ['prs_merged', '89'],
  ['repos', '42'],
  ['streak', '14 days']
];

export function GitHubStats() {
  return (
    <Reveal>
      <Card className="my-fluid grid items-center gap-12 p-8 sm:p-12 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <p className="eyebrow flex items-center gap-3"><FiTerminal /> github_engine</p>
          <h2 className="mt-10 text-title font-black tracking-[-.05em]">Code Beyond the Interface</h2>
          <p className="mt-6 max-w-2xl leading-8 text-muted">I maintain strict coding standards and a commitment to continuous learning. Explore repositories to see how I solve complex engineering problems.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink to="/projects">Explore Repositories <FiExternalLink /></ButtonLink>
            <span className="btn border border-line bg-black/40 text-white"><span className="size-3 rounded-full bg-mint" /> Daily Commits Tracked</span>
          </div>
        </div>
        <div className="rotate-2 border border-line bg-ink p-7 font-mono text-xs uppercase shadow-card">
          <p className="mb-6 flex justify-between text-mint">stats.sh <span>•••</span></p>
          {rows.map(([label, value]) => (
            <div key={label} className="flex justify-between border-b border-line py-4 last:border-0">
              <span>{label}</span>
              <span className="text-mint">{value}</span>
            </div>
          ))}
        </div>
      </Card>
    </Reveal>
  );
}
