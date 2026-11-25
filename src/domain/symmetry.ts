import type { Library, Term } from './types'

export function symmetryErrors(
  terms: Record<string, Term>,
  libraries: Record<string, Library>,
): string[] {
  const errors: string[] = []

  for (const term of Object.values(terms)) {
    for (const link of term.libraries) {
      const library = libraries[link.id]
      if (!library) {
        errors.push(`${term.id} lists ${link.id}, which is not a library`)
        continue
      }
      if (!library.terms.includes(term.id)) {
        errors.push(`${term.id} lists ${link.id}, but ${link.id} does not list ${term.id}`)
      }
    }
  }

  for (const library of Object.values(libraries)) {
    for (const termId of library.terms) {
      const term = terms[termId]
      if (!term) {
        errors.push(`${library.id} lists ${termId}, which is not a term`)
        continue
      }
      if (!term.libraries.some((link) => link.id === library.id)) {
        errors.push(`${library.id} lists ${termId}, but ${termId} does not list ${library.id}`)
      }
    }
  }

  return errors
}
