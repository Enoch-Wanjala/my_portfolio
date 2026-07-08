import { FiExternalLink, FiMoreHorizontal, FiTerminal } from 'react-icons/fi';
import { Reveal } from '../animations/Reveal';

const rows = [
  ['commits_ytd', '1,422'],
  ['prs_merged', '89'],
  ['repos', '42'],
  ['streak', '14 days']
];

export function GitHubStats() {
  return (
    <section className="pb-fluid-sm">
      <Reveal>
        <div className="terminal-border relative flex flex-col items-center gap-12 overflow-hidden rounded-xl bg-[#1c1b1d] p-10 md:flex-row md:p-16">
          <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden />

          <div className="relative z-10 text-center md:w-2/3 md:text-left">
            <div className="mb-6 flex items-center justify-center gap-4 md:justify-start">
              <FiTerminal className="text-4xl text-mint" aria-hidden />
              <span className="font-mono text-xs uppercase tracking-[.05em] text-muted">GITHUB_ENGINE</span>
            </div>
            <h2 className="mb-6 text-title-sm font-bold leading-[1.2] tracking-[-.03em] text-[#e5e1e4]">Code Beyond the Interface</h2>
            <p className="mb-8 max-w-xl text-base leading-[1.6] text-muted">
              I maintain strict coding standards and a commitment to continuous learning. Explore my public repositories to see how I tackle complex engineering problems, participate in open source, and document my progress.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <a className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#22c55e] px-8 py-4 font-bold text-[#002109] transition-transform hover:scale-105" href="https://github.com/Enoch-Wanjala" target="_blank" rel="noreferrer">
                <span>Explore Repositories</span>
                <FiExternalLink aria-hidden />
              </a>
              <div className="terminal-border flex items-center gap-4 rounded-lg bg-[#0e0e10] px-6 py-4">
                <div className="size-3 animate-pulse rounded-full bg-[#22c55e]" />
                <span className="font-mono text-xs uppercase tracking-[.05em] text-[#e5e1e4]">Daily Commits Tracked</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full md:w-1/3">
            <div className="glass-panel terminal-border rounded-lg p-8 transition-transform duration-500 md:rotate-3 md:hover:rotate-0">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[.05em] text-mint">STATS.sh</span>
                <FiMoreHorizontal className="text-muted" aria-hidden />
              </div>
              <div className="space-y-4">
                {rows.map(([label, value], index) => (
                  <div key={label} className={`flex justify-between ${index < rows.length - 1 ? 'border-b border-line pb-2' : ''}`}>
                    <span className="font-mono text-xs uppercase tracking-[.05em] text-[#e5e1e4]">{label}</span>
                    <span className="font-mono text-xs font-bold uppercase tracking-[.05em] text-mint">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
