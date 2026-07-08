import { useMemo, useState } from 'react';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { Reveal } from '../animations/Reveal';
import { cn } from '../../utils/cn';

export function ProjectGrid({ filterable = false }: { filterable?: boolean }) {
  const [filter, setFilter] = useState('All');
  // Filters are derived from project tags so adding a project automatically updates the UI.
  const filters = useMemo(() => ['All', ...Array.from(new Set(projects.flatMap((project) => project.tags)))], []);
  const visible = useMemo(() => (filter === 'All' ? projects : projects.filter((project) => project.tags.includes(filter))), [filter]);

  return (
    <section className="py-fluid-sm">
      {filterable && (
        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((item) => (
            <button key={item} className={cn('border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest', filter === item ? 'bg-mint text-ink' : 'bg-panel text-white')} onClick={() => setFilter(item)}>
              {item}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-7 md:grid-cols-2">
        {visible.map((project) => (
          <Reveal key={project.title}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
