import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent" />
      <div className="container relative grid gap-10 rounded-3xl border bg-background/80 p-10 text-center shadow-2xl md:p-16">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">Ready when you are</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Let’s ship compliant, observable platforms without slowing teams down
          </h2>
          <p className="text-base text-muted-foreground">
            Whether you need a Terraform landing zone, enterprise GitOps, or Kubernetes hardening, you’ll get a roadmap, metrics,
            and enablement that stick long after launch.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#contact">Book a discovery call</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="mailto:melamchaitanyakumar@gmail.com" rel="noreferrer">
              Request capability deck
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
