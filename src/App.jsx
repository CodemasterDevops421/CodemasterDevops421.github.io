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

  return (
    <>
      <header className="nav">
        <nav className="container flex-between">
          <a href="#home" className="logo">CM</a>
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
