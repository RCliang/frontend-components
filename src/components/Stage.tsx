import type { ReactNode } from 'react'

export function Stage({ children }: { children: ReactNode }) {
  return (
    <div className="well @container flex min-h-72 items-center justify-center rounded-xl border border-line p-6">{children}</div>
  )
}
