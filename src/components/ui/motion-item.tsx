"use client";

import { motion, type Variants } from "motion/react";
import type { ComponentPropsWithoutRef, ElementType } from "react";

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

type MotionItemProps<T extends ElementType> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/**
 * A single animated child of `MotionContainer`. Must be rendered inside a
 * `MotionContainer` to receive stagger timing via Motion's variant propagation
 * (context-based, works through any number of plain nested elements).
 *
 * @param as - HTML element/tag to render as (default: "div")
 * @param variants - Custom enter animation; falls back to default fade + slide-up
 */

export default function MotionItem<T extends ElementType = "div">({
  as,
  children,
  ...props
}: MotionItemProps<T>) {
  const Component = motion.create(as ?? "div");

  return (
    <Component variants={item} {...props}>
      {children}
    </Component>
  );
}
