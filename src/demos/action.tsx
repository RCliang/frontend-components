import { useState } from 'react'
import { buttonClass } from './ui'

export function ButtonDemo() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex items-center gap-3">
      <button type="button" className={buttonClass} onClick={() => setCount((value) => value + 1)}>
        记一笔
      </button>
      <p className="text-sm">已按 {count} 次</p>
    </div>
  )
}

export function IconButtonDemo() {
  const [saved, setSaved] = useState(false)
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        className={`${buttonClass} h-9 w-9 px-0`}
        aria-label={saved ? '取消收藏' : '收藏'}
        onClick={() => setSaved((value) => !value)}
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
          <path
            d="M10 3.2 12.1 7.6 17 8.2 13.4 11.5 14.4 16.3 10 13.9 5.6 16.3 6.6 11.5 3 8.2 7.9 7.6 10 3.2Z"
            fill={saved ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      </button>
      <p className="text-sm">{saved ? '已收藏' : '未收藏'}</p>
    </div>
  )
}

export function LinkDemo() {
  const [followed, setFollowed] = useState(false)
  return (
    <div className="flex flex-col items-start gap-2">
      <a
        href="/libraries"
        className="text-sm text-accent underline underline-offset-4"
        onClick={(event) => {
          event.preventDefault()
          setFollowed(true)
        }}
      >
        去库的列表
      </a>
      <p className="text-sm">{followed ? '这是一次跳转，例子停在这里。' : '点它会去一个地址。'}</p>
    </div>
  )
}
