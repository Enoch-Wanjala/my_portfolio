import { useCallback, useEffect, useState } from 'react';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
};

export function InstallPrompt() {
  const [event, setEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(() => localStorage.getItem('install-dismissed') === 'true');

  useEffect(() => {
    const onPrompt = (promptEvent: Event) => {
      // Store the browser install event so the custom prompt can match the site's visual system.
      promptEvent.preventDefault();
      setEvent(promptEvent as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', onPrompt);
    return () => window.removeEventListener('beforeinstallprompt', onPrompt);
  }, []);

  const install = useCallback(async () => {
    if (!event) return;
    await event.prompt();
    await event.userChoice;
    setEvent(null);
  }, [event]);

  const close = useCallback(() => {
    localStorage.setItem('install-dismissed', 'true');
    setDismissed(true);
  }, []);

  if (!event || dismissed) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50 max-w-xs border border-line bg-panel p-4 shadow-card">
      <p className="font-mono text-xs uppercase tracking-widest text-mint">install_portfolio</p>
      <p className="mt-2 text-sm text-muted">Add this portfolio to your device for offline viewing.</p>
      <div className="mt-4 flex gap-3">
        <button className="bg-mint px-4 py-2 text-sm font-bold text-ink" onClick={() => void install()}>
          Install
        </button>
        <button className="px-4 py-2 text-sm text-muted" onClick={close}>
          Dismiss
        </button>
      </div>
    </div>
  );
}
