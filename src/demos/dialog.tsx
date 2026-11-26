import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { buttonClass, panelClass } from './ui'

const frame = 'relative h-56 w-full'
const content = `${panelClass} absolute top-1/2 left-1/2 z-10 w-[min(20rem,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2`

export function DialogDemo() {
  const [open, setOpen] = useState(true)

  return (
    <div className={frame}>
      {open ? (
        <button type="button" className="absolute inset-0 bg-black/40" aria-label="关闭遮罩" onClick={() => setOpen(false)} />
      ) : null}
      <Dialog.Root open={open} onOpenChange={setOpen} modal={false}>
        <div className="flex h-full items-center justify-center">
          <Dialog.Trigger className={buttonClass}>打开对话框</Dialog.Trigger>
        </div>
        <Dialog.Content className={content}>
          <Dialog.Title className="text-lg font-medium">Dialog 对话框</Dialog.Title>
          <Dialog.Description className="mt-2 text-sm leading-6">
            停在中间。点遮罩可以关掉。
          </Dialog.Description>
          <div className="mt-4 flex justify-end">
            <Dialog.Close className={buttonClass}>关闭</Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}
