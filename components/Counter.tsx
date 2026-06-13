"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function Counter({ value, suffix = "%" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 1.6, ease: "easeOut" });
    }
  }, [count, inView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
