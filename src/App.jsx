import { useEffect } from 'react'
import Nav from './components/Nav'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import ContactForm from './components/ContactForm'
import Hero from './components/Hero'
import Footer from './components/Footer'
import data from './data/content'

/**
 * Main application layout composed of semantic sections.
 * Smooth scrolling respects prefers-reduced-motion for accessibility.
 */
export default function App() {
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' })
      }
    }
  }, [])

  return (
    <div>
      <Nav />
      <Hero />
      <main className="relative z-10">
        <Section id="about" title="About">
          <div className="glass rounded-2xl p-6 leading-relaxed text-gray-700 dark:text-white/90 max-w-3xl mx-auto">
            <p className="mb-4">{data.profile.about1}</p>
            <p>{data.profile.about2}</p>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(data.skills).map(([category, items]) => (
              <div key={category} className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-2">{category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <li
                      key={item}
                      className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-800 dark:text-white/80 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.projects.map(p => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </Section>
      </main>
      <Footer links={data.links} />
    </div>
  )
}
