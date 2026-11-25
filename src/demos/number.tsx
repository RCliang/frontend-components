import NumberFlow from '@number-flow/react'
import { useState } from 'react'
import { buttonClass } from './ui'

export function NumberDemo() {
  const [value, setValue] = useState(24)
  return (
    <div className="flex items-center gap-4">
      <button type="button" className={buttonClass} onClick={() => setValue((current) => current - 1)}>
        减去
      </button>
      <NumberFlow value={value} className="font-mono text-4xl" />
      <button type="button" className={buttonClass} onClick={() => setValue((current) => current + 1)}>
        加上
      </button>
    </div>
  )
}
