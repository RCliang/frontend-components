import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useState } from 'react'
import { useEmbeddedDemo, useOpenAutoFocus } from './surface'
import { buttonClass, panelClass } from './ui'

const itemClass = 'rounded-md px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-line'

export function DropdownMenuDemo() {
  const embedded = useEmbeddedDemo()
  const blockAutoFocus = useOpenAutoFocus()
  const [last, setLast] = useState('还没有动作')
  return (
    <div className="flex flex-col items-center gap-3">
      <DropdownMenu.Root defaultOpen modal={!embedded}>
        <DropdownMenu.Trigger className={buttonClass}>打开菜单</DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={`${panelClass} z-50 min-w-36`}
            sideOffset={8}
            onCloseAutoFocus={blockAutoFocus}
          >
            <DropdownMenu.Item className={itemClass} onSelect={() => setLast('复制')}>
              复制
            </DropdownMenu.Item>
            <DropdownMenu.Item className={itemClass} onSelect={() => setLast('粘贴')}>
              粘贴
            </DropdownMenu.Item>
            <DropdownMenu.Item className={itemClass} onSelect={() => setLast('删除')}>
              删除
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      <p className="text-sm">上次的动作：{last}</p>
    </div>
  )
}
