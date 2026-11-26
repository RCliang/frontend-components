import { expect, it } from 'vitest'
import { motionSectionErrors } from './motion-sections'
import { terms } from './terms'

it('lists every motion term once', () => {
  const motionIds = Object.values(terms)
    .filter((term) => term.category === 'motion')
    .map((term) => term.id)
  expect(motionSectionErrors(motionIds)).toEqual([])
})
