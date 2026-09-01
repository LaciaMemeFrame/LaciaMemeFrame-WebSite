export function Sigil() {
  return (
    <svg
      className="sigil pointer-events-none absolute -right-4 top-4 w-44 text-ice lg:right-6 lg:top-8 lg:w-56"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <mask id="sigil-crescent">
          <rect width="200" height="200" fill="black" />
          <circle cx="100" cy="100" r="26" fill="white" />
          <circle cx="112" cy="94" r="20" fill="black" />
        </mask>
      </defs>

      <g className="sigil-orbit">
        <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="0.7" opacity="0.35" />
        <circle
          cx="100"
          cy="100"
          r="64"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.45"
          strokeDasharray="3 7"
        />
        <circle cx="100" cy="100" r="46" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="100" y1="8" x2="100" y2="26" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
        <line x1="100" y1="174" x2="100" y2="192" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
        <line x1="8" y1="100" x2="26" y2="100" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
        <line x1="174" y1="100" x2="192" y2="100" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
        <circle cx="100" cy="18" r="1.6" fill="currentColor" opacity="0.7" />
        <circle cx="182" cy="100" r="1.6" fill="currentColor" opacity="0.7" />
        <circle cx="100" cy="182" r="1.6" fill="currentColor" opacity="0.7" />
        <circle cx="18" cy="100" r="1.6" fill="currentColor" opacity="0.7" />
      </g>

      <circle
        className="sigil-halo"
        cx="100"
        cy="100"
        r="30"
        fill="currentColor"
        opacity="0.08"
      />
      <circle cx="100" cy="100" r="26" fill="currentColor" mask="url(#sigil-crescent)" />
    </svg>
  );
}
