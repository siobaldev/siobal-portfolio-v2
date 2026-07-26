"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const HalftoneDots = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.HalftoneDots),
  { ssr: false },
);

// Shader mount is intentionally delayed + faded in rather than rendered
// immediately. WebGL context compilation is expensive, and doing it right
// on page load competed with the Header/About entrance animations for
// main-thread time. The delay lets those finish first; the fade masks the
// pop-in so it reads as a deliberate reveal instead of a loading stutter.
export default function ProjectPreview({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const { resolvedTheme } = useTheme();
  const [ready, setReady] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 250);
    return () => clearTimeout(timer);
  }, []);

  const isLight = resolvedTheme === "light";

  if (!ready) return null;

  return (
    <button
      type="button"
      aria-pressed={isRevealed}
      aria-label={
        isRevealed ? "Hide preview effect" : "Show full color preview"
      }
      onClick={() => setIsRevealed((prev) => !prev)}
      className="group/preview relative mt-2 aspect-video w-full cursor-pointer overflow-hidden rounded-xl focus:outline-none"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
      <HalftoneDots
        className={cn(
          "absolute inset-0 overflow-clip rounded-lg transition-opacity duration-200 group-hover/preview:opacity-0",
          isRevealed && "opacity-0",
        )}
        width="100%"
        height="100%"
        image={src}
        colorBack="#f0eee9"
        colorFront="#33312e"
        originalColors={false}
        type="gooey"
        grid="hex"
        inverted={isLight}
        size={0.5}
        radius={1.25}
        contrast={0.4}
        grainMixer={0.2}
        grainOverlay={0.2}
        grainSize={0.5}
        minPixelRatio={1}
        fit="cover"
      />
    </button>
  );
}
