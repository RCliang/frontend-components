import { Drawer } from 'vaul'
import { buttonClass, overlayClass, panelClass } from './ui'

export function DrawerDemo() {
  return (
    <Drawer.Root>
      <Drawer.Trigger className={buttonClass}>打开抽屉</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className={overlayClass} />
        <Drawer.Content className={`${panelClass} fixed inset-x-0 bottom-0 z-50 rounded-b-none pb-8`}>
          <Drawer.Handle className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-line" />
          <Drawer.Title className="text-lg font-medium">Drawer 抽屉</Drawer.Title>
          <Drawer.Description className="mt-2 text-sm leading-6">
            贴在底边。往下拖可以关掉。
          </Drawer.Description>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
