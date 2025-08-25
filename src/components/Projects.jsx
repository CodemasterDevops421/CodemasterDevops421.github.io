import React from 'react'
import resume from '../data/resume.json'

export default function Projects() {
  const projects = resume.projects || []
    return (
      <section id="projects" className="section reveal">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <article className="card reveal" key={project.name}>
              <h3>{project.name}</h3>
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
