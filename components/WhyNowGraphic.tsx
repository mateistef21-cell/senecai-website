const LAYERS = [
  { label: "AI ACT", rotate: -8, x: -60, y: 10, opacity: 0.9 },
  { label: "GDPR", rotate: -4, x: -30, y: -6, opacity: 0.92 },
  { label: "DORA", rotate: 0, x: 0, y: -16, opacity: 1 },
  { label: "NIS2", rotate: 4, x: 30, y: -6, opacity: 0.92 },
  { label: "CRA", rotate: 8, x: 60, y: 10, opacity: 0.9 },
];

export function WhyNowGraphic() {
  return (
    <svg viewBox="0 0 400 320" className="h-auto w-full max-w-sm" aria-hidden="true">
      <circle cx="200" cy="190" r="130" fill="#C9A24B" opacity="0.08" />
      <circle cx="200" cy="190" r="90" fill="#C9A24B" opacity="0.1" />
      {LAYERS.map((layer) => (
        <g key={layer.label} transform={`translate(${200 + layer.x} ${150 + layer.y}) rotate(${layer.rotate})`}>
          <rect
            x="-70"
            y="-46"
            width="140"
            height="92"
            rx="14"
            fill="#FFFEFC"
            stroke="#C9A24B"
            strokeWidth="1.5"
            opacity={layer.opacity}
          />
          <text
            x="0"
            y="6"
            textAnchor="middle"
            fontFamily="var(--font-headline)"
            fontSize="15"
            fontWeight="800"
            fill="#8C6A2E"
          >
            {layer.label}
          </text>
        </g>
      ))}
      <g transform="translate(200 268)">
        <circle r="7" fill="#161410" />
        <circle r="14" fill="none" stroke="#161410" strokeWidth="1.2" opacity="0.3" />
      </g>
    </svg>
  );
}
