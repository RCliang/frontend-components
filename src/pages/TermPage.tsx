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

  return (
    <article className="flex flex-col gap-8">
      <div>
        <Link to="/#terms" className="text-sm text-accent">
          全部词
        </Link>
        <p className="mt-4 text-sm text-ink/70">{category.name}</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">
          <span className="font-mono">{term.name}</span> {term.nameZh}
        </h1>
        <p className="mt-3 max-w-2xl text-lg">{term.oneLiner}</p>
      </div>

      <Stage>
        <Demo />
      </Stage>

      <section className="max-w-2xl">
        <h2 className="text-xl font-semibold">它是什么</h2>
        <p className="mt-2 leading-7">{term.definition}</p>
      </section>

      <section className="max-w-2xl">
        <h2 className="text-xl font-semibold">什么时候用</h2>
        <p className="mt-2 leading-7">{term.useWhen}</p>
      </section>

      <section className="max-w-2xl">
        <h2 className="text-xl font-semibold">什么时候不用</h2>
        <p className="mt-2 leading-7">{term.avoidWhen}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">结构</h2>
        <dl className="mt-3 grid max-w-2xl gap-3">
          {term.anatomy.map((part) => (
            <div key={part.name} className="grid gap-1 border-b border-line pb-3">
              <dt className="font-medium">{part.name}</dt>
              <dd className="text-sm leading-6 text-ink/80">{part.role}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="text-xl font-semibold">行为</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {term.behaviors.map((behavior) => (
            <li key={behavior}>{behavior}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">谁在做</h2>
        <ul className="mt-3 grid gap-3">
          {term.libraries.map((link) => {
            const library = findLibrary(link.id)
            if (!library) return null
            return (
              <li key={link.id} className="rounded-lg border border-line px-4 py-3">
                <Link to={`/libraries/${library.id}`} className="font-medium text-accent">
                  {library.name}
                </Link>
                <p className="mt-1 text-sm leading-6">{link.note}</p>
              </li>
            )
          })}
        </ul>
      </section>

      {term.related.length > 0 ? (
        <section>
          <h2 className="text-xl font-semibold">邻近的词</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {term.related.map((relatedId) => {
              const related = findTerm(relatedId)
              if (!related) return null
              return (
                <li key={relatedId}>
                  <Link
                    to={`/terms/${related.id}`}
                    className="inline-block rounded-full border border-line px-3 py-1 text-sm"
                  >
                    <span className="font-mono">{related.name}</span> {related.nameZh}
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
