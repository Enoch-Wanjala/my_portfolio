export function LoadingScreen() {
  return (
    <div className="grid min-h-screen place-items-center bg-ink text-white" role="status" aria-live="polite">
      <div className="terminal-card w-[min(90vw,420px)] p-6">
        <p className="eyebrow">boot_sequence</p>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse bg-mint" />
        </div>
      </div>
    </div>
  );
}
