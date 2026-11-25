import * as Dialog from '@radix-ui/react-dialog'
import { buttonClass, overlayClass, panelClass } from './ui'

const centered = `${panelClass} fixed top-1/2 left-1/2 z-50 w-[min(24rem,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2`

export function DialogDemo() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={buttonClass}>打开对话框</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={overlayClass} />
        <Dialog.Content className={centered}>
          <Dialog.Title className="text-lg font-medium">Dialog 对话框</Dialog.Title>
          <Dialog.Description className="mt-2 text-sm leading-6">
            停在中间。点遮罩可以关掉。
          </Dialog.Description>
          <div className="mt-4 flex justify-end">
            <Dialog.Close className={buttonClass}>关闭</Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
