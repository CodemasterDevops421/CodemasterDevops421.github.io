import React from 'react'
import Hero3D from './Hero3D'

/**
 * Hero section with headline, brief intro and recruiter-friendly CTAs.
 * Uses a subtle gradient accent and glass panel for depth without heavy 3D.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4"
    >
      {/* subtle 3D accent behind headline */}
      <Hero3D />
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text">
        Hi, I'm Melam Chaitanya Kumar
      </h1>
      <p className="max-w-xl text-gray-700 dark:text-white/80 mb-8">
        Senior DevOps & Cloud Security Engineer crafting secure, scalable infrastructure.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#contact"
          className="btn-primary"
        >
          Hire Me
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          Resume
        </a>
        <a
          href="#projects"
          className="btn-secondary"
        >
          Projects
        </a>
      </div>
    </section>
  )
}
