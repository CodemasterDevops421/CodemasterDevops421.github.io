export default function ExperienceTimeline({ items = [] }) {
  return (
    <ol className="relative border-s border-black/10 dark:border-white/10 ms-3">
      {items.map((it, idx) => (
        <li key={idx} className="mb-8 ms-3">
          <span className="absolute -start-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-xs font-bold shadow-glow">{it.year}</span>
          <div className="glass rounded-2xl p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h4 className="font-semibold">{it.role} · {it.company}</h4>
              <span className="text-xs px-2 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-white/70">{it.period}</span>
            </div>
            <p className="text-gray-700 dark:text-white/70 mt-2 text-sm">{it.summary}</p>
            {it.highlights?.length ? (
              <ul className="list-disc ms-5 mt-2 text-gray-700 dark:text-white/70 text-sm space-y-1">
                {it.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  )
}