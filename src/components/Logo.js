// Inline SVG recreation of the SPACERA house mark (outline house + gold "S").
// Uses `currentColor` for the house so it adapts to light/dark automatically,
// while the "S" stroke stays brand-gold. Accompanied by the wordmark.

export default function Logo({ className = "", showText = true }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="h-9 w-9"
        fill="none"
        aria-hidden="true"
      >
        {/* House outline */}
        <path
          d="M20 42 L20 82 L80 82 L80 42 M14 46 L50 16 L86 46"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Gold S sweep */}
        <path
          d="M78 46 L52 46 C44 46 44 58 52 58 C60 58 60 70 52 70 L30 70"
          stroke="#B68C5A"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showText && (
        <span className="text-xl font-semibold tracking-[0.2em] lowercase">
          spacera
        </span>
      )}
    </span>
  );
}
