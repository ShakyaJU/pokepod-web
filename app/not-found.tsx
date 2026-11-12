import { LinkButton } from "@/components/ui/LinkButton";

export default function NotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center px-5 pt-24 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold sm:text-6xl">That page got away.</h1>
        <p className="mx-auto mt-4 max-w-md text-dim">The page you were looking for doesn&rsquo;t exist.</p>
        <LinkButton href="/" className="mt-8">Back to home</LinkButton>
      </div>
    </div>
  );
}
