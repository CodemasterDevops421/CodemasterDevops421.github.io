import React from 'react'
import resume from '../data/resume.json'
import config from '../data/config.json'

export default function Hero() {
  const { name } = resume.basics
  const tagline = config.hero?.tagline || resume.basics.label
  const cta = config.hero?.cta || 'Hire Me'
  return (
    <section className="hero">
      <h1 className="hero-title">
        Hi, I'm <span className="accent">{name}</span>
      </h1>
      <p className="hero-sub">{tagline}</p>
      <div className="hero-actions">
        <a href="#contact" className="btn primary">{cta}</a>
        <a href="/resume.pdf" className="btn secondary">Resume</a>
        <a href="#projects" className="btn outline">Projects</a>
      </div>
    </section>
  )
}
