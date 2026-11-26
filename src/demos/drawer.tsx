import { useRef, useState } from 'react'
import { Drawer } from 'vaul'
import { useEmbeddedDemo } from './surface'
import { buttonClass, panelClass } from './ui'

export function DrawerDemo() {
  const embedded = useEmbeddedDemo()
  if (embedded) return <ContainedDrawer />
  return <VaulDrawer />
}

function ContainedDrawer() {
  const [open, setOpen] = useState(true)
  const startY = useRef<number | null>(null)

  return (
    <div className="relative h-56 w-full overflow-hidden rounded-md border border-line">
      <div className="flex h-full items-center justify-center">
        <button type="button" className={buttonClass} onClick={() => setOpen(true)}>
          打开抽屉
        </button>
      </div>
      {open ? (
        <>
          <button type="button" className="absolute inset-0 bg-black/40" aria-label="关闭遮罩" onClick={() => setOpen(false)} />
          <div
            className={`${panelClass} absolute inset-x-0 bottom-0 rounded-b-none`}
            onPointerDown={(event) => {
              startY.current = event.clientY
            }}
            onPointerUp={(event) => {
              if (startY.current != null && event.clientY - startY.current > 40) setOpen(false)
              startY.current = null
            }}
          >
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-line" />
            <p className="text-lg font-medium">Drawer 抽屉</p>
            <p className="mt-2 text-sm leading-6">贴在底边。往下拖可以关掉。</p>
          </div>
        </>
      ) : null}
    </div>
  )
}

function VaulDrawer() {
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
