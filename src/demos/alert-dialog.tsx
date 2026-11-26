import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { buttonClass, panelClass } from './ui'

const frame = 'relative h-56 w-full'
const overlay = 'absolute inset-0 bg-black/40'
const content = `${panelClass} absolute top-1/2 left-1/2 z-10 w-[min(20rem,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2`

export function AlertDialogDemo() {
  return (
    <div className={frame}>
      <AlertDialog.Root defaultOpen>
        <div className="flex h-full items-center justify-center">
          <AlertDialog.Trigger className={buttonClass}>打开确认对话框</AlertDialog.Trigger>
        </div>
        <AlertDialog.Overlay className={overlay} />
        <AlertDialog.Content className={content}>
          <AlertDialog.Title className="text-lg font-medium">Alert Dialog 确认对话框</AlertDialog.Title>
          <AlertDialog.Description className="mt-2 text-sm leading-6">
            点遮罩关不掉。请选一个。
          </AlertDialog.Description>
          <div className="mt-4 flex justify-end gap-2">
            <AlertDialog.Cancel className={buttonClass}>取消</AlertDialog.Cancel>
            <AlertDialog.Action className={buttonClass}>继续</AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  )
}
