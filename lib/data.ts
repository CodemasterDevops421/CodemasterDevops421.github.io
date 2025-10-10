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
