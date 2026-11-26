import { useState } from 'react'
import { categories } from '../content/categories'
import { motionSections } from '../content/motion-sections'
import { terms } from '../content/terms'
import { TermCard } from '../components/TermCard'
import { matchTerm } from '../domain/search'

function indexLabel(index: number) {
  return String(index + 1).padStart(2, '0')
}

export function MotionIndex() {
  const [query, setQuery] = useState('')
  const category = categories.motion
  const groups = motionSections
    .map((section) => ({
      section,
      terms: section.terms.map((id) => terms[id]).filter((term) => matchTerm(term, query)),
    }))
    .filter((group) => group.terms.length > 0)

  return (
    <div className="flex flex-col gap-14">
      <header className="specimen-in">
        <p className="font-mono text-[11px] tracking-[0.22em] text-muted">样本</p>
        <h1 className="mt-3 font-serif text-6xl leading-none tracking-tight sm:text-7xl">{category.name}</h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">{category.blurb}</p>
        <label className="mt-8 block max-w-xl">
          <span className="font-mono text-[11px] tracking-[0.18em] text-muted">搜索</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="弹簧、彩带、视差"
            aria-label="搜索动效"
            className="mt-2 w-full border-b border-line bg-transparent py-2 font-serif text-3xl text-ink outline-none placeholder:text-muted/50 focus:border-accent"
          />
        </label>
      </header>
      {groups.length === 0 ? (
        <p className="font-serif text-2xl">没有匹配的动效</p>
      ) : (
        groups.map((group, groupIndex) => (
          <section key={group.section.id} className="flex flex-col gap-5">
            <div className="border-b border-line pb-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-accent">{indexLabel(groupIndex)}</span>
                <h2 className="font-serif text-3xl leading-none">{group.section.name}</h2>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{group.section.blurb}</p>
            </div>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {group.terms.map((term, termIndex) => (
                <TermCard key={term.id} term={term} index={termIndex} />
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  )
}
