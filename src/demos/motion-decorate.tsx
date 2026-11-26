import { useEffect, useRef, useState } from 'react'
import { buttonClass } from './ui'

function reduced() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

type Dot = { x: number; y: number; r: number; vx: number; vy: number }

export function ParticleDemo() {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [batch, setBatch] = useState(0)

  useEffect(() => {
    const node = canvas.current
    const ctx = node?.getContext('2d')
    if (!node || !ctx) return
    const width = 220
    const height = 112
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    node.width = width * dpr
    node.height = height * dpr
    node.style.width = `${width}px`
    node.style.height = `${height}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    const color = getComputedStyle(node).color
    const dots: Dot[] = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.4 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.7,
      vy: -0.25 - Math.random() * 0.45,
    }))
    const paint = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = color
      for (const dot of dots) {
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    paint()
    if (reduced()) return
    let alive = true
    const tick = () => {
      if (!alive) return
      for (const dot of dots) {
        dot.x += dot.vx
        dot.y += dot.vy
        if (dot.y < -4) dot.y = height + 4
        if (dot.x < 0 || dot.x > width) dot.vx *= -1
      }
      paint()
      if (alive) window.requestAnimationFrame(tick)
    }
    window.requestAnimationFrame(tick)
    return () => {
      alive = false
    }
  }, [batch])

  return (
    <div className="flex flex-col items-start gap-3">
      <canvas ref={canvas} className="text-accent" aria-label="一群各自移动的小点" />
      <button type="button" className={buttonClass} onClick={() => setBatch((value) => value + 1)}>
        换一批
      </button>
    </div>
  )
}

const ribbonColors = ['var(--color-accent)', 'var(--color-ink)', 'var(--color-glow)']

export function ConfettiDemo() {
  const [pieces, setPieces] = useState<{ id: number; x: number; delay: number; color: string }[]>([])
  const [done, setDone] = useState(false)
  const timer = useRef(0)
  useEffect(() => () => window.clearTimeout(timer.current), [])
  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <style>{`
        @keyframes dict-confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(108px) rotate(160deg); opacity: 0; }
        }
        .dict-confetti { animation: dict-confetti 0.9s ease-in forwards; }
        @media (prefers-reduced-motion: reduce) { .dict-confetti { animation: none; opacity: 0; } }
      `}</style>
      <div className="relative h-28 w-full overflow-hidden rounded-md border border-line">
        {done ? <p className="px-3 py-2 text-sm">这一下已经结束。</p> : null}
        {pieces.map((piece) => (
          <span
            key={piece.id}
            className="dict-confetti absolute top-1 h-2 w-3"
            style={{ left: `${piece.x}%`, background: piece.color, animationDelay: `${piece.delay}ms` }}
          />
        ))}
      </div>
      <button
        type="button"
        className={buttonClass}
        onClick={() => {
          setDone(false)
          if (reduced()) {
            setPieces([])
            setDone(true)
            return
          }
          const stamp = Date.now()
          setPieces(
            Array.from({ length: 14 }, (_, index) => ({
              id: stamp + index,
              x: 8 + Math.random() * 80,
              delay: Math.random() * 80,
              color: ribbonColors[index % ribbonColors.length],
            })),
          )
          window.clearTimeout(timer.current)
          timer.current = window.setTimeout(() => {
            setPieces([])
            setDone(true)
          }, 1100)
        }}
      >
        撒一下
      </button>
    </div>
  )
}

export function ParallaxDemo() {
  const [calm, setCalm] = useState(false)
  useEffect(() => {
    setCalm(reduced())
  }, [])
  return (
    <div className="h-36 w-full max-w-xs overflow-auto rounded-md border border-line">
      <div className="relative h-64">
        <div className={calm ? 'px-3 pt-3 text-sm text-muted' : 'sticky top-3 px-3 text-sm text-muted'}>远</div>
        <p className="px-3 pt-6 text-sm">近，跟着滚。</p>
        <p className="px-3 pt-28 text-sm">近的已经走到下面。远的还停在上面。</p>
      </div>
    </div>
  )
}
