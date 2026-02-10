"use client";

import { ArrowUpRight, Github, Linkedin, Mail, ShieldCheck, Workflow, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const metrics = [
  { label: "Cloud & DevOps experience", value: "9+ years", detail: "enterprise delivery" },
  { label: "Deployment efficiency", value: "+30%", detail: "CI automation impact" },
  { label: "Manual effort reduction", value: "-40%", detail: "pipeline standardization" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroSection() {
  return (
    <motion.section
      className="container grid gap-10 py-24 md:grid-cols-[1.15fr_1fr] md:items-center"
      id="hero"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="space-y-8" variants={containerVariants}>
        <motion.div className="flex flex-wrap items-center gap-2" variants={itemVariants}>
          <Badge className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">Senior DevOps & Cloud Security Engineer</Badge>
          <Badge variant="outline" className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">
            Open for consulting projects
          </Badge>
        </motion.div>
        <motion.h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" variants={itemVariants}>
          Melam Chaitanya Kumar builds secure, observable delivery platforms.
        </motion.h1>
        <motion.p className="max-w-xl text-lg text-muted-foreground" variants={itemVariants}>
          DevOps specialist with 9+ years in AWS, Azure, Jenkins, Kubernetes, Terraform, and Ansible, focused on
          secure automation and faster enterprise delivery.
        </motion.p>
        <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
          <Button asChild size="lg" className="group">
            <Link href="#contact">
              Start a project
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects">View portfolio</Link>
          </Button>
        </motion.div>
        <motion.div className="grid gap-3 sm:grid-cols-3" variants={itemVariants}>
          {metrics.map((metric) => (
            <motion.article
              key={metric.label}
              className="rounded-xl border bg-card/40 p-4 backdrop-blur"
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{metric.label}</p>
              <p className="text-xs text-muted-foreground">{metric.detail}</p>
            </motion.article>
          ))}
        </motion.div>
        <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
          <Button asChild variant="ghost" size="sm">
            <a href="https://github.com/CodemasterDevops421" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="https://www.linkedin.com/in/chaitanyamelam/" target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="https://www.youtube.com/@CodeMaster-421" target="_blank" rel="noreferrer">
              <Youtube className="mr-2 h-4 w-4" /> YouTube
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="mailto:melamchaitanyakumar@gmail.com" target="_blank" rel="noreferrer">
              <Mail className="mr-2 h-4 w-4" /> Email
            </a>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div className="relative" variants={itemVariants}>
        <div className="hero-glow absolute -inset-8 rounded-3xl bg-gradient-to-br from-cyan-400/50 via-blue-500/20 to-violet-500/20 blur-3xl" />
        <div className="relative space-y-6 rounded-3xl border bg-card/70 p-6 shadow-xl backdrop-blur">
          <motion.div
            className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-primary/30"
            whileHover={{ rotate: -1, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <img
              src="https://avatars.githubusercontent.com/CodemasterDevops421?size=800"
              alt="Chaitanya profile"
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </motion.div>
          <motion.article className="space-y-3 rounded-2xl border bg-background/60 p-5" whileHover={{ y: -4 }}>
            <p className="flex items-center gap-2 text-sm font-semibold text-primary">
              <ShieldCheck className="h-4 w-4" /> Cloud security and IAM controls
            </p>
            <p className="text-sm text-muted-foreground">
              Security audits, access policy hardening, and compliance-oriented delivery guardrails across AWS and Azure.
            </p>
          </motion.article>
          <motion.article className="space-y-3 rounded-2xl border bg-background/60 p-5" whileHover={{ y: -4 }}>
            <p className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Workflow className="h-4 w-4" /> CI/CD and platform automation
            </p>
            <p className="text-sm text-muted-foreground">
              Jenkins, Azure DevOps, Terraform, and Kubernetes delivery patterns engineered for reliability and speed.
            </p>
          </motion.article>
        </div>
      </motion.div>
    </motion.section>
  );
}
