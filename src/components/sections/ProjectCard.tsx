import { memo } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import type { Project } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const ProjectCard = memo(function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group h-full overflow-hidden p-5 transition hover:-translate-y-2 hover:border-mint/70">
      <div className="mb-6 flex items-center justify-between">
        <Badge>{project.category}</Badge>
        <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="text-2xl text-mint">
          <FiArrowUpRight />
        </a>
      </div>
      <h3 className="text-card-title font-black tracking-[-.05em] group-hover:text-mint">{project.title}</h3>
      <p className="mt-4 leading-7 text-muted">{project.description}</p>
      <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="mt-6 aspect-[16/6] w-full border border-line object-cover" />
    </Card>
  );
});
