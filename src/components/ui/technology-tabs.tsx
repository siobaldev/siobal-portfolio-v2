"use client";

import Image from "next/image";
import { useState } from "react";
import { allTechItems, mainTechItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import Tooltip from "./tooltip";

type TechView = "Main" | "All";

export default function TechnologyTabs() {
  const [view, setView] = useState<TechView>("Main");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-x-4">
        <button
          type="button"
          onClick={() => setView("Main")}
          className={cn(
            "focus cursor-pointer text-inactive-foreground text-sm transition-colors",
            view === "Main" && "cursor-default text-foreground",
          )}
        >
          Main Technologies
        </button>
        <span className="text-inactive-foreground">|</span>
        <button
          type="button"
          onClick={() => setView("All")}
          className={cn(
            "focus cursor-pointer text-inactive-foreground text-sm transition-colors",
            view === "All" && "cursor-default text-foreground",
          )}
        >
          All Technologies
        </button>
      </div>

      {view === "Main" && (
        <div className="grid grid-cols-2 gap-4 max-[550px]:grid-cols-1">
          {mainTechItems.map((item) => (
            <div
              key={item.title}
              className="inline-flex items-center gap-x-4 rounded-lg bg-header-bg p-3"
            >
              <div
                className="rounded-md p-2 transition group-hover:scale-110"
                style={{ backgroundColor: `${item.bgColor}20` }}
              >
                <Image
                  src={item.icon}
                  className="size-6"
                  width={100}
                  height={100}
                  alt={item.alt}
                />
              </div>

              <div>
                <h3 className="text-foreground">{item.title}</h3>
                <p className="text-inactive-foreground text-xs tracking-wide">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "All" && (
        <div className="flex flex-col items-center gap-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {allTechItems.map((item) => (
              <div
                key={item.title}
                className="group relative inline-flex items-center rounded-lg bg-header-bg p-3"
              >
                <div className="rounded-md p-2">
                  <Image
                    src={item.icon}
                    className="size-6"
                    width={100}
                    height={100}
                    alt={item.alt}
                  />
                </div>
                <Tooltip title={item.title} position={"-top-14"} />
              </div>
            ))}
          </div>
          <p className="max-w-md text-center text-inactive-foreground text-xs italic">
            Disclaimer: This list includes all the technologies I&apos;ve worked
            with in the past, but does not necessarily reflect the ones I am
            most proficient in.
          </p>
        </div>
      )}
    </div>
  );
}
