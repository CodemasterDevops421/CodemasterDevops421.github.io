import { Suspense, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Hero3D from './components/Hero3D'
import Nav from './components/Nav'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import ExperienceTimeline from './components/ExperienceTimeline'
import Footer from './components/Footer'
import data from './data/content'

export default function App() {
  const topRef = useRef(null)
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <div ref={topRef}>
      <Nav />
      <header id="home" className="relative h-[92vh]">
        <Hero3D
          headline={`Hi, I'm ${data.profile.name}`}
          subline={data.profile.tagline}
          primaryCta={{ label: 'Hire Me', href: '#contact' }}
          secondaryCta={{ label: 'View Resume', href: '/resume.pdf', target: '_blank' }}
        />
      </header>

      <main className="relative z-10">
        <Section id="about" title="About">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 leading-relaxed text-gray-700 dark:text-white/90">
              <p className="mb-4">{data.profile.about1}</p>
              <p>{data.profile.about2}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {Object.entries(data.skills).map(([category, items]) => (
                <div key={category} className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-800 dark:text-white/80 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ExperienceTimeline items={data.experience} />
        </Section>

        <Section id="projects" title="Highlighted Projects">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="glass rounded-2xl p-6 grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold">Open to DevOps and cloud security opportunities.</h3>
              <p className="text-gray-700 dark:text-white/70 mt-2">
                With 10 years of experience in AWS, Azure, Kubernetes (EKS/AKS), Terraform, CI/CD, Linux, PostgreSQL, Kafka, and Hazelcast, I can help build secure and scalable platforms.
              </p>
            </div>
            <div className="flex md:justify-end gap-3">
              {data.links.primary.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 transition shadow-glow">{l.label}</a>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <Footer links={data.links} />
    </div>
  )
}