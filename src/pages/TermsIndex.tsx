import { Command } from 'cmdk'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { categories } from '../content/categories'
import { terms } from '../content/terms'
import { panelClass } from '../demos/ui'
import { matchTerm } from '../domain/search'

export function TermsIndex() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const searching = query.trim() !== ''
  const groups = Object.values(categories).map((category) => ({
    category,
    terms: Object.values(terms).filter(
      (term) => term.category === category.id && matchTerm(term, query),
    ),
  }))

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">词</h1>
        <p className="mt-3 max-w-2xl leading-7">点进去就能看到这个控件。</p>
        <Command
          label="搜索词"
          shouldFilter={false}
          className={`${panelClass} mt-6 w-full max-w-xl p-2`}
        >
          <Command.Input
            value={query}
            onValueChange={setQuery}
            placeholder="搜索 Dialog、抽屉、toast"
            className="w-full bg-transparent px-2 py-2"
          />
          {searching ? (
            <Command.List className="mt-1 max-h-80 overflow-y-auto">
              <Command.Empty className="px-2 py-3 text-sm">没有匹配的词</Command.Empty>
              {groups.map((group) =>
                group.terms.length === 0 ? null : (
                  <Command.Group
                    key={group.category.id}
                    heading={<span className="px-2 text-xs text-ink/60">{group.category.name}</span>}
                  >
                    {group.terms.map((term) => (
                      <Command.Item
                        key={term.id}
                        value={term.id}
                        onSelect={() => navigate(`/terms/${term.id}`)}
                        className="flex cursor-pointer flex-col rounded-md px-2 py-2 data-[selected=true]:bg-line"
                      >
                        <span>
                          <span className="font-mono text-sm">{term.name}</span>
                          <span className="ml-2">{term.nameZh}</span>
                        </span>
                        <span className="text-sm leading-6 text-ink/70">{term.oneLiner}</span>
                      </Command.Item>
                    ))}
                  </Command.Group>
                ),
              )}
            </Command.List>
          ) : null}
        </Command>
      </header>

      {searching
        ? null
        : groups.map((group) => (
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
          ))}
    </div>
  )
}
