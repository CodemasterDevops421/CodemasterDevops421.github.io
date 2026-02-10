"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  className?: string;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  value: number;
};

export function CountUp({ className, decimals = 0, duration = 1.4, prefix = "", suffix = "", value }: CountUpProps) {
  const formatValue = (nextValue: number) => nextValue.toFixed(decimals);

  const [displayValue, setDisplayValue] = useState(() => formatValue(0));
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    if (!inView) {
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest: number) => {
        setDisplayValue(formatValue(latest));
      },
    });

    return () => controls.stop();
  }, [decimals, duration, inView, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
