import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type ThemeContextValue = { theme: 'dark'; toggleTheme: () => void };
const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme] = useState<'dark'>('dark');
  const value = useMemo(() => ({ theme, toggleTheme: () => undefined }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
}
