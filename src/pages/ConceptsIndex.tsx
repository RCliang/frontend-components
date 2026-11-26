import { categories } from '../content/categories'
import { terms } from '../content/terms'
import { TermCard } from '../components/TermCard'

export function ConceptsIndex() {
  const category = categories.concept
  const conceptTerms = Object.values(terms).filter((term) => term.category === 'concept')

  return (
    <div className="flex flex-col gap-10">
      <header className="specimen-in">
        <p className="font-mono text-[11px] tracking-[0.22em] text-muted">样本</p>
        <h1 className="mt-3 font-serif text-6xl leading-none tracking-tight sm:text-7xl">{category.name}</h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">{category.blurb}</p>
      </header>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {conceptTerms.map((term, index) => (
          <TermCard key={term.id} term={term} index={index} />
        ))}
      </ul>
    </div>
  )
}
