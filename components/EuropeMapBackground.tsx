/**
 * Abstract, low-opacity continent silhouette used as hero texture — not a
 * literal or geographically precise map, deliberately schematic (rounded,
 * softened bumps suggesting Scandinavia / Iberia / Italy) so it reads as
 * background texture rather than an illustration competing with the copy.
 */
export function EuropeMapBackground() {
  return (
    <svg
      viewBox="0 0 900 800"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 h-full w-auto max-w-none -translate-x-1/2 opacity-[0.26] sm:opacity-[0.32]"
    >
      <defs>
        <pattern id="euro-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="#C9A24B" />
        </pattern>
        <clipPath id="euro-blob">
          <path
            d="
              M 530 55
              Q 640 50, 690 135
              Q 740 220, 755 320
              Q 770 420, 710 510
              Q 650 600, 585 650
              Q 520 700, 510 730
              Q 500 760, 465 710
              Q 430 660, 365 675
              Q 300 690, 230 645
              Q 160 600, 155 500
              Q 150 400, 190 290
              Q 230 180, 325 120
              Q 420 60, 530 55
              Z
            "
          />
          <ellipse cx="118" cy="210" rx="34" ry="52" transform="rotate(-18 118 210)" />
          <ellipse cx="95" cy="300" rx="16" ry="24" transform="rotate(-10 95 300)" />
        </clipPath>
      </defs>
      <g clipPath="url(#euro-blob)">
        <rect width="900" height="800" fill="url(#euro-dots)" />
      </g>
    </svg>
  );
}
