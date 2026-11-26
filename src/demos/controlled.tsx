import { useState } from 'react'
import { buttonClass } from './ui'

function Switch({ onChange }: { onChange: (next: boolean) => void }) {
  return (
    <div className="flex gap-2">
      <button type="button" className={buttonClass} onClick={() => onChange(true)}>
        请求打开
      </button>
      <button type="button" className={buttonClass} onClick={() => onChange(false)}>
        请求关掉
      </button>
    </div>
  )
}

export function ControlledDemo() {
  const [on, setOn] = useState(false)
  return (
    <div className="flex flex-col items-center gap-3">
      <p>{on ? '现在是开' : '现在是关'}</p>
      <Switch onChange={setOn} />
    </div>
  )
}
