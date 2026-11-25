import { useState } from 'react'
import { toast } from 'sonner'
import { buttonClass, panelClass } from './ui'

export function ToastDemo() {
  const [count, setCount] = useState(1)

  return (
    <div className="flex w-full max-w-sm flex-col items-end gap-3">
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className={`${panelClass} w-full shadow-sm`}>
          已记下，稍后离开
        </div>
      ))}
      <button
        type="button"
        className={buttonClass}
        onClick={() => {
          setCount((value) => value + 1)
          toast('已记下，稍后离开')
        }}
      >
        再发一条
      </button>
    </div>
  )
}
