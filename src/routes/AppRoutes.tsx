import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';

const Home = lazy(() => import('../pages/Home'));
const Experience = lazy(() => import('../pages/Experience'));
const Skills = lazy(() => import('../pages/Skills'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

export function AppRoutes() {
  // Route-level lazy loading keeps the initial bundle lean while preserving clear page ownership.
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="experience" element={<Experience />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
