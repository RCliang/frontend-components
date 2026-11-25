import { useState } from 'react'
import { Link } from 'react-router'
import { categories } from '../content/categories'
import { terms } from '../content/terms'
import { matchTerm } from '../domain/search'

export function TermsIndex() {
  const [query, setQuery] = useState('')
  const groups = Object.values(categories).map((category) => ({
    category,
    terms: Object.values(terms).filter(
      (term) => term.category === category.id && matchTerm(term, query),
    ),
  }))
  const anyTerm = groups.some((group) => group.terms.length > 0)

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">词</h1>
        <p className="mt-3 max-w-2xl leading-7">点进去就能看到这个控件。</p>
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

      {anyTerm ? (
        groups.map((group) =>
          group.terms.length === 0 ? null : (
            <section key={group.category.id}>
              <h2 className="text-sm text-ink/70">{group.category.name}</h2>
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
            </section>
          ),
        )
      ) : (
        <p>没有匹配的词</p>
      )}
    </div>
  )
}
