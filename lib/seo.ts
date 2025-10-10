import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://codemasterdevops421.github.io";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Melam Chaitanya Kumar | Senior DevOps & Cloud Security Engineer",
    template: "%s | Melam Chaitanya Kumar",
  },
  description:
    "Portfolio for Melam Chaitanya Kumar showcasing 10+ years of experience in Kubernetes, Terraform, CI/CD, and cloud security across AWS and Azure.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Melam Chaitanya Kumar | Senior DevOps & Cloud Security Engineer",
    description:
      "Production-ready DevOps portfolio featuring infrastructure automation, Kubernetes security hardening, and CI/CD optimization projects.",
    locale: "en_US",
    siteName: "Chaitanya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@CodemasterDevops421",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};
