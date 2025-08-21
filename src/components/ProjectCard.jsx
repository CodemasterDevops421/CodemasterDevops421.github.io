/**
 * Interactive project card with subtle hover lift.
 */
export default function ProjectCard({ title, description, tags, href, repo }) {
  return (
    <article className="glass rounded-2xl p-5 flex flex-col justify-between transition-transform hover:-translate-y-1">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-700 dark:text-white/70 mt-2 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map(t => (
            <span key={t} className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs text-gray-700 dark:text-white/70">{t}</span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        {href && (
          <a className="px-3 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition shadow-glow text-sm text-white" href={href} target="_blank" rel="noreferrer">Live</a>
        )}
        {repo && (
          <a className="px-3 py-2 rounded-xl bg-black/10 dark:bg-white/10 hover:bg-black/15 dark:hover:bg-white/15 border border-black/10 dark:border-white/10 transition text-sm" href={repo} target="_blank" rel="noreferrer">Code</a>
        )}
      </div>
    </article>
  )
}