import { Component, type ErrorInfo, type ReactNode } from 'react';

type State = { hasError: boolean };

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="grid min-h-screen place-items-center bg-ink p-6 text-white">
          <div className="max-w-lg rounded-2xl border border-line bg-panel p-8">
            <p className="eyebrow">System_fault</p>
            <h1 className="mt-4 text-3xl font-black">Something went sideways.</h1>
            <p className="mt-3 text-muted">Refresh the page or try again in a moment.</p>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
