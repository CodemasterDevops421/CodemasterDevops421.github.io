import React from 'react'
import projects from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <article className="card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.url && (
              <a href={project.url} className="link">
                View Project
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
