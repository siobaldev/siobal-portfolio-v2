"use client";

import { useEffect, useRef, useState } from "react";
import HangingCat from "@/assets/hanging-cat.svg";
import Tooltip from "@/components/ui/tooltip";

declare global {
  interface Window {
    __onekoPos?: { x: number; y: number };
    __onekoMouse?: { x: number; y: number };
  }
}

// oneko.js is a plain vanilla script. It reads its starting position/mouse
// from data-* attributes on the <script> tag, and reports its live position back
// via window globals(__onekoPos, __onekoMouse). We read those globals on
// cleanup (toggle off) and pass them back in as data attributes on the next mount
// (toggle on), so the cat resumes where it left off instead of resetting to center.
export default function Neko() {
  const [isNekoVisible, setIsNekoVisible] = useState(true);
  const lastPosition = useRef<{ x: number; y: number } | null>(null);
  const lastMouse = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!isNekoVisible) return;

    const script = document.createElement("script");
    script.src = "/assets/oneko.js";
    script.async = true;

    if (lastPosition.current) {
      script.dataset.x = String(lastPosition.current.x);
      script.dataset.y = String(lastPosition.current.y);
    }
    if (lastMouse.current) {
      script.dataset.mouseX = String(lastMouse.current.x);
      script.dataset.mouseY = String(lastMouse.current.y);
    }

    document.body.appendChild(script);

    return () => {
      if (window.__onekoPos) {
        lastPosition.current = window.__onekoPos;
      }
      if (window.__onekoMouse) {
        lastMouse.current = window.__onekoMouse;
      }

      document.body.removeChild(script);

      const neko = document.getElementById("oneko");
      if (neko) {
        neko.remove();
      }
    };
  }, [isNekoVisible]);

  const toggleNeko = () => {
    setIsNekoVisible((prev) => !prev);
  };

  return (
    <>
      <Tooltip
        title={`${isNekoVisible ? "Hide Neko" : "Show Neko"}`}
        position={"-bottom-28"}
      />
      <HangingCat
        tabIndex={0}
        role="button"
        aria-label={
          isNekoVisible
            ? "Hide Neko cursor companion"
            : "Show Neko cursor companion"
        }
        className={`focus absolute top-4.5 right-1 w-fit cursor-pointer transition-colors duration-200 ${
          isNekoVisible ? "text-black dark:text-white" : "text-foreground"
        }`}
        onClick={toggleNeko}
      />
    </>
  );
}
