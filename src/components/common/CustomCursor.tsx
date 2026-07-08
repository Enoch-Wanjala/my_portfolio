import { useEffect, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function CustomCursor() {
  const desktop = useMediaQuery('(pointer: fine) and (min-width: 1024px)');
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (!desktop) return;
    const onMove = (event: PointerEvent) => setPos({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [desktop]);

  if (!desktop) return null;
  return <div className="pointer-events-none fixed z-[100] size-5 rounded-full border border-mint/70 mix-blend-difference" style={{ transform: `translate(${pos.x - 10}px, ${pos.y - 10}px)` }} />;
}
