export function registerServiceWorker() {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    // Registration waits for load so it does not compete with critical rendering work.
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => undefined);
    });
  }
}
