import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? 'bg-black/60 backdrop-blur border-b border-white/10' : 'bg-gradient-to-b from-black/70 to-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-tight">
          <span className="gradient-text text-xl">Chaitanya</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-white/80">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-white">{l.label}</a>
          ))}
        </div>
        <div className="md:hidden">
          <details>
            <summary className="cursor-pointer px-3 py-1 rounded-lg bg-white/5">Menu</summary>
            <div className="absolute right-4 mt-2 glass rounded-xl p-3 flex flex-col gap-2">
              {links.map(l => (
                <a key={l.href} href={l.href} className="hover:text-white/90">{l.label}</a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </nav>
  )
}