import type { ReactNode } from 'react'

export function Stage({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-64 items-center justify-center rounded-lg border border-line bg-stage p-6">
      {children}
    </div>
  )
}
