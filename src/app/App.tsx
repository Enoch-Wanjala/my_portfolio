import { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AppRoutes } from '../routes/AppRoutes';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { BackToTop } from '../components/common/BackToTop';
import { CustomCursor } from '../components/common/CustomCursor';
import { InstallPrompt } from '../components/common/InstallPrompt';
import { ScrollProgress } from '../components/common/ScrollProgress';
import { useLenis } from '../hooks/useLenis';
import { registerServiceWorker } from '../services/pwa';

export function App() {
  const location = useLocation();
  useLenis();

  useEffect(() => {
    // Service workers are registered only in production so local dev stays refresh-friendly.
    registerServiceWorker();
  }, []);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Suspense fallback={<LoadingScreen />}>
        <AnimatePresence mode="wait">
          <AppRoutes key={location.pathname} />
        </AnimatePresence>
      </Suspense>
      <InstallPrompt />
      <BackToTop />
    </>
  );
}
