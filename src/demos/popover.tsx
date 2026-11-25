import * as Popover from '@radix-ui/react-popover'
import { buttonClass, panelClass } from './ui'

export function PopoverDemo() {
  return (
    <Popover.Root defaultOpen>
      <Popover.Trigger className={buttonClass}>打开弹出层</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={`${panelClass} z-50`} sideOffset={8}>
          <button type="button" className={buttonClass}>
            面板里的按钮
          </button>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
