import { toast } from 'sonner'
import { buttonClass } from './ui'

export function ToastDemo() {
  return (
    <button type="button" className={buttonClass} onClick={() => toast('已记下，稍后离开')}>
      发出临时通知
    </button>
  )
}
