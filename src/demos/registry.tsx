import type { ComponentType } from 'react'
import { complete } from '../domain/complete'
import type { DemoId } from '../domain/types'
import { AccordionDemo } from './accordion'
import { AlertDialogDemo } from './alert-dialog'
import { CommandDemo } from './command'
import { ControlledDemo } from './controlled'
import { DialogDemo } from './dialog'
import { DrawerDemo } from './drawer'
import { DropdownMenuDemo } from './dropdown-menu'
import { FocusTrapDemo } from './focus-trap'
import { HeadlessDemo } from './headless'
import { NumberDemo } from './number'
import { PopoverDemo } from './popover'
import { PortalDemo } from './portal'
import { SelectDemo } from './select'
import { TabsDemo } from './tabs'
import { ToastDemo } from './toast'
import { TooltipDemo } from './tooltip'

export const demos: Record<DemoId, ComponentType> = complete<DemoId, ComponentType>()({
  headless: HeadlessDemo,
  portal: PortalDemo,
  'focus-trap': FocusTrapDemo,
  controlled: ControlledDemo,
  dialog: DialogDemo,
  'alert-dialog': AlertDialogDemo,
  drawer: DrawerDemo,
  popover: PopoverDemo,
  tooltip: TooltipDemo,
  toast: ToastDemo,
  command: CommandDemo,
  tabs: TabsDemo,
  accordion: AccordionDemo,
  'dropdown-menu': DropdownMenuDemo,
  select: SelectDemo,
  number: NumberDemo,
})
