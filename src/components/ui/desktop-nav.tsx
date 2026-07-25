"use client";

import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function DesktopNavigation() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (!isManualScroll) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(
              (entry.target as HTMLElement).dataset.title ?? null,
            );
          }
        });
      }
    };

    const setupObservers = () => {
      const observer = new IntersectionObserver(observerCallback, {
        root: null,
        threshold: 0.2,
        // -50% previously broke active-section detection once project cards
        // grew taller (added preview images) — adjusted to account for that.
        rootMargin: "0px 0px -20% 0px",
      });

      navItems.forEach((item) => {
        const sectionId = item.title.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          element.dataset.title = item.title;
          observer.observe(element);
        }
      });

      observers.push(observer);
    };

    setupObservers();

    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsManualScroll(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isManualScroll]);

  const handleLinkClick = (title: string) => {
    setIsManualScroll(true);
    setActiveSection(title);
  };

  return (
    <nav
      className="mb-6 gap-y-3 lg:flex lg:flex-col"
      aria-label="In-page jump links"
    >
      <ul className="flex flex-col gap-y-5">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={() => handleLinkClick(item.title)}
              className={cn(
                "flex w-fit items-center gap-x-4 text-inactive-foreground transition-all before:h-px before:w-10 before:bg-inactive-foreground before:transition-all before:duration-200 before:ease-in-out before:content-[''] hover:text-foreground before:hover:w-30 before:hover:bg-background motion-reduce:transition-none",
                {
                  "text-foreground before:w-20 before:bg-foreground":
                    activeSection === item.title,
                },
              )}
            >
              <span className="font-bold text-xs uppercase tracking-wider">
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
