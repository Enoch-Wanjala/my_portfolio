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
    <div className="terminal-card scanline overflow-hidden rounded-lg terminal-glow">
      <div className="flex items-center gap-2 border-b border-line bg-[#0e0e10] px-5 py-3">
        <span className="size-2 rounded-full border border-[#ffb4ab] bg-[#ffb4ab]/20" />
        <span className="size-2 rounded-full border border-mint bg-mint/20" />
        <span className="size-2 rounded-full border border-secondary bg-secondary/20" />
        <span className="ml-4 font-mono text-[10px] text-muted/70">enoch-wanjala — portfolio.js</span>
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

