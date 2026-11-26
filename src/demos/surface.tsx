import { createContext, useContext, type ReactNode } from 'react'

const EmbeddedDemoContext = createContext(false)

export function useEmbeddedDemo() {
  return useContext(EmbeddedDemoContext)
}

export function useOpenAutoFocus() {
  const embedded = useEmbeddedDemo()
  if (!embedded) return undefined
  return (event: Event) => {
    event.preventDefault()
  }
}

export function EmbeddedDemo({ children }: { children: ReactNode }) {
  return (
    <EmbeddedDemoContext.Provider value={true}>
      <div className="well @container flex min-h-72 w-full items-center justify-center px-5 py-8">{children}</div>
    </EmbeddedDemoContext.Provider>
  )
}
