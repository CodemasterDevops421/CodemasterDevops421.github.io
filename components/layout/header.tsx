"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#achievements", label: "Impact" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [activeHash, setActiveHash] = useState("#about");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) {
          return;
        }

        const top = visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (top?.target.id) {
          setActiveHash(`#${top.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#" className="text-lg font-semibold tracking-tight">
          Melam Chaitanya Kumar
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden gap-6 text-sm font-medium lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  activeHash === item.href && "text-cyan-600 dark:text-cyan-300",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild size="sm" variant="outline" className="hidden lg:inline-flex">
            <Link href="#contact">Book intro call</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
