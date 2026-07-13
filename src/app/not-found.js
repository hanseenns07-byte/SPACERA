import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

// Custom 404 page.
export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-6">
      <div className="text-center">
        <p className="text-7xl font-semibold text-primary dark:text-accent sm:text-8xl">
          404
        </p>
        <h1 className="mt-6 text-2xl font-medium text-ink dark:text-dark-ink sm:text-3xl">
          This space doesn&apos;t exist yet
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink/60 dark:text-dark-ink/60">
          The page you&apos;re looking for may have moved or never existed.
          Let&apos;s get you back home.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <FiArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    </section>
  );
}
