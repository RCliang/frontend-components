import { describe, expect, it } from 'vitest'
import { symmetryErrors } from '../domain/symmetry'
import { libraries } from './libraries'
import { terms } from './terms'

describe('symmetry', () => {
  it('is empty', () => {
    expect(symmetryErrors(terms, libraries)).toEqual([])
  })
})
