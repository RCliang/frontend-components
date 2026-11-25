import { useEffect, useRef, useState } from 'react'
import { buttonClass, panelClass } from './ui'

function tabbables(root: HTMLElement): HTMLElement[] {
  return [...root.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input:not([disabled])')].filter(
    (node) => node.tabIndex >= 0,
  )
}

export function FocusTrapDemo() {
  const [active, setActive] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const firstRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!active) return
    firstRef.current?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Tab') return
      const root = panelRef.current
      if (!root) return
      const items = tabbables(root)
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return
      const current = document.activeElement
      const inside = current instanceof Node && root.contains(current)
      if (!inside) {
        event.preventDefault()
        ;(event.shiftKey ? last : first).focus()
        return
      }
      if (event.shiftKey && current === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && current === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [active])

  return (
    <div className="flex w-full max-w-md flex-col items-start gap-4">
      <p className="text-sm">{active ? '圈定开着。Tab 只在面板里走。' : '圈定关着。Tab 可以走到外面。'}</p>
      <div ref={panelRef} className={`${panelClass} flex flex-col items-start gap-3`}>
        <button ref={firstRef} type="button" className={buttonClass}>
          面板里的第一个
        </button>
        <button type="button" className={buttonClass} onClick={() => setActive(false)}>
          解除圈定
        </button>
      </div>
      <button type="button" className={buttonClass} onClick={() => setActive(true)}>
        外面的按钮
      </button>
    </div>
  )
}
