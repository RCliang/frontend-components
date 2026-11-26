import { useState } from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import * as Dialog from '@radix-ui/react-dialog'
import { useEmbeddedDemo } from './surface'
import { buttonClass, panelClass } from './ui'

const frame = 'relative h-56 w-full'
const overlay = 'absolute inset-0 bg-black/40'
const content = `${panelClass} absolute top-1/2 left-1/2 z-10 w-[min(20rem,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2`

const title = 'Alert Dialog 确认对话框'
const description = '点遮罩关不掉。请选一个。'

export function AlertDialogDemo() {
  const embedded = useEmbeddedDemo()
  if (embedded) return <ContainedAlertDialog />
  return <ModalAlertDialog />
}

function ContainedAlertDialog() {
  const [open, setOpen] = useState(true)

  return (
    <div className={frame}>
      {open ? <div className={overlay} /> : null}
      <Dialog.Root open={open} onOpenChange={setOpen} modal={false}>
        <div className="flex h-full items-center justify-center">
          <Dialog.Trigger className={buttonClass}>打开确认对话框</Dialog.Trigger>
        </div>
        <Dialog.Content
          className={content}
          onOpenAutoFocus={(event) => event.preventDefault()}
          onCloseAutoFocus={(event) => event.preventDefault()}
          onPointerDownOutside={(event) => event.preventDefault()}
          onInteractOutside={(event) => event.preventDefault()}
          onFocusOutside={(event) => event.preventDefault()}
        >
          <Dialog.Title className="text-lg font-medium">{title}</Dialog.Title>
          <Dialog.Description className="mt-2 text-sm leading-6">{description}</Dialog.Description>
          <div className="mt-4 flex justify-end gap-2">
            <Dialog.Close className={buttonClass}>取消</Dialog.Close>
            <Dialog.Close className={buttonClass}>继续</Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}

function ModalAlertDialog() {
  return (
    <div className={frame}>
      <AlertDialog.Root defaultOpen>
        <div className="flex h-full items-center justify-center">
          <AlertDialog.Trigger className={buttonClass}>打开确认对话框</AlertDialog.Trigger>
        </div>
        <AlertDialog.Overlay className={overlay} />
        <AlertDialog.Content className={content}>
          <AlertDialog.Title className="text-lg font-medium">{title}</AlertDialog.Title>
          <AlertDialog.Description className="mt-2 text-sm leading-6">{description}</AlertDialog.Description>
          <div className="mt-4 flex justify-end gap-2">
            <AlertDialog.Cancel className={buttonClass}>取消</AlertDialog.Cancel>
            <AlertDialog.Action className={buttonClass}>继续</AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  )
}
