import type { Term } from './types'

export function matchTerm(term: Term, query: string): boolean {
  const needle = query.trim().toLowerCase()
  if (needle === '') return true
  const fields = [term.name, term.nameZh, term.oneLiner, ...term.aliases]
  return fields.some((field) => field.toLowerCase().includes(needle))
}
