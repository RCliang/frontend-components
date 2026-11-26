import { Link } from 'react-router'
import { demos } from '../demos/registry'
import { EmbeddedDemo } from '../demos/surface'
import type { Term } from '../domain/types'

export function TermCard({ term, index }: { term: Term; index: number }) {
  const Demo = demos[term.demo]
  return (
    <li className="specimen-in min-w-0" style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}>
      <article className="specimen-card flex h-full flex-col overflow-hidden rounded-xl border border-line bg-stage">
        <EmbeddedDemo>
          <Demo />
        </EmbeddedDemo>
        <div className="flex flex-1 flex-col gap-5 border-t border-line px-5 py-5">
          <header>
            <h3 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-serif text-[1.85rem] leading-none tracking-tight">{term.name}</span>
              <span className="text-sm text-muted">{term.nameZh}</span>
            </h3>
            <p className="mt-3 text-sm leading-6">{term.oneLiner}</p>
          </header>
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.16em] text-muted">它是什么</h4>
            <p className="mt-1.5 text-sm leading-6">{term.definition}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.16em] text-accent">用</h4>
              <p className="mt-1.5 text-sm leading-6">{term.useWhen}</p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.16em] text-muted">不用</h4>
              <p className="mt-1.5 text-sm leading-6">{term.avoidWhen}</p>
            </div>
          </div>
          <ul>
            {term.behaviors.map((behavior) => (
              <li key={behavior} className="border-t border-line py-1.5 text-sm leading-6">
                {behavior}
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-1">
            <Link to={`/terms/${term.id}`} className="text-sm text-accent">
              结构和库
            </Link>
          </p>
        </div>
      </article>
    </li>
  )
}
