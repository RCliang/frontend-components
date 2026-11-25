import { useState } from 'react'
import { Link } from 'react-router'
import { categories } from '../content/categories'
import { libraries, roleOrder } from '../content/libraries'
import { terms } from '../content/terms'
import { matchTerm } from '../domain/search'

export function Home() {
  const [query, setQuery] = useState('')
  const groups = Object.values(categories).map((category) => ({
    category,
    terms: Object.values(terms).filter(
      (term) => term.category === category.id && matchTerm(term, query),
    ),
  }))
  const anyTerm = groups.some((group) => group.terms.length > 0)

  return (
    <div className="flex flex-col gap-14">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">组件词典</h1>
        <p className="mt-3 max-w-2xl leading-7">
          这些词是组件库在讨论的东西。每个词下面有一个能点的例子。
        </p>
        <label className="mt-6 block max-w-md">
          <span className="mb-2 block text-sm">搜索</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索 Dialog、抽屉、toast"
            className="w-full rounded-md border border-line bg-stage px-3 py-2"
          />
        </label>
      </header>

      <section id="libraries" className="flex scroll-mt-20 flex-col gap-6">
        <h2 className="text-xl font-semibold">库</h2>
        {roleOrder.map((role) => {
          const group = Object.values(libraries).filter((library) => library.role === role)
          const label = group[0]?.roleLabel
          if (!label) return null
          return (
            <div key={role}>
              <h3 className="text-sm text-ink/70">{label}</h3>
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
            </div>
          )
        })}
      </section>

      <section id="terms" className="flex scroll-mt-20 flex-col gap-6">
        <h2 className="text-xl font-semibold">词</h2>
        {anyTerm ? (
          groups.map((group) =>
            group.terms.length === 0 ? null : (
              <div key={group.category.id}>
                <h3 className="text-sm text-ink/70">{group.category.name}</h3>
                <p className="mt-1 text-sm leading-6">{group.category.blurb}</p>
                <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.terms.map((term) => (
                    <li key={term.id}>
                      <Link
                        to={`/terms/${term.id}`}
                        className="block h-full rounded-lg border border-line bg-stage p-4"
                      >
                        <p className="font-mono text-sm">{term.name}</p>
                        <p className="mt-1">{term.nameZh}</p>
                        <p className="mt-1 text-sm leading-6 text-ink/70">{term.oneLiner}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )
        ) : (
          <p>没有匹配的词</p>
        )}
      </section>
    </div>
  )
}
