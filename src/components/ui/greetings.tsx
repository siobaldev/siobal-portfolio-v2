"use client";

import { useEffect, useState } from "react";

function getGreeting(): string {
  const hour = new Date().getHours();

  if (hour >= 0 && hour < 5) return "Up Late?";
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  if (hour < 22) return "Good Evening";
  return "Still Awake?";
}

// Client-rendered intentionally — next/script caused hydration/SSR issues.
export default function Greeting() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <span className="font-bold text-xs uppercase tracking-widest">
      <span className="inline-block">{greeting ?? "Hello"}</span> — I&apos;m
    </span>
  );
}
