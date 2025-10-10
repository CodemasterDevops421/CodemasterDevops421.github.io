import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container grid gap-10 py-24 md:grid-cols-[1.2fr_1fr] md:items-center" id="hero">
      <div className="space-y-8">
        <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
          Senior DevOps & Cloud Security Engineer
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Melam Chaitanya Kumar builds secure, observable delivery platforms.
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          10+ years engineering multi-cloud infrastructure, Kubernetes platforms, and mission-critical CI/CD for regulated enterprises.
          I codify guardrails with Terraform, automate pipelines with Jenkins and GitHub Actions, and harden workloads with zero-trust controls.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="#contact">
              Start a project
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#experience">View experience</Link>
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Core outcomes</p>
            <p>60% faster releases · 30% lower spend · 50% higher deployment frequency</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="ghost" size="sm">
              <a href="https://github.com/CodemasterDevops421" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a href="https://www.linkedin.com/in/chaitanyakumar" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a href="mailto:melamchaitanyakumar@gmail.com" target="_blank" rel="noreferrer">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/5 to-transparent blur-3xl" />
        <div className="relative rounded-3xl border bg-card/60 p-8 shadow-xl backdrop-blur">
          <ul className="space-y-6 text-sm">
            <li>
              <h3 className="text-2xl font-semibold">Platform guardrails</h3>
              <p className="text-muted-foreground">
                Terraform + GitOps delivery with policy-as-code, continuous compliance, and automated remediation.
              </p>
            </li>
            <li className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
              <div>
                <p className="text-3xl font-bold text-foreground">70+</p>
                <p>microservices secured across AWS EKS and Azure AKS.</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">24x7</p>
                <p>observability with Prometheus, Grafana, and Elastic Stack.</p>
              </div>
            </li>
            <li>
              <p className="font-medium text-foreground">Primary toolkit</p>
              <p className="text-muted-foreground">
                Terraform · Kubernetes · Jenkins · GitHub Actions · Prometheus · Grafana
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
