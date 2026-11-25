import * as Tooltip from '@radix-ui/react-tooltip'
import { buttonClass, panelClass } from './ui'

export function TooltipDemo() {
  return (
    <Tooltip.Root delayDuration={200}>
      <Tooltip.Trigger className={buttonClass}>悬停或聚焦</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className={`${panelClass} z-50 text-sm`} sideOffset={8}>
          一句说明，没有按钮
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}
