import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import { findTerm } from '../content/terms'

function tabClass(active: boolean) {
  return active ? 'text-ink underline decoration-accent decoration-2 underline-offset-[10px]' : 'text-muted'
}

export function Shell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const termId = pathname.startsWith('/terms/') ? decodeURIComponent(pathname.slice('/terms/'.length).split('/')[0]) : undefined
  const term = termId ? findTerm(termId) : undefined
  const conceptDetail = term?.category === 'concept'
  const motionDetail = term?.category === 'motion'
  const termsActive = pathname === '/terms' || (term !== undefined && !conceptDetail && !motionDetail)
  const conceptsActive = pathname.startsWith('/concepts') || conceptDetail
  const motionActive = pathname.startsWith('/motion') || motionDetail

  return (
    <div className="min-h-screen text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="font-serif text-xl tracking-tight">
            组件词典
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link to="/terms" className={tabClass(termsActive)} aria-current={termsActive ? 'page' : undefined}>
              词
            </Link>
            <Link to="/concepts" className={tabClass(conceptsActive)} aria-current={conceptsActive ? 'page' : undefined}>
              概念
            </Link>
            <Link to="/motion" className={tabClass(motionActive)} aria-current={motionActive ? 'page' : undefined}>
              动效
            </Link>
            <Link
              to="/libraries"
              className={tabClass(pathname.startsWith('/libraries'))}
              aria-current={pathname.startsWith('/libraries') ? 'page' : undefined}
            >
              库
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl px-5 py-10">{children}</main>
    </div>
  )
}
