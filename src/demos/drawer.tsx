import { useState } from 'react'
import { Drawer } from 'vaul'
import { buttonClass, panelClass } from './ui'

export function DrawerDemo() {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  return (
    <div ref={setContainer} className="relative h-56 w-full overflow-hidden rounded-md border border-line">
      {container ? (
        <Drawer.Root defaultOpen modal={false} container={container} noBodyStyles>
          <div className="flex h-full items-center justify-center">
            <Drawer.Trigger className={buttonClass}>打开抽屉</Drawer.Trigger>
          </div>
          <Drawer.Portal container={container}>
            <Drawer.Overlay className="absolute inset-0 bg-black/40" />
            <Drawer.Content className={`${panelClass} absolute inset-x-0 bottom-0 rounded-b-none`}>
              <Drawer.Handle className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-line" />
              <Drawer.Title className="text-lg font-medium">Drawer 抽屉</Drawer.Title>
              <Drawer.Description className="mt-2 text-sm leading-6">
                贴在底边。往下拖可以关掉。
              </Drawer.Description>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      ) : null}
    </div>
  )
}
