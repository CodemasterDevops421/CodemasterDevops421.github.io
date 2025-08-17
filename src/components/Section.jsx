export default function Section({ id, title, children }) {
  return (
    <section id={id} className="relative py-16 md:py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="mx-auto max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">{title}</h2>
        {children}
      </div>
    </section>
  )
}