import { Link } from 'react-router'
import { libraries, roleOrder } from '../content/libraries'

export function LibrariesIndex() {
  return (
    <div className="flex flex-col gap-14">
      <header className="specimen-in">
        <p className="font-mono text-[11px] tracking-[0.22em] text-muted">出处</p>
        <h1 className="mt-3 font-serif text-6xl leading-none tracking-tight sm:text-7xl">库</h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">这些库要么提供行为，要么只做一件事，要么交付做好的视觉。</p>
      </header>

      {roleOrder.map((role, roleIndex) => {
        const group = Object.values(libraries).filter((library) => library.role === role)
        const label = group[0]?.roleLabel
        if (!label) return null
        return (
          <section key={role}>
            <div className="flex items-baseline gap-3 border-b border-line pb-3">
              <span className="font-mono text-xs text-accent">{String(roleIndex + 1).padStart(2, '0')}</span>
              <h2 className="font-serif text-3xl leading-none">{label}</h2>
            </div>
            <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.map((library) => (
                <li key={library.id} className="min-w-0">
                  <Link
                    to={`/libraries/${library.id}`}
                    className="specimen-card flex h-full flex-col rounded-xl border border-line bg-stage px-5 py-5"
                  >
                    <p className="font-mono text-[11px] tracking-[0.16em] text-muted">{label}</p>
                    <p className="mt-3 font-serif text-3xl leading-none tracking-tight">{library.name}</p>
                    <p className="mt-3 text-sm leading-6 text-muted">{library.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
