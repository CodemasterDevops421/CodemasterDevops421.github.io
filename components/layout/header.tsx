import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

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
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#" className="text-lg font-semibold tracking-tight">
          Melam Chaitanya Kumar
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden gap-6 text-sm font-medium lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-primary">
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
