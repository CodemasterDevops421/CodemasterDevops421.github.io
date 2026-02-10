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
    company: "PMAM IT Service Private Limited",
    role: "DevOps Specialist",
    period: "Jan 2021 – Present",
    achievements: [
      "Automated CI processes with Python scripts and Azure DevOps integration, increasing deployment efficiency by 30%.",
      "Built and deployed Java and .NET pipelines with Jenkins, Docker, and Azure DevOps, reducing manual effort by 40%.",
      "Developed Bash and SQL*Plus scripts for Oracle automation and optimized Maven builds across Linux, UNIX, and Windows VMs.",
      "Implemented Kubernetes and Helm deployment patterns and conducted cloud security audits with IAM policy hardening.",
    ],
    stack: ["Python", "Jenkins", "Azure DevOps", "Docker", "Kubernetes", "Helm", "Oracle", "Maven", "IAM"],
  },
  {
    company: "Kohl’s Department Stores (Reva Consulting Inc)",
    role: "DevOps Engineer",
    period: "Sept 2015 – May 2020",
    achievements: [
      "Established Git branching and naming conventions, reducing merge conflicts by 20%.",
      "Automated Terraform deployments via Jenkins pipelines, accelerating infrastructure delivery by 30%.",
      "Integrated Git and Jenkins for continuous integration workflows, lowering build times by 25%.",
      "Automated provisioning and deployments with Ansible and released microservices through Docker Compose and Kubernetes.",
    ],
    stack: ["Git", "Jenkins", "Terraform", "Ansible", "Docker Compose", "Kubernetes", "Nexus", "Artifactory"],
  },
  {
    company: "Reva Consulting Inc",
    role: "Middleware Engineer",
    period: "Feb 2014 – Sept 2015",
    achievements: [
      "Managed software integration with Jenkins and Maven-based CI pipelines for enterprise Java applications.",
      "Built Jenkins master-slave configurations to improve build parallelism and reliability.",
      "Configured high-availability and SSL for Oracle WebLogic infrastructure.",
      "Automated domain provisioning and server operations using shell scripts and WLST.",
    ],
    stack: ["Jenkins", "Maven", "Oracle WebLogic", "WLST", "Shell", "SSL", "Linux"],
  },
]);

export const projects = projectSchema.array().parse([
  {
    name: "AWS VPC with EKS",
    description:
      "Terraform-driven AWS networking and Kubernetes platform provisioning for production-style workloads.",
    repo: "https://github.com/CodemasterDevops421/AWS_VPC_with_EKS",
    highlights: [
      "Provisioned VPC networking for EKS with subnet strategy aligned to secure cluster operations.",
      "Configured Kubernetes clusters with IAM roles and network policies to enforce least-privilege boundaries.",
    ],
    stack: ["AWS", "Terraform", "EKS", "IAM", "Kubernetes Network Policies"],
  },
  {
    name: "AWS VPC with EC2",
    description: "Infrastructure-as-code blueprint for VPC, subnet, security group, and EC2 provisioning.",
    repo: "https://github.com/CodemasterDevops421/AWS_VPC_with_EC2",
    highlights: [
      "Created reusable VPC architecture including segmented subnets and hardened security groups.",
      "Deployed EC2 instances using Terraform and integrated operational visibility through CloudWatch.",
    ],
    stack: ["AWS", "Terraform", "EC2", "VPC", "CloudWatch"],
  },
]);

export const skills = skillSchema.array().parse([
  {
    category: "Cloud & Security",
    items: ["AWS", "Azure", "Google Cloud", "IAM", "Encryption", "Access Controls"],
  },
  {
    category: "CI/CD & Build",
    items: ["Jenkins", "Azure DevOps", "Maven", "Gradle", "ANT"],
  },
  {
    category: "Infrastructure Automation",
    items: ["Terraform", "Ansible", "Kubernetes", "Docker", "Helm"],
  },
  {
    category: "Programming",
    items: ["Python", "Java", "Bash", "PowerShell"],
  },
  {
    category: "Data & Platforms",
    items: ["MySQL", "Oracle", "MongoDB", "Linux", "UNIX", "Windows", "CentOS"],
  },
  {
    category: "Repositories & ITSM",
    items: ["Nexus", "Artifactory", "GitHub", "ServiceNow"],
  },
]);

export const certifications = certificationSchema.array().parse([
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation",
    year: "2022",
    credentialUrl: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
  },
]);

export const education = educationSchema.array().parse([
  {
    institution: "Northwestern Polytechnic University, California, USA",
    degree: "Master of Science in Electrical Engineering",
    period: "2015",
  },
  {
    institution: "Jawaharlal Nehru Technological University, Hyderabad",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    period: "2013",
  },
]);

export const achievements = achievementSchema.array().parse([
  { statement: "Improved deployment efficiency by 30% through Python automation and Azure DevOps integration." },
  { statement: "Reduced manual delivery effort by 40% by standardizing Jenkins + Docker + Azure DevOps pipelines." },
  { statement: "Cut enterprise merge conflicts by 20% and CI build times by 25% through Git/Jenkins workflow optimization." },
]);

export const services = serviceSchema.array().parse([
  {
    title: "CI/CD Pipeline Engineering",
    focus: "Jenkins and Azure DevOps",
    description: "Design and optimize release pipelines for Java, .NET, and containerized workloads.",
    outcomes: [
      "Automated build, test, and deployment stages with measurable reductions in manual effort.",
      "Standardized branching and release controls to lower integration risk and improve lead time.",
    ],
  },
  {
    title: "Cloud & IaC Automation",
    focus: "Terraform and Ansible",
    description: "Build secure, repeatable infrastructure delivery for AWS and Azure using code-first patterns.",
    outcomes: [
      "Reproducible VPC and compute provisioning across environments with policy-driven controls.",
      "Automated configuration and deployment workflows for faster, safer infrastructure changes.",
    ],
  },
  {
    title: "Kubernetes Platform Operations",
    focus: "Docker, Kubernetes, Helm",
    description: "Implement and operate production-grade Kubernetes delivery with secure container practices.",
    outcomes: [
      "Helm-based deployment lifecycle management and service rollout consistency.",
      "Integrated observability and access controls for reliable multi-team cluster operations.",
    ],
  },
]);

export const processSteps = processStepSchema.array().parse([
  {
    title: "Assess",
    summary: "Map your current delivery and runtime posture.",
    detail: "Review architecture, tooling, and operational bottlenecks to baseline reliability, speed, and security.",
  },
  {
    title: "Design",
    summary: "Define practical target-state DevOps architecture.",
    detail: "Create implementation blueprints for pipelines, infrastructure automation, and governance guardrails.",
  },
  {
    title: "Implement",
    summary: "Ship prioritized automation in short iterations.",
    detail: "Deliver CI/CD, IaC, and Kubernetes improvements with measurable release and efficiency outcomes.",
  },
  {
    title: "Optimize",
    summary: "Continuously improve performance and reliability.",
    detail: "Use metrics and incident insights to tune build speed, deployment quality, and platform resilience.",
  },
]);

export const testimonials = testimonialSchema.array().parse([
  {
    quote: "Chaitanya automated our release process end-to-end and gave us confidence to deploy more often with fewer incidents.",
    name: "Engineering Manager",
    title: "Platform Engineering",
    company: "Retail Enterprise",
  },
  {
    quote: "His Terraform and Ansible implementation reduced provisioning times dramatically and improved consistency across teams.",
    name: "Cloud Program Lead",
    title: "Infrastructure",
    company: "Consulting Partner",
  },
  {
    quote: "From WebLogic operations to Kubernetes modernization, he brings deep hands-on execution and dependable delivery.",
    name: "Delivery Director",
    title: "Technology Services",
    company: "Enterprise Services",
  },
]);

export const publications = publicationSchema.array().parse([
  {
    title: "CodeMaster DevOps",
    description: "DevOps insights, implementation notes, and best practices on infrastructure automation and cloud operations.",
    link: "https://codemasterdevops.substack.com/",
  },
]);
