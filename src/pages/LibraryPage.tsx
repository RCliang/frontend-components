import { Link, useParams } from 'react-router'
import { findLibrary } from '../content/libraries'
import { findTerm } from '../content/terms'
import { NotFound } from './NotFound'

export function LibraryPage() {
  const params = useParams()
  const library = params.libraryId ? findLibrary(params.libraryId) : undefined
  if (!library) return <NotFound />

  return (
    <article className="flex max-w-2xl flex-col gap-10">
      <div>
        <Link to="/libraries" className="text-sm text-accent">
          全部库
        </Link>
        <p className="mt-6 font-mono text-[11px] tracking-[0.18em] text-accent">{library.roleLabel}</p>
        <h1 className="mt-3 font-serif text-5xl leading-none tracking-tight sm:text-6xl">{library.name}</h1>
        <p className="mt-4 leading-8">{library.summary}</p>
      </div>

      <section className="border-t border-line pt-6">
        <h2 className="font-serif text-3xl">它负责什么</h2>
        <p className="mt-3 leading-7">{library.owns}</p>
      </section>

      <section className="border-t border-line pt-6">
        <h2 className="font-serif text-3xl">它不负责什么</h2>
        <p className="mt-3 leading-7">{library.notFor}</p>
      </section>

      <p>
        <a href={library.url} target="_blank" rel="noreferrer" className="text-accent">
          打开官网
        </a>
      </p>

      <section className="border-t border-line pt-6">
        <h2 className="font-serif text-3xl">相关的词</h2>
        {library.terms.length === 0 ? (
          <p className="mt-3 leading-7">它交付做好的视觉，不定义这些词。</p>
        ) : (
          <ul className="mt-4 flex flex-wrap gap-2">
            {library.terms.map((termId) => {
              const term = findTerm(termId)
              if (!term) return null
              return (
                <li key={termId}>
                  <Link
                    to={`/terms/${term.id}`}
                    className="inline-flex items-baseline gap-2 rounded-full border border-line bg-stage px-3 py-1"
                  >
                    <span className="font-serif text-lg">{term.name}</span>
                    <span className="text-sm text-muted">{term.nameZh}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </article>
  )
}
