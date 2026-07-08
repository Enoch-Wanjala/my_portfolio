import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/animations/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="404 — Page Not Found" description="The requested page could not be found." path="/404" keywords={['404']} />
      <Container className="grid min-h-[70vh] place-items-center text-center">
        <div>
          <p className="eyebrow">route_not_found</p>
          <h1 className="mt-5 text-hero font-black text-mint">404</h1>
          <p className="mt-4 text-muted">This page slipped through the deployment cracks.</p>
          <Link className="btn mt-8 bg-mint text-ink" to="/">Return Home</Link>
        </div>
      </Container>
    </PageTransition>
  );
}
