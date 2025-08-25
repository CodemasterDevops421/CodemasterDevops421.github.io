import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import config from './data/config.json'

export default function App() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const defaultDark = config.theme === 'dark' || (config.theme === 'auto' && prefersDark)
  const [dark, setDark] = useState(defaultDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    document.documentElement.setAttribute('data-variant', config.variant || 'minimal')
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
        <header className="nav">
          <nav className="container flex-between" aria-label="Main navigation">
            <a href="#home" className="logo">CM</a>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li>
                <a href="/resume.pdf" className="btn primary small">Resume</a>
              </li>
            </ul>
            <button
              className="theme-btn"
              aria-label="Toggle theme"
              onClick={() => setDark(!dark)}
            >
              {dark ? '🌙' : '☀️'}
            </button>
          </nav>
        </header>
        <main id="home">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      <Footer />
    </>
  )
}
