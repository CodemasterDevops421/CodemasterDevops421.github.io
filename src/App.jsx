import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <>
      <header className="nav">
        <nav className="container flex-between">
          <a href="#home" className="logo">MCK</a>
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
