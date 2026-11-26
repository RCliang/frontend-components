import { useEffect, useRef, useState } from 'react'
import { buttonClass } from './ui'

const motionClass = 'duration-500 ease-out motion-reduce:transition-none'

export function TransitionDemo() {
  const [wide, setWide] = useState(false)
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <div className="flex h-8 w-full items-center">
        <div className={`h-8 rounded-md bg-accent transition-[width] ${motionClass} ${wide ? 'w-full' : 'w-8'}`} />
      </div>
      <button type="button" className={buttonClass} onClick={() => setWide((value) => !value)}>
        {wide ? '变窄' : '变宽'}
      </button>
    </div>
  )
}

export function KeyframesDemo() {
  const [playing, setPlaying] = useState(true)
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <style>{`
        @keyframes dict-sway {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(2.25rem); }
        }
        .dict-sway { animation: dict-sway 1.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .dict-sway { animation: none; }
        }
      `}</style>
      <div className="h-12 w-full">
        <div className={`h-8 w-8 rounded-md bg-accent ${playing ? 'dict-sway' : ''}`} />
      </div>
      <button type="button" className={buttonClass} onClick={() => setPlaying((value) => !value)}>
        {playing ? '停住' : '播放'}
      </button>
    </div>
  )
}

export function FadeDemo() {
  const [shown, setShown] = useState(true)
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <p className={`text-sm transition-opacity ${motionClass} ${shown ? 'opacity-100' : 'opacity-0'}`}>还在原处，只是看不见。</p>
      <button type="button" className={buttonClass} onClick={() => setShown((value) => !value)}>
        {shown ? '淡出' : '淡入'}
      </button>
    </div>
  )
}

export function SlideDemo() {
  const [shown, setShown] = useState(true)
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <div className="w-full overflow-hidden">
        <div
          className={`rounded-md border border-line bg-stage px-3 py-2 text-sm transition-transform ${motionClass} ${shown ? 'translate-x-0' : '-translate-x-full'}`}
        >
          从左边进来
        </div>
      </div>
      <button type="button" className={buttonClass} onClick={() => setShown((value) => !value)}>
        {shown ? '滑出' : '滑入'}
      </button>
    </div>
  )
}

export function ScaleDemo() {
  const [shown, setShown] = useState(true)
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <div className="flex h-16 items-center">
        <div
          className={`origin-center rounded-md border border-line bg-stage px-3 py-2 text-sm transition-transform ${motionClass} ${shown ? 'scale-100' : 'scale-0'}`}
        >
          从中心长出来
        </div>
      </div>
      <button type="button" className={buttonClass} onClick={() => setShown((value) => !value)}>
        {shown ? '缩小' : '放大'}
      </button>
    </div>
  )
}

function useSpring(target: number) {
  const value = useRef(target)
  const velocity = useRef(0)
  const [display, setDisplay] = useState(target)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      value.current = target
      velocity.current = 0
      setDisplay(target)
      return
    }

    let frame = 0
    let last = performance.now()
    const step = (now: number) => {
      const dt = Math.min(0.032, (now - last) / 1000)
      last = now
      const force = (target - value.current) * 180
      velocity.current = (velocity.current + force * dt) * Math.exp(-14 * dt)
      value.current += velocity.current * dt
      if (Math.abs(target - value.current) < 0.004 && Math.abs(velocity.current) < 0.02) {
        value.current = target
        velocity.current = 0
        setDisplay(target)
        return
      }
      setDisplay(value.current)
      frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target])

  return display
}

export function SpringDemo() {
  const [end, setEnd] = useState(0)
  const position = useSpring(end)
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <div className="relative h-8 w-full">
        <div className="absolute top-3 right-2 left-2 h-px bg-line" />
        <div
          className="absolute top-1 h-4 w-4 rounded-full bg-accent"
          style={{ left: `calc(0.5rem + (100% - 2rem) * ${position})` }}
        />
      </div>
      <button type="button" className={buttonClass} onClick={() => setEnd((value) => (value === 0 ? 1 : 0))}>
        换一边
      </button>
    </div>
  )
}

const trees = ['松', '竹', '梅']

export function StaggerDemo() {
  const [shown, setShown] = useState(true)
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <ul className="flex gap-2">
        {trees.map((tree, index) => (
          <li
            key={tree}
            className={`rounded-md border border-line bg-stage px-3 py-2 text-sm transition-all ${motionClass} ${shown ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
            style={{ transitionDelay: shown ? `${index * 90}ms` : '0ms' }}
          >
            {tree}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={buttonClass}
        onClick={() => {
          setShown(false)
          window.setTimeout(() => setShown(true), 40)
        }}
      >
        再交错一次
      </button>
    </div>
  )
}

export function PresenceDemo() {
  const [phase, setPhase] = useState<'shown' | 'leaving' | 'gone'>('shown')
  const leaving = phase === 'leaving'
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <div className="flex h-12 items-center">
        {phase === 'gone' ? (
          <p className="text-sm">已经离开，不再占位。</p>
        ) : (
          <p className={`rounded-md border border-line bg-stage px-3 py-2 text-sm transition-all ${motionClass} ${leaving ? 'translate-y-1 opacity-0' : 'translate-y-0 opacity-100'}`}>
            还在页面上
          </p>
        )}
      </div>
      {phase === 'gone' ? (
        <button
          type="button"
          className={buttonClass}
          onClick={() => {
            setPhase('leaving')
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => setPhase('shown'))
            })
          }}
        >
          放回来
        </button>
      ) : (
        <button
          type="button"
          className={buttonClass}
          disabled={leaving}
          onClick={() => {
            setPhase('leaving')
            window.setTimeout(() => setPhase('gone'), 500)
          }}
        >
          去掉
        </button>
      )}
    </div>
  )
}

export function ExpandDemo() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <div
        className={`grid w-full transition-[grid-template-rows] ${motionClass}`}
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-6">这段话长出来，会把下面的按钮往下推。</p>
        </div>
      </div>
      <button type="button" className={buttonClass} onClick={() => setOpen((value) => !value)}>
        {open ? '收起' : '展开'}
      </button>
    </div>
  )
}

export function ReducedMotionDemo() {
  const [reduce, setReduce] = useState(false)
  const [wide, setWide] = useState(false)
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <div className="flex h-8 w-full items-center">
        <div className={`h-8 rounded-md bg-accent ${reduce ? '' : `transition-[width] ${motionClass}`} ${wide ? 'w-full' : 'w-8'}`} />
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className={buttonClass} onClick={() => setWide((value) => !value)}>
          移动
        </button>
        <button type="button" className={buttonClass} onClick={() => setReduce((value) => !value)}>
          {reduce ? '改回过渡' : '改成跳到终态'}
        </button>
      </div>
    </div>
  )
}
