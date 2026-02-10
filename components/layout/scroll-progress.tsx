"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = documentHeight > 0 ? Math.min(100, (scrollTop / documentHeight) * 100) : 0;
      setProgress(value);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-1 bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_20px_rgba(56,189,248,0.8)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
