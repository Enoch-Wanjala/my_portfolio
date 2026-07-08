import { memo } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import type { Project } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const ProjectCard = memo(function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group h-full overflow-hidden p-5 transition hover:-translate-y-2 hover:border-mint/80">
      <div className="mb-6 flex items-center justify-between">
        <Badge>{project.category}</Badge>
        <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live website`} className="grid size-9 place-items-center rounded bg-[#22c55e] text-xl text-[#004b1e] transition group-hover:bg-mint">
          <FiArrowUpRight />
        </a>
      </div>
      <h3 className="text-card-title font-black tracking-[-.04em] group-hover:text-mint">{project.title}</h3>
      <p className="mt-4 leading-7 text-muted">{project.description}</p>
      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="mt-6 block overflow-hidden rounded-lg border border-line bg-[#0e0e10]">
        <img src={project.image} alt={`${project.title} website preview`} loading="lazy" className="aspect-[16/8] w-full object-cover object-top transition duration-500 group-hover:scale-[1.035]" />
      </a>
      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[.05em] text-mint hover:underline">
        Visit live website <FiArrowUpRight />
      </a>
    </Card>
  );
});

