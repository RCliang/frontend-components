import { Link, useParams } from 'react-router'
import { findLibrary } from '../content/libraries'
import { findTerm } from '../content/terms'
import { NotFound } from './NotFound'

export function LibraryPage() {
  const params = useParams()
  const library = params.libraryId ? findLibrary(params.libraryId) : undefined
  if (!library) return <NotFound />

  return (
    <article className="flex max-w-2xl flex-col gap-8">
      <div>
        <Link to="/libraries" className="text-sm text-accent">
          全部库
        </Link>
        <p className="mt-4 text-sm text-accent">{library.roleLabel}</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">{library.name}</h1>
        <p className="mt-3 leading-7">{library.summary}</p>
      </div>

      <section>
        <h2 className="text-xl font-semibold">它负责什么</h2>
        <p className="mt-2 leading-7">{library.owns}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">它不负责什么</h2>
        <p className="mt-2 leading-7">{library.notFor}</p>
      </section>

      <p>
        <a href={library.url} target="_blank" rel="noreferrer" className="text-accent">
          打开官网
        </a>
      </p>

      <section>
        <h2 className="text-xl font-semibold">相关的词</h2>
        {library.terms.length === 0 ? (
          <p className="mt-2 leading-7">它交付做好的视觉，不定义这些词。</p>
        ) : (
          <ul className="mt-3 flex flex-wrap gap-2">
            {library.terms.map((termId) => {
              const term = findTerm(termId)
              if (!term) return null
              return (
                <li key={termId}>
                  <Link
                    to={`/terms/${term.id}`}
                    className="inline-block rounded-full border border-line px-3 py-1 text-sm"
                  >
                    <span className="font-mono">{term.name}</span> {term.nameZh}
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
