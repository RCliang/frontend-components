import { expect, it } from 'vitest'
import { matchTerm } from '../domain/search'
import { terms } from './terms'

it('matches an empty query', () => {
  expect(matchTerm(terms.dialog, '')).toBe(true)
})

it('matches 对话框 to dialog', () => {
  expect(matchTerm(terms.dialog, '对话框')).toBe(true)
})

it('matches toast to toast', () => {
  expect(matchTerm(terms.toast, 'toast')).toBe(true)
})

it('matches zzzz to nothing', () => {
  for (const term of Object.values(terms)) {
    expect(matchTerm(term, 'zzzz')).toBe(false)
  }
})
