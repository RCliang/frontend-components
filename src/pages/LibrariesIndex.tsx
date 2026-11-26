import { Link } from 'react-router'
import { libraries, roleOrder } from '../content/libraries'

export function LibrariesIndex() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">库</h1>
        <p className="mt-3 max-w-2xl leading-7">这些库要么提供行为，要么只做一件事，要么交付做好的视觉。</p>
      </header>

      {roleOrder.map((role) => {
        const group = Object.values(libraries).filter((library) => library.role === role)
        const label = group[0]?.roleLabel
        if (!label) return null
        return (
          <section key={role}>
            <h2 className="text-sm text-ink/70">{label}</h2>
            <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.map((library) => (
                <li key={library.id}>
                  <Link
                    to={`/libraries/${library.id}`}
                    className="block h-full rounded-lg border border-line bg-stage p-4"
                  >
                    <p className="font-medium">{library.name}</p>
                    <p className="mt-1 text-sm leading-6 text-ink/70">{library.summary}</p>
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
