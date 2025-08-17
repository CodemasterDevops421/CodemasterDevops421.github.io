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
        <Hero3D headline={`Hi, I'm ${data.profile.name}`} subline={data.profile.tagline} ctaLabel="See Projects" ctaHref="#projects" />
      </header>

      <main className="relative z-10">
        <Section id="about" title="About">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 leading-relaxed text-white/90">
              <p className="mb-4">{data.profile.about1}</p>
              <p className="mb-4">{data.profile.about2}</p>
              <ul className="grid grid-cols-2 gap-2 text-sm text-white/70 mt-4">
                {data.skills.core.slice(0, 12).map((s) => (
                  <li key={s} className="glass rounded-lg px-3 py-2">{s}</li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-2">Tooling</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.tooling.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">{t}</span>
                  ))}
                </div>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-2">Cloud & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.cloud.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">{t}</span>
                  ))}
                </div>
              </div>
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
              <h3 className="text-xl font-semibold">Let’s build something reliable, scalable, and fast.</h3>
              <p className="text-white/70 mt-2">I’m open to senior DevOps, platform engineering, and AI automation projects. Preferred stack: Kubernetes · Terraform · Jenkins/GitHub Actions · AWS/Azure · Python/TypeScript.</p>
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