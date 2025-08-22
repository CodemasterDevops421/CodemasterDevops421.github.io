import React from 'react'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <article className="card">
          <h3>Project One</h3>
          <p>Infrastructure automation for a fintech platform, reducing deployment time by 70%.</p>
          <a href="https://example.com" className="link">View Project</a>
        </article>
        <article className="card">
          <h3>Project Two</h3>
          <p>Kubernetes migration that increased system reliability and scalability.</p>
          <a href="https://example.com" className="link">View Project</a>
        </article>
      </div>
    </section>
  )
}
