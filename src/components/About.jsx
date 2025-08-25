import React from 'react'
import resume from '../data/resume.json'

export default function About() {
  const { summary } = resume.basics
  const skills = resume.skills || []
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <p>{summary}</p>
      {skills.length > 0 && (
        <ul>
          {skills.map(skill => (
            <li key={skill.name}>
              <strong>{skill.name}:</strong> {skill.keywords.join(', ')}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
