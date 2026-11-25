import type { ReactNode } from 'react'
import { Link } from 'react-router'

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="font-medium">
            组件词典
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link to="/#libraries">库</Link>
            <Link to="/#terms">词</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
    </div>
  )
}
