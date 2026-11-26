import { useEffect, useRef, useState } from 'react'
import { buttonClass } from './ui'

const motionClass = 'duration-500 ease-out motion-reduce:transition-none'

function reduced() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function BounceDemo() {
  const [play, setPlay] = useState(0)
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <style>{`
        @keyframes dict-bounce {
          0% { transform: scale(0.6); opacity: 0; }
          55% { transform: scale(1.08); opacity: 1; }
          75% { transform: scale(0.96); }
          100% { transform: none; }
        }
        .dict-bounce { animation: dict-bounce 0.55s ease-out; }
        @media (prefers-reduced-motion: reduce) { .dict-bounce { animation: none; } }
      `}</style>
      <div key={play} className="dict-bounce rounded-md border border-line bg-stage px-3 py-2 text-sm">
        弹一下
      </div>
      <button type="button" className={buttonClass} onClick={() => setPlay((value) => value + 1)}>
        再弹一次
      </button>
    </div>
  )
}

export function FlipDemo() {
  const [back, setBack] = useState(false)
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="h-24 w-36 [perspective:600px]">
        <div
          className={`relative h-full w-full transition-transform ${motionClass} [transform-style:preserve-3d] ${back ? '[transform:rotateY(180deg)]' : ''}`}
        >
          <div className="absolute inset-0 flex items-center justify-center rounded-md border border-line bg-stage text-sm [backface-visibility:hidden]">
            正面
          </div>
          <div className="absolute inset-0 flex items-center justify-center rounded-md border border-accent bg-stage text-sm [backface-visibility:hidden] [transform:rotateY(180deg)]">
            背面
          </div>
        </div>
      </div>
      <button type="button" className={buttonClass} onClick={() => setBack((value) => !value)}>
        翻面
      </button>
    </div>
  )
}

export function HoverDemo() {
  const [on, setOn] = useState(false)
  return (
    <button
      type="button"
      className={`rounded-md border bg-stage px-4 py-3 text-sm transition-transform duration-200 motion-reduce:transition-none ${on ? '-translate-y-1 border-accent' : 'border-line'}`}
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
      onFocus={() => setOn(true)}
      onBlur={() => setOn(false)}
    >
      {on ? '指针在上面' : '把指针放上来'}
    </button>
  )
}

export function PressDemo() {
  const [down, setDown] = useState(false)
  return (
    <button
      type="button"
      className={`${buttonClass} transition-transform duration-150 motion-reduce:transition-none ${down ? 'scale-95' : ''}`}
      onPointerDown={() => setDown(true)}
      onPointerUp={() => setDown(false)}
      onPointerLeave={() => setDown(false)}
    >
      {down ? '按着' : '按下去'}
    </button>
  )
}

export function RippleDemo() {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])
  return (
    <button
      type="button"
      className={`${buttonClass} relative overflow-hidden`}
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const id = Date.now()
        setRipples((items) => [...items, { id, x: event.clientX - rect.left, y: event.clientY - rect.top }])
        window.setTimeout(() => setRipples((items) => items.filter((item) => item.id !== id)), 500)
      }}
    >
      点这里
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute h-8 w-8 animate-ping rounded-full bg-accent/40"
          style={{ left: ripple.x - 16, top: ripple.y - 16 }}
        />
      ))}
    </button>
  )
}

export function ShakeDemo() {
  const [shaking, setShaking] = useState(false)
  return (
    <div className="flex flex-col items-start gap-3">
      <style>{`
        @keyframes dict-shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        .dict-shake { animation: dict-shake 0.35s linear; }
        @media (prefers-reduced-motion: reduce) { .dict-shake { animation: none; } }
      `}</style>
      <p className={`rounded-md border border-line bg-stage px-3 py-2 text-sm ${shaking ? 'dict-shake' : ''}`} onAnimationEnd={() => setShaking(false)}>
        这一格没通过
      </p>
      <button
        type="button"
        className={buttonClass}
        onClick={() => {
          setShaking(false)
          window.requestAnimationFrame(() => setShaking(true))
        }}
      >
        提交
      </button>
    </div>
  )
}

export function CheckDemo() {
  const [on, setOn] = useState(false)
  return (
    <button type="button" className="flex items-center gap-3 text-sm" onClick={() => setOn((value) => !value)}>
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accent" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7 12.5 10.5 16 17 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={on ? 0 : 1}
          className={`transition-[stroke-dashoffset] ${motionClass}`}
        />
      </svg>
      {on ? '勾完了' : '画一笔'}
    </button>
  )
}

export function PulseDemo() {
  return (
    <>
      <style>{`
        @keyframes dict-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
        .dict-pulse { animation: dict-pulse 1.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .dict-pulse { animation: none; } }
      `}</style>
      <div className="dict-pulse h-10 w-10 rounded-md bg-accent" />
    </>
  )
}

export function ShimmerDemo() {
  return (
    <>
      <style>{`
        @keyframes dict-shimmer { from { background-position: 120% 0; } to { background-position: -20% 0; } }
        .dict-shimmer {
          background-image: linear-gradient(100deg, transparent 30%, color-mix(in oklab, var(--color-paper) 75%, white) 50%, transparent 70%);
          background-size: 200% 100%;
          animation: dict-shimmer 1.4s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) { .dict-shimmer { animation: none; } }
      `}</style>
      <div className="dict-shimmer h-10 w-full max-w-xs rounded-md bg-line" />
    </>
  )
}

export function IndeterminateDemo() {
  return (
    <>
      <style>{`
        @keyframes dict-indet { 0% { transform: translateX(-120%); } 100% { transform: translateX(280%); } }
        .dict-indet { animation: dict-indet 1.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .dict-indet { animation: none; transform: none; width: 100%; } }
      `}</style>
      <div className="h-2 w-full max-w-xs overflow-hidden rounded-full bg-line">
        <div className="dict-indet h-full w-2/5 bg-accent" />
      </div>
    </>
  )
}

export function LoadingDotsDemo() {
  return (
    <>
      <style>{`
        @keyframes dict-dot {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
        .dict-dot { animation: dict-dot 1s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .dict-dot { animation: none; } }
      `}</style>
      <div className="flex h-8 items-end gap-1.5" aria-label="正在加载">
        {[0, 1, 2].map((index) => (
          <span key={index} className="dict-dot h-2 w-2 rounded-full bg-accent" style={{ animationDelay: `${index * 0.15}s` }} />
        ))}
      </div>
    </>
  )
}

const sentence = '松竹梅都到了。'

export function TypewriterDemo() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (reduced()) {
      setCount(sentence.length)
      return
    }
    if (count >= sentence.length) return
    const timer = window.setTimeout(() => setCount((value) => value + 1), 140)
    return () => window.clearTimeout(timer)
  }, [count])
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <p className="min-h-6 text-sm">{sentence.slice(0, count)}</p>
      <button type="button" className={buttonClass} onClick={() => setCount(0)}>
        再打一遍
      </button>
    </div>
  )
}

const tabs = ['松', '竹']

export function IndicatorDemo() {
  const [current, setCurrent] = useState(0)
  return (
    <div className="relative flex">
      {tabs.map((tab, index) => (
        <button key={tab} type="button" className="w-16 py-2 text-sm" aria-current={current === index ? 'true' : undefined} onClick={() => setCurrent(index)}>
          {tab}
        </button>
      ))}
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-16 bg-accent transition-transform ${motionClass}`}
        style={{ transform: `translateX(${current * 100}%)` }}
      />
    </div>
  )
}

export function SmoothScrollDemo() {
  const box = useRef<HTMLDivElement>(null)
  const [atEnd, setAtEnd] = useState(false)
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <div ref={box} className="h-28 w-full overflow-auto rounded-md border border-line px-3 py-2 text-sm">
        <p>开头在这里。</p>
        <div className="h-24" />
        <p>末尾在这里。</p>
      </div>
      <button
        type="button"
        className={buttonClass}
        onClick={() => {
          const node = box.current
          if (!node) return
          const top = atEnd ? 0 : node.scrollHeight
          node.scrollTo({ top, behavior: reduced() ? 'auto' : 'smooth' })
          setAtEnd((value) => !value)
        }}
      >
        {atEnd ? '滚回开头' : '滚到末尾'}
      </button>
    </div>
  )
}

const rows = ['松', '竹', '梅']

export function FlipLayoutDemo() {
  const [order, setOrder] = useState(rows)
  const list = useRef<HTMLUListElement>(null)
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <ul ref={list} className="flex w-full flex-col gap-2">
        {order.map((row) => (
          <li key={row} data-id={row} className="rounded-md border border-line bg-stage px-3 py-2 text-sm">
            {row}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={buttonClass}
        onClick={() => {
          const node = list.current
          if (!node) return
          const first = new Map([...node.children].map((child) => [(child as HTMLElement).dataset.id, child.getBoundingClientRect()]))
          setOrder((current) => [current[current.length - 1], ...current.slice(0, -1)])
          if (reduced()) return
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              for (const child of node.children) {
                const start = first.get((child as HTMLElement).dataset.id)
                if (!start) continue
                const dy = start.top - child.getBoundingClientRect().top
                if (Math.abs(dy) < 1) continue
                child.animate([{ transform: `translateY(${dy}px)` }, { transform: 'translateY(0)' }], { duration: 320, easing: 'ease' })
              }
            })
          })
        }}
      >
        把最后一项放到前面
      </button>
    </div>
  )
}

export function SwipeDemo() {
  const [x, setX] = useState(0)
  const dragging = useRef(false)
  const origin = useRef(0)
  const xRef = useRef(0)
  function moveTo(next: number) {
    xRef.current = next
    setX(next)
  }
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-md border border-line">
      <div className="absolute inset-y-0 right-0 flex w-16 items-center justify-center bg-accent text-xs text-paper">删除</div>
      <div
        className="relative bg-stage px-3 py-3 text-sm"
        style={{ transform: `translateX(${x}px)`, transition: dragging.current || reduced() ? 'none' : 'transform 0.2s', touchAction: 'pan-y' }}
        onPointerDown={(event) => {
          dragging.current = true
          origin.current = event.clientX - xRef.current
          event.currentTarget.setPointerCapture(event.pointerId)
        }}
        onPointerMove={(event) => {
          if (!dragging.current) return
          moveTo(Math.min(0, Math.max(-72, event.clientX - origin.current)))
        }}
        onPointerUp={() => {
          dragging.current = false
          moveTo(xRef.current < -36 ? -72 : 0)
        }}
      >
        向左滑
      </div>
    </div>
  )
}

const reveals = ['已经看见', '再往下', '还没到', '最后一行']

export function ScrollRevealDemo() {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = root.current
    if (!node) return
    const items = [...node.querySelectorAll<HTMLElement>('[data-reveal]')]
    if (reduced()) {
      items.forEach((item) => {
        item.dataset.show = 'true'
      })
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) (entry.target as HTMLElement).dataset.show = 'true'
        }
      },
      { root: node, threshold: 0.7 },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={root} className="h-28 w-full max-w-xs overflow-auto rounded-md border border-line px-3 py-2">
      {reveals.map((line) => (
        <p
          key={line}
          data-reveal=""
          className="py-3 text-sm opacity-0 transition-opacity duration-500 data-[show=true]:opacity-100 motion-reduce:opacity-100"
        >
          {line}
        </p>
      ))}
    </div>
  )
}

export function EasingDemo() {
  const [go, setGo] = useState(false)
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex flex-col gap-2">
        <div className={`h-3 rounded-full bg-accent transition-[width] duration-700 ease-linear motion-reduce:transition-none ${go ? 'w-full' : 'w-8'}`} />
        <div className={`h-3 rounded-full bg-ink/70 transition-[width] duration-700 ease-out motion-reduce:transition-none ${go ? 'w-full' : 'w-8'}`} />
      </div>
      <p className="text-sm">上面匀速，下面先快后慢。</p>
      <button type="button" className={buttonClass} onClick={() => setGo((value) => !value)}>
        {go ? '收回' : '同时出发'}
      </button>
    </div>
  )
}

export function DelayDemo() {
  const [go, setGo] = useState(false)
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <div className="flex w-full flex-col gap-2">
        <div className={`h-3 rounded-full bg-accent transition-[width] ${motionClass} ${go ? 'w-full' : 'w-8'}`} />
        <div className={`h-3 rounded-full bg-ink/70 transition-[width] ${motionClass} ${go ? 'w-full' : 'w-8'}`} style={{ transitionDelay: go ? '280ms' : '0ms' }} />
      </div>
      <button type="button" className={buttonClass} onClick={() => setGo((value) => !value)}>
        {go ? '收回' : '出发'}
      </button>
    </div>
  )
}

const steps = ['先亮标题', '再亮正文', '最后亮按钮']

export function TimelineDemo() {
  const [step, setStep] = useState(-1)
  useEffect(() => {
    if (step < 0 || step >= steps.length - 1) return
    const timer = window.setTimeout(() => setStep((value) => value + 1), reduced() ? 0 : 420)
    return () => window.clearTimeout(timer)
  }, [step])
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <ol className="flex flex-col gap-1 text-sm">
        {steps.map((label, index) => (
          <li key={label} className={index <= step ? 'text-ink' : 'text-ink/35'}>
            {label}
          </li>
        ))}
      </ol>
      <button type="button" className={buttonClass} onClick={() => setStep(0)}>
        按顺序播放
      </button>
    </div>
  )
}
