import { memo } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import type { Project } from '../../types';
import { Badge } from '../ui/Badge';

export const ProjectCard = memo(function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-panel group flex h-full min-h-[25rem] flex-col justify-between rounded-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:border-mint">
      <div>
        <div className="mb-6 flex items-start justify-between gap-4">
          <Badge>{project.category}</Badge>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live website`} className="text-2xl text-mint transition-transform duration-300 group-hover:rotate-45">
            <FiArrowUpRight />
          </a>
        </div>
        <h3 className="mb-4 text-card-title font-black leading-[1.12] tracking-[-.04em] text-[#e5e1e4] transition-colors group-hover:text-mint">{project.title}</h3>
        <p className="mb-6 text-base leading-[1.6] text-muted">{project.description}</p>
      </div>
      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block overflow-hidden rounded border border-line bg-[#0e0e10]">
        <img src={project.image} alt={`${project.title} website preview`} loading="lazy" className="h-48 w-full object-cover object-top transition duration-500 group-hover:scale-[1.035]" />
      </a>
    </article>
  );
});
