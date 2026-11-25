import { useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { CSSProperties } from 'react'

const popupClass = 'h-16 w-40 rounded-md border border-accent bg-stage p-2 text-sm'

export function PortalDemo() {
  const anchorRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<CSSProperties>({ position: 'fixed', visibility: 'hidden' })

  useLayoutEffect(() => {
    function place() {
      const anchor = anchorRef.current
      if (!anchor) return
      const rect = anchor.getBoundingClientRect()
      setStyle({
        position: 'fixed',
        top: rect.top + 56,
        left: rect.left + 12,
        zIndex: 30,
      })
    }

    place()
    window.addEventListener('resize', place)
    window.addEventListener('scroll', place, true)
    return () => {
      window.removeEventListener('resize', place)
      window.removeEventListener('scroll', place, true)
    }
  }, [])

  return (
    <div className="grid w-full gap-6 sm:grid-cols-2">
      <div>
        <p className="mb-2 text-sm">绝对定位，留在容器里，被裁切</p>
        <div className="relative h-24 overflow-hidden rounded-md border border-line bg-paper">
          <div className={`absolute top-14 left-3 ${popupClass}`}>下半截被裁掉</div>
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm">createPortal 到 document.body，不被裁切</p>
        <div ref={anchorRef} className="relative h-24 overflow-hidden rounded-md border border-line bg-paper" />
        {createPortal(
          <div style={style} className={popupClass}>
            挂到 body
          </div>,
          document.body,
        )}
      </div>
    </div>
  )
}
