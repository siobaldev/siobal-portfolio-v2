import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import CatPaws from "@/assets/cat-paws.svg";
import CatAnimation from "@/components/ui/cat-animation";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "This page doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="cotaniner flex h-svh flex-col items-center justify-center gap-y-10 overflow-hidden px-10 pt-30 max-[400px]:px-6">
      <div className="relative flex flex-col items-center justify-center text-center">
        <CatAnimation />
        <h1 className="font-bold text-not-found-h1">Meowthing to see here.</h1>
        <p className="text-body text-muted-foreground">
          This page has pawbably wandered off.
        </p>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <Link
          href="/"
          aria-label="Go back to homepage"
          className="flex w-fit items-center gap-x-2.5 rounded-md border border-border-muted bg-background px-4 py-3 font-bold text-xs uppercase tracking-widest transition-colors duration-300 hover:bg-header-bg"
        >
          <ArrowLeftIcon aria-hidden weight="bold" className="size-5" />
          Return Home
        </Link>
        <CatPaws aria-hidden className="absolute top-86 -rotate-90" />
      </div>
    </main>
  );
}
