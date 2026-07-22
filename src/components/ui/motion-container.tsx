"use client";

import { motion, type Variants } from "motion/react";
import type { ComponentPropsWithoutRef, ElementType } from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

type MotionContainerProps<T extends ElementType> = {
  as?: T;
  inView?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "inView">;

/**
 * Wraps children in a Motion container that staggers the animation of any
 * nested `MotionItem` children.
 *
 * Two trigger modes:
 * - Default (`inView` omitted): animates once on mount. Use for above-the-fold
 *   content like `Header`, where the animation should play immediately.
 * - `inView`: animates once the container scrolls into the viewport (fires
 *   immediately on mount if already visible, e.g. desktop/tablet two-column
 *   layouts). Use for below-the-fold sections like `About`/`Projects`.
 *
 * @param as - HTML element/tag to render as (default: "div")
 * @param inView - If true, uses scroll-triggered animation instead of mount-triggered
 * @param variants - Custom stagger timing/transition; falls back to default values
 */

export default function MotionContainer<T extends ElementType = "div">({
  as,
  inView = false,
  children,
  ...props
}: MotionContainerProps<T>) {
  const Component = motion.create(as ?? "div");

  const trigger = inView
    ? { whileInView: "show", viewport: { once: true, amount: 0.2 } }
    : { animate: "show" };

  return (
    <Component variants={container} initial="hidden" {...trigger} {...props}>
      {children}
    </Component>
  );
}
