"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, ShieldCheck, Sparkles, Workflow, Youtube } from "lucide-react";

import { CountUp } from "@/components/motion/count-up";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Metric = {
  label: string;
  value: number;
  detail: string;
  suffix: string;
  decimals?: number;
};

const metrics: Metric[] = [
  { label: "platforms modernized", value: 110, suffix: "+", detail: "Cloud migrations, GitOps rollouts, and policy guardrails" },
  { label: "deployment confidence", value: 99.95, suffix: "%", decimals: 2, detail: "Release reliability with observability and auto-remediation" },
  { label: "delivery acceleration", value: 4.3, suffix: "x", decimals: 1, detail: "Lead-time reduction using Terraform, K8s, and CI orchestration" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const heroBackgroundImage =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=80";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.48, 0.3, 0.48]);

  return (
    <motion.section
      ref={sectionRef}
      className="container relative grid gap-12 overflow-hidden py-24 md:grid-cols-[1.2fr_1fr] md:items-center"
      id="hero"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="pointer-events-none absolute inset-0 -z-20 will-change-transform" style={{ y: backgroundY }}>
        <div
          className="absolute -inset-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackgroundImage})` }}
          aria-hidden="true"
        />
      </motion.div>
      <motion.div className="pointer-events-none absolute inset-0 -z-10" style={{ opacity: overlayOpacity }}>
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-background/75 to-violet-950/20 dark:from-cyan-900/35 dark:via-background/85 dark:to-violet-900/35" />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />
      </div>

      <motion.div className="space-y-8" variants={containerVariants}>
        <motion.div className="flex flex-wrap items-center gap-2" variants={itemVariants}>
          <Badge className="rounded-full border border-cyan-300/40 bg-cyan-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
            Senior DevOps & Cloud Security Engineer
          </Badge>
          <Badge variant="outline" className="rounded-full border-violet-300/50 px-4 py-1 text-xs uppercase tracking-[0.2em]">
            Open for consulting projects
          </Badge>
        </motion.div>

        <motion.h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl" variants={itemVariants}>
          Architecting <span className="text-cyan-500">secure delivery systems</span> that ship faster and fail less.
        </motion.h1>

        <motion.p className="max-w-2xl text-lg text-muted-foreground" variants={itemVariants}>
          I help engineering teams modernize infrastructure, automate compliant release pipelines, and gain production
          confidence with deep observability across AWS, Azure, Kubernetes, and Terraform stacks.
        </motion.p>

        <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
          <Button asChild size="lg" className="group rounded-full px-7">
            <Link href="#contact">
              Start a project
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-7">
            <Link href="#projects">View portfolio</Link>
          </Button>
        </motion.div>

        <motion.div className="grid gap-3 sm:grid-cols-3" variants={itemVariants}>
          {metrics.map((metric) => (
            <motion.article
              key={metric.label}
              className="rounded-2xl border border-border/80 bg-card/60 p-4 shadow-sm backdrop-blur"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <CountUp className="text-2xl font-black" value={metric.value} suffix={metric.suffix} decimals={metric.decimals ?? 0} />
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">{metric.label}</p>
              <p className="mt-2 text-xs text-muted-foreground">{metric.detail}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
          <Button asChild variant="ghost" size="sm" className="rounded-full">
            <a href="https://github.com/CodemasterDevops421" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" className="rounded-full">
            <a href="https://www.linkedin.com/in/chaitanyamelam/" target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" className="rounded-full">
            <a href="https://www.youtube.com/@CodeMaster-421" target="_blank" rel="noreferrer">
              <Youtube className="mr-2 h-4 w-4" /> YouTube
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" className="rounded-full">
            <a href="mailto:melamchaitanyakumar@gmail.com" rel="noreferrer">
              <Mail className="mr-2 h-4 w-4" /> Email
            </a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div className="relative" variants={itemVariants}>
        <div className="absolute -inset-6 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-400/10" />
        <div className="relative space-y-5 rounded-[2rem] border bg-card/70 p-6 shadow-2xl backdrop-blur-xl">
          <motion.div
            className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-primary/30"
            whileHover={{ rotate: -1, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <img
              src="/chaitanya-profile.jpg"
              alt="Chaitanya profile"
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>

          <motion.article className="space-y-3 rounded-2xl border bg-background/60 p-5" whileHover={{ y: -4 }}>
            <p className="flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-300">
              <ShieldCheck className="h-4 w-4" /> Cloud security and IAM controls
            </p>
            <p className="text-sm text-muted-foreground">
              Compliance-ready landing zones, least-privilege policy hardening, and security guardrails integrated into
              delivery workflows.
            </p>
          </motion.article>

          <motion.article className="space-y-3 rounded-2xl border bg-background/60 p-5" whileHover={{ y: -4 }}>
            <p className="flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-300">
              <Workflow className="h-4 w-4" /> CI/CD and platform automation
            </p>
            <p className="text-sm text-muted-foreground">
              End-to-end pipelines with Terraform, Kubernetes, and policy-as-code for predictable and rapid software
              delivery.
            </p>
          </motion.article>

          <motion.article className="space-y-2 rounded-2xl border border-dashed bg-background/60 p-5" whileHover={{ y: -4 }}>
            <p className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-300">
              <Sparkles className="h-4 w-4" /> Built for measurable outcomes
            </p>
            <p className="text-sm text-muted-foreground">Every engagement ties automation to lead-time, reliability, and recovery KPIs.</p>
          </motion.article>
        </div>
      </motion.div>
    </motion.section>
  );
}
