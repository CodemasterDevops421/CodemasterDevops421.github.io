import { z } from "zod";

export const experienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  period: z.string(),
  achievements: z.array(z.string()),
  stack: z.array(z.string()),
});

export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  repo: z.string().url().optional(),
  link: z.string().url().optional(),
  highlights: z.array(z.string()),
  stack: z.array(z.string()),
});

export const skillSchema = z.object({
  category: z.string(),
  items: z.array(z.string()),
});

export const certificationSchema = z.object({
  name: z.string(),
  issuer: z.string(),
  year: z.string(),
  credentialUrl: z.string().url().optional(),
});

export const educationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  period: z.string(),
  details: z.array(z.string()).optional(),
});

export const publicationSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string().url(),
});

export const achievementSchema = z.object({
  statement: z.string(),
});

export const serviceSchema = z.object({
  title: z.string(),
  focus: z.string(),
  description: z.string(),
  outcomes: z.array(z.string()),
});

export const processStepSchema = z.object({
  title: z.string(),
  summary: z.string(),
  detail: z.string(),
});

export const testimonialSchema = z.object({
  quote: z.string(),
  name: z.string(),
  title: z.string(),
  company: z.string(),
});

export const experiences = experienceSchema.array().parse([
  {
    company: "DMAP IT Service Private Limited",
    role: "Senior DevOps & Cloud Security Engineer",
    period: "Jan 2021 – Present",
    achievements: [
      "Designed and operated production Kubernetes platforms on AWS EKS and Azure AKS for 70+ microservices with zero unplanned downtime in the last 12 months.",
      "Built Terraform- and Jenkins-backed delivery pipelines with GitHub Actions quality gates, cutting release cycle time by 60% while meeting segregation-of-duties controls.",
      "Centralized observability with Elastic Stack, Prometheus, and Grafana to deliver actionable SLO dashboards and automated incident workflows.",
      "Hardened multi-cloud landing zones through IAM least-privilege, VPC segmentation, and continuous compliance scanning (CIS, NIST).",
    ],
    stack: [
      "AWS EKS",
      "Azure AKS",
      "Terraform",
      "Jenkins",
      "GitHub Actions",
      "Elastic Stack",
      "Prometheus",
      "Grafana",
      "IAM",
      "VPC",
    ],
  },
  {
    company: "BMM EA Service Private Limited",
    role: "Senior DevOps Engineer",
    period: "Jun 2020 – Dec 2020",
    achievements: [
      "Containerized legacy services with Docker and migrated workloads onto Kubernetes with automated blue/green rollouts.",
      "Delivered reusable Terraform modules spanning AWS and Azure, accelerating infrastructure provisioning by 40%.",
      "Embedded automated testing, security scanning, and policy enforcement across CI/CD workflows to improve deployment reliability.",
    ],
    stack: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS",
      "Azure",
      "GitLab CI",
      "GitHub Actions",
      "Aqua Trivy",
    ],
  },
  {
    company: "Tech Mahindra",
    role: "DevOps Engineer",
    period: "Sept 2015 – May 2020",
    achievements: [
      "Managed enterprise CI/CD pipelines with Jenkins and GitLab CI across hybrid cloud estates supporting 200+ applications.",
      "Codified infrastructure with Terraform and Ansible to deliver consistent environments across VMware, AWS, and Azure.",
      "Implemented Prometheus- and Grafana-driven performance monitoring that improved system availability by 25%.",
    ],
    stack: [
      "Jenkins",
      "GitLab CI",
      "Terraform",
      "Ansible",
      "Prometheus",
      "Grafana",
      "VMware",
      "AWS",
      "Azure",
    ],
  },
]);

export const projects = projectSchema.array().parse([
  {
    name: "Cloud Infrastructure Automation",
    description:
      "Modular Terraform ecosystem standardizing secure-by-default landing zones and service blueprints across AWS and Azure.",
    highlights: [
      "Published reusable modules with automated unit tests (Terratest) and policy checks (OPA) for compliant provisioning.",
      "Integrated with CI/CD pipelines to provide drift detection, change windows, and automated rollbacks across environments.",
    ],
    stack: ["Terraform", "Terratest", "OPA", "AWS", "Azure", "GitHub Actions"],
  },
  {
    name: "Kubernetes Security Hardening",
    description:
      "Defense-in-depth guardrails for multi-tenant Kubernetes clusters running regulated workloads.",
    highlights: [
      "Implemented network policies, PodSecurityStandards, and RBAC least-privilege across EKS and AKS.",
      "Automated vulnerability scanning with Trivy and Falco alerts wired into Slack and PagerDuty for rapid response.",
    ],
    stack: ["EKS", "AKS", "OPA Gatekeeper", "Trivy", "Falco", "Prometheus"],
  },
  {
    name: "CI/CD Pipeline Optimization",
    description:
      "GitHub Actions workflows orchestrating quality, security, and deployment automation for microservices fleets.",
    highlights: [
      "Introduced parallelized test, build, and scan stages with dynamic environments, reducing lead time by 55%.",
      "Integrated SAST, DAST, and dependency checks with automated reporting into Jira and Slack.",
    ],
    stack: ["GitHub Actions", "Jenkins", "SonarQube", "OWASP ZAP", "Docker", "Kubernetes"],
  },
]);

export const skills = skillSchema.array().parse([
  {
    category: "Cloud Platforms",
    items: ["AWS", "Azure", "GCP", "EKS", "AKS", "ECR", "Azure Storage", "Azure SQL"],
  },
  {
    category: "DevOps & Automation",
    items: ["Terraform", "Ansible", "Jenkins", "GitHub Actions", "GitLab CI", "Docker", "Kubernetes"],
  },
  {
    category: "Languages",
    items: ["Python", "Java", "Bash", "Shell"],
  },
  {
    category: "Monitoring & Security",
    items: ["Prometheus", "Grafana", "ELK Stack", "Splunk", "CloudWatch", "Azure Monitor"],
  },
  {
    category: "Databases & Messaging",
    items: ["PostgreSQL", "AWS RDS", "Azure SQL", "MongoDB", "Kafka", "RabbitMQ", "Hazelcast"],
  },
  {
    category: "Practices",
    items: ["Linux Administration", "Agile Delivery", "Cost Optimization", "Incident Response"],
  },
]);

export const certifications = certificationSchema.array().parse([
  {
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    year: "2023",
    credentialUrl: "https://aws.amazon.com/certification/certified-solutions-architect-professional/",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation",
    year: "2022",
    credentialUrl: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    year: "2021",
    credentialUrl: "https://learn.microsoft.com/azure/certifications/azure-administrator/",
  },
]);

export const education = educationSchema.array().parse([
  {
    institution: "University of Central Missouri",
    degree: "M.S. Computer Information Systems",
    period: "Aug 2023 – May 2025",
    details: [
      "Focus: cloud security, distributed systems, and advanced analytics.",
      "Graduate assistant supporting DevOps automation for research computing labs.",
    ],
  },
  {
    institution: "Jawaharlal Nehru Technological University",
    degree: "B.Tech. Computer Science and Engineering",
    period: "Aug 2010 – May 2014",
    details: ["Capstone: high-availability web services with automated failover."],
  },
]);

export const achievements = achievementSchema.array().parse([
  { statement: "Reduced multi-cloud infrastructure costs by 30% through rightsizing, reserved capacity, and FinOps guardrails." },
  { statement: "Led cross-functional DevOps initiatives that improved deployment frequency by 50% while maintaining compliance." },
  { statement: "Mentored and upskilled 15+ engineers via DevOps enablement programs and best-practice workshops." },
]);

export const services = serviceSchema.array().parse([
  {
    title: "Platform Foundations",
    focus: "Cloud landing zones & IAM",
    description: "Codify secure-by-default AWS and Azure environments with reusable Terraform modules and guardrails.",
    outcomes: [
      "Network segmentation, logging, and zero-trust access baked into every account and subscription.",
      "Automated policy-as-code checks and drift detection to keep environments audit-ready.",
    ],
  },
  {
    title: "Delivery Automation",
    focus: "CI/CD pipelines & quality gates",
    description: "Design resilient build, test, and release automation that accelerates delivery without sacrificing control.",
    outcomes: [
      "Parallelized pipelines with dynamic environments, SAST/DAST scans, and deployment orchestration.",
      "Observability baked into delivery workflows with actionable insights for teams and leadership.",
    ],
  },
  {
    title: "Kubernetes Operations",
    focus: "Secure multi-cluster management",
    description: "Run production-ready EKS/AKS platforms with compliance, resiliency, and cost efficiency at scale.",
    outcomes: [
      "GitOps deployment patterns with policy enforcement, runtime scanning, and automated remediation.",
      "SLO-aligned monitoring, autoscaling policies, and chaos-ready incident response procedures.",
    ],
  },
]);

export const processSteps = processStepSchema.array().parse([
  {
    title: "Discover & baseline",
    summary: "Assess current delivery, security, and reliability maturity.",
    detail: "Map architecture, compliance controls, and pain points. Produce a quantified backlog prioritized by risk and impact.",
  },
  {
    title: "Design guardrails",
    summary: "Blueprint target platforms and delivery workflows.",
    detail: "Define reference architectures, IaC modules, and governance policies with clear success metrics and SLOs.",
  },
  {
    title: "Implement & enable",
    summary: "Ship iterative improvements with embedded enablement.",
    detail: "Pair with teams to deploy automation, migrate workloads, and hand off playbooks backed by documentation and training.",
  },
  {
    title: "Operate & optimize",
    summary: "Continuously tune performance, spend, and resilience.",
    detail: "Establish runbooks, error budgets, and feedback loops with dashboards highlighting outcomes for stakeholders.",
  },
]);

export const testimonials = testimonialSchema.array().parse([
  {
    quote:
      "Chaitanya turned a fragile release process into a compliant delivery platform that now ships daily without weekend fire drills.",
    name: "Priya Natarajan",
    title: "Director of Engineering",
    company: "RegulaPay",
  },
  {
    quote:
      "He codified our landing zones and Kubernetes clusters with guardrails the auditors loved—and our developers finally trust.",
    name: "Marcus Hill",
    title: "VP Infrastructure",
    company: "FinSight Analytics",
  },
  {
    quote:
      "From observability to cost controls, every initiative delivered measurable ROI within the first quarter.",
    name: "Lena Hoffman",
    title: "CTO",
    company: "Northwind Health",
  },
]);

export const publications = publicationSchema.array().parse([
  {
    title: "DevOps Security Best Practices",
    description: "Playbook for embedding threat modeling, policy-as-code, and automated compliance into CI/CD.",
    link: "https://medium.com/@melamchaitanyakumar/devops-security-best-practices",
  },
  {
    title: "Kubernetes Monitoring with Prometheus and Grafana",
    description: "Hands-on guide for building actionable SLO dashboards and alerting pipelines on EKS.",
    link: "https://medium.com/@melamchaitanyakumar/kubernetes-monitoring-with-prometheus-and-grafana",
  },
]);
