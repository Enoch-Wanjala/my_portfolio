const lines = [
  'const developer = {',
  '  name: "Enoch Wanjala",',
  '  role: "Frontend Specialist",',
  '  focus: ["Performance", "UX", "Clean Code"],',
  '  mission: "Driving growth through pixel-perfect experiences"',
  '};'
];

export function CodeWindow() {
  return (
    <div className="terminal-card overflow-hidden shadow-glow">
      <div className="flex items-center gap-2 border-b border-line px-5 py-3">
        <span className="size-2 rounded-full bg-red-400" />
        <span className="size-2 rounded-full bg-yellow-400" />
        <span className="size-2 rounded-full bg-mint" />
        <span className="ml-4 font-mono text-[10px] text-muted">enoch-wanjala — portfolio.js</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-xs leading-7 text-muted sm:text-sm">
        {lines.map((line, index) => (
          <code key={line} className="block">
            <span className="mr-5 text-mint/50">{String(index + 1).padStart(2, '0')}</span>
            {line}
          </code>
        ))}
      </pre>
    </div>
  );
}
