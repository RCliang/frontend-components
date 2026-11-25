import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { buttonClass, overlayClass, panelClass } from './ui'

const centered = `${panelClass} fixed top-1/2 left-1/2 z-50 w-[min(24rem,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2`

export function AlertDialogDemo() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className={buttonClass}>打开确认对话框</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={overlayClass} />
        <AlertDialog.Content className={centered}>
          <AlertDialog.Title className="text-lg font-medium">Alert Dialog 确认对话框</AlertDialog.Title>
          <AlertDialog.Description className="mt-2 text-sm leading-6">
            点遮罩关不掉。请选一个。
          </AlertDialog.Description>
          <div className="mt-4 flex justify-end gap-2">
            <AlertDialog.Cancel className={buttonClass}>取消</AlertDialog.Cancel>
            <AlertDialog.Action className={buttonClass}>继续</AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
