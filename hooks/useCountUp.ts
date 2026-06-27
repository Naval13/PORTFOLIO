"use client";

import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, isActive: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isActive || hasRun.current) return;
    hasRun.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    let frame: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(target * ease(progress)));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isActive, target, duration]);

  return value;
}
