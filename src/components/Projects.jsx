import React from 'react'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <article className="card">
          <h3>AWS EKS &amp; VPC Setup</h3>
          <p>Built AWS EKS clusters with Terraform, configured networking, IAM roles, and Auto Scaling.</p>
          <a href="https://example.com" className="link">View Project</a>
        </article>
        <article className="card">
          <h3>AWS EC2 &amp; Storage Optimization</h3>
          <p>Automated EC2 provisioning with security groups and S3 lifecycle policies.</p>
          <a href="https://example.com" className="link">View Project</a>
        </article>
        <article className="card">
          <h3>Kafka Streaming with AWS MSK</h3>
          <p>Deployed Kafka clusters on AWS MSK for log processing and real-time analytics.</p>
          <a href="https://example.com" className="link">View Project</a>
        </article>
        <article className="card">
          <h3>Azure Kubernetes (AKS) CI/CD Pipeline</h3>
          <p>Built AKS clusters and automated deployments using GitHub Actions and Helm.</p>
          <a href="https://example.com" className="link">View Project</a>
        </article>
      </div>
    </section>
  )
}
