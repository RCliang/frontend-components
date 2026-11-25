import type { ComponentType } from 'react'
import { complete } from '../domain/complete'
import type { DemoId } from '../domain/types'
import { PlaceholderDemo } from './placeholder'

export const demos: Record<DemoId, ComponentType> = complete<DemoId, ComponentType>()({
  headless: PlaceholderDemo,
  portal: PlaceholderDemo,
  'focus-trap': PlaceholderDemo,
  controlled: PlaceholderDemo,
  dialog: PlaceholderDemo,
  'alert-dialog': PlaceholderDemo,
  drawer: PlaceholderDemo,
  popover: PlaceholderDemo,
  tooltip: PlaceholderDemo,
  toast: PlaceholderDemo,
  command: PlaceholderDemo,
  tabs: PlaceholderDemo,
  accordion: PlaceholderDemo,
  'dropdown-menu': PlaceholderDemo,
  select: PlaceholderDemo,
  number: PlaceholderDemo,
})
