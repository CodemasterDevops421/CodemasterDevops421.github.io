import { useEffect, useState } from 'react'

/**
 * Responsive navigation bar with theme toggle and hash links.
 */
const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition ${
        scrolled
          ? 'bg-white/70 dark:bg-navy/60 backdrop-blur border-b border-black/10 dark:border-white/10'
          : 'bg-gradient-to-b from-white/80 dark:from-navy/70 to-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-tight">
          <span className="gradient-text text-xl">Melam Chaitanya Kumar</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-white/80">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-gray-900 dark:hover:text-white">
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-black/5 dark:bg-white/5"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
          <details>
            <summary className="cursor-pointer px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5">Menu</summary>
            <div className="absolute right-4 mt-2 glass rounded-xl p-3 flex flex-col gap-2">
              {links.map(l => (
                <a key={l.href} href={l.href} className="hover:text-gray-900 dark:hover:text-white/90">
                  {l.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </nav>
  )
}