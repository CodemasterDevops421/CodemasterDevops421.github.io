import { ArrowUpRight, Github, Linkedin, Mail, ShieldCheck, Workflow } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const metrics = [
  { label: "Release velocity", value: "60%", detail: "faster lead time" },
  { label: "Cloud cost optimization", value: "30%", detail: "infrastructure savings" },
  { label: "Production reliability", value: "99.99%", detail: "service availability" },
];

export function HeroSection() {
  return (
    <section className="container grid gap-10 py-24 md:grid-cols-[1.15fr_1fr] md:items-center" id="hero">
      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">Senior DevOps & Cloud Security Engineer</Badge>
          <Badge variant="outline" className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">
            Open for consulting projects
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Melam Chaitanya Kumar builds secure, observable delivery platforms.
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          I design production-grade cloud platforms and CI/CD systems that scale delivery speed while maintaining compliance,
          reliability, and cost efficiency for regulated engineering teams.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="#contact">
              Start a project
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects">View portfolio</Link>
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <article key={metric.label} className="rounded-xl border bg-card/40 p-4 backdrop-blur">
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{metric.label}</p>
              <p className="text-xs text-muted-foreground">{metric.detail}</p>
            </article>
          ))}
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
      <div className="relative">
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-3xl" />
        <div className="relative space-y-6 rounded-3xl border bg-card/60 p-8 shadow-xl backdrop-blur">
          <article className="space-y-3 rounded-2xl border bg-background/60 p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-primary">
              <ShieldCheck className="h-4 w-4" /> Platform security posture
            </p>
            <p className="text-sm text-muted-foreground">
              Terraform + policy-as-code + continuous runtime scanning to enforce least privilege and audit-ready controls.
            </p>
          </article>
          <article className="space-y-3 rounded-2xl border bg-background/60 p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Workflow className="h-4 w-4" /> Delivery automation
            </p>
            <p className="text-sm text-muted-foreground">
              Jenkins and GitHub Actions pipelines with quality gates, automated rollback, and release observability.
            </p>
          </article>
          <article className="rounded-2xl border bg-background/60 p-5 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Primary toolkit</p>
            Terraform · Kubernetes · Jenkins · GitHub Actions · Prometheus · Grafana
          </article>
        </div>
      </div>
    </section>
  );
}
