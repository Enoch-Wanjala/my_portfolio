import {
  SiCss,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiReact,
  SiTypescript
} from 'react-icons/si';
import { FiCode } from 'react-icons/fi';
import type { Skill } from '../types';

export const skills: Skill[] = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript, featured: true },
  { name: 'React', icon: SiReact },
  { name: 'Flask', icon: SiFlask },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'VS Code', icon: FiCode }
];
