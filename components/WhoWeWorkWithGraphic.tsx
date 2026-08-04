const NODES = [
  { x: -120, y: -70, icon: "rocket" as const },
  { x: 120, y: -70, icon: "chip" as const },
  { x: -120, y: 70, icon: "building" as const },
  { x: 120, y: 70, icon: "flag" as const },
];

function NodeIcon({ type }: { type: "rocket" | "chip" | "building" | "flag" }) {
  switch (type) {
    case "rocket":
      return (
        <path d="M0 -13c5 3 9 9 9 17 0 4-1 7-2 9l-7 7-7-7c-1-2-2-5-2-9 0-8 4-14 9-17Z M-6 8l-4 7 M6 8l4 7 M0 -3a3 3 0 1 0 0.001 0Z" />
      );
    case "chip":
      return <path d="M-9 -9h18v18h-18z M-4 -9v-4 M4 -9v-4 M-4 13v4 M4 13v4 M-9 -4h-4 M-9 4h-4 M9 -4h4 M9 4h4 M-4 -4h8v8h-8z" />;
    case "building":
      return <path d="M-10 13V-9l10-4 10 4v22 M-10 13h20 M-5 -3h3v3h-3z M2 -3h3v3h-3z M-5 4h3v3h-3z M2 4h3v3h-3z" />;
    case "flag":
      return <path d="M-8 14V-13 M-8 -13h16l-4 6 4 6h-16" />;
  }
}

export function WhoWeWorkWithGraphic() {
  return (
    <svg viewBox="0 0 400 300" className="h-auto w-full max-w-sm" aria-hidden="true">
      <circle cx="200" cy="150" r="110" fill="#C9A24B" opacity="0.08" />
      {NODES.map((node) => (
        <line
          key={`line-${node.x}-${node.y}`}
          x1="200"
          y1="150"
          x2={200 + node.x}
          y2={150 + node.y}
          stroke="#C9A24B"
          strokeWidth="1.2"
          opacity="0.35"
        />
      ))}
      <circle cx="200" cy="150" r="26" fill="#161410" />
      <g stroke="#FBF8F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <circle cx="200" cy="150" r="5" fill="#C9A24B" stroke="none" />
      </g>
      {NODES.map((node) => (
        <g key={`${node.x}-${node.y}`} transform={`translate(${200 + node.x} ${150 + node.y})`}>
          <circle r="30" fill="#FFFEFC" stroke="#C9A24B" strokeWidth="1.5" />
          <g stroke="#8C6A2E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <NodeIcon type={node.icon} />
          </g>
        </g>
      ))}
    </svg>
  );
}
