import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Hi, I'm <span className="accent">Melam Chaitanya Kumar</span>
      </h1>
      <p className="hero-sub">Senior DevOps and Cloud Security Engineer</p>
      <div className="hero-actions">
        <a href="#contact" className="btn primary">Hire Me</a>
        <a href="/resume.pdf" className="btn secondary">Resume</a>
        <a href="#projects" className="btn outline">Projects</a>
      </div>
    </section>
  )
}
