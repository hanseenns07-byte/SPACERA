import { FiStar } from "react-icons/fi";

// Simple 5-star rating row (filled up to `rating`).
export default function StarRating({ rating = 5, className = "" }) {
  return (
    <div
      className={`flex gap-1 text-accent ${className}`}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar
          key={i}
          className="h-4 w-4"
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}
