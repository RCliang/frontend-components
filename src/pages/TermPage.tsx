import { Link, useParams } from 'react-router'
import { Stage } from '../components/Stage'
import { categories } from '../content/categories'
import { findLibrary } from '../content/libraries'
import { findTerm } from '../content/terms'
import { demos } from '../demos/registry'
import { NotFound } from './NotFound'

export function TermPage() {
  const params = useParams()
  const term = params.termId ? findTerm(params.termId) : undefined
  if (!term) return <NotFound />

  const category = categories[term.category]
  const Demo = demos[term.demo]
  const indexPath = term.category === 'concept' ? '/concepts' : term.category === 'motion' ? '/motion' : '/terms'
  const indexName = term.category === 'concept' ? '全部概念' : term.category === 'motion' ? '全部动效' : '全部词'

  return (
    <article className="flex flex-col gap-10">
      <div>
        <Link to={indexPath} className="text-sm text-accent">
          {indexName}
        </Link>
        <p className="mt-6 font-mono text-[11px] tracking-[0.18em] text-muted">{category.name}</p>
        <h1 className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="font-serif text-5xl leading-none tracking-tight sm:text-6xl">{term.name}</span>
          <span className="text-xl text-muted">{term.nameZh}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8">{term.oneLiner}</p>
      </div>

      <Stage>
        <Demo />
      </Stage>

      <section className="max-w-2xl border-t border-line pt-6">
        <h2 className="font-serif text-3xl">它是什么</h2>
        <p className="mt-3 leading-7">{term.definition}</p>
      </section>

      <section className="max-w-2xl border-t border-line pt-6">
        <h2 className="font-serif text-3xl">什么时候用</h2>
        <p className="mt-3 leading-7">{term.useWhen}</p>
      </section>

      <section className="max-w-2xl border-t border-line pt-6">
        <h2 className="font-serif text-3xl">什么时候不用</h2>
        <p className="mt-3 leading-7">{term.avoidWhen}</p>
      </section>

      <section className="max-w-2xl border-t border-line pt-6">
        <h2 className="font-serif text-3xl">结构</h2>
        <dl className="mt-4 grid gap-4">
          {term.anatomy.map((part) => (
            <div key={part.name} className="grid gap-1 border-b border-line pb-4">
              <dt className="font-medium">{part.name}</dt>
              <dd className="text-sm leading-6 text-muted">{part.role}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="max-w-2xl border-t border-line pt-6">
        <h2 className="font-serif text-3xl">行为</h2>
        <ul className="mt-4">
          {term.behaviors.map((behavior) => (
            <li key={behavior} className="border-t border-line py-2 leading-7 first:border-t-0">
              {behavior}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line pt-6">
        <h2 className="font-serif text-3xl">谁在做</h2>
        <ul className="mt-4 grid max-w-2xl gap-3">
          {term.libraries.map((link) => {
            const library = findLibrary(link.id)
            if (!library) return null
            return (
              <li key={link.id} className="rounded-xl border border-line bg-stage px-4 py-3">
                <Link to={`/libraries/${library.id}`} className="font-serif text-2xl text-accent">
                  {library.name}
                </Link>
                <p className="mt-1 text-sm leading-6">{link.note}</p>
              </li>
            )
          })}
        </ul>
      </section>

      {term.related.length > 0 ? (
        <section className="border-t border-line pt-6">
          <h2 className="font-serif text-3xl">邻近的词</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {term.related.map((relatedId) => {
              const related = findTerm(relatedId)
              if (!related) return null
              return (
                <li key={relatedId}>
                  <Link
                    to={`/terms/${related.id}`}
                    className="inline-flex items-baseline gap-2 rounded-full border border-line bg-stage px-3 py-1"
                  >
                    <span className="font-serif text-lg">{related.name}</span>
                    <span className="text-sm text-muted">{related.nameZh}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      ) : null}
    </article>
  )
}
