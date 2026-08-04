"use client";

import type { DotLottie } from "@lottiefiles/dotlottie-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function CatAnimation() {
  const { resolvedTheme } = useTheme();
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!dotLottie) return;

    const handleLoad = () => setIsLoaded(true);
    dotLottie.addEventListener("load", handleLoad);

    return () => {
      dotLottie.removeEventListener("load", handleLoad);
    };
  }, [dotLottie]);

  // Theming can't be applied until the "load" event fires. The dotLottie
  // instance exists as soon as the ref callback runs, but the WASM engine
  // hasn't parsed the animation/manifest yet at that point — calling
  // setTheme() before "load" fires fails silently, since the theme data
  // (defined inside the .lottie file itself) isn't available yet.
  useEffect(() => {
    if (!dotLottie || !isLoaded || !mounted) return;
    const themeId = resolvedTheme === "dark" ? "dark-theme" : "light-theme";
    dotLottie.setTheme(themeId);
  }, [dotLottie, isLoaded, resolvedTheme, mounted]);

  if (!mounted) return null;

  return (
    <DotLottieReact
      aria-label="404 cat animation"
      src="/assets/404.lottie"
      dotLottieRefCallback={setDotLottie}
      loop
      autoplay
      className="absolute top-not-found-top size-not-found-404"
    />
  );
}
