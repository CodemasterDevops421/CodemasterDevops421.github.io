export default function Footer({ links }) {
  return (
    <footer className="mt-12 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">Connect With Me</h4>
          <ul className="mt-3 space-y-2">
            {links.primary.map((l) => (
              <li key={l.label}>
                <a className="text-gray-700 dark:text-white/75 hover:text-gray-900 dark:hover:text-white" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Connect With Us</h4>
          <ul className="mt-3 space-y-2">
            {links.network.map((l) => (
              <li key={l.label}>
                <a className="text-gray-700 dark:text-white/75 hover:text-gray-900 dark:hover:text-white" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Legal</h4>
          <p className="text-gray-600 dark:text-white/60 text-sm mt-3">© {new Date().getFullYear()} Melam Chaitanya Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}