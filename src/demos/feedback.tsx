import { useState } from 'react'
import { buttonClass, panelClass } from './ui'

export function PopconfirmDemo() {
  const [open, setOpen] = useState(true)
  const [gone, setGone] = useState(false)
  return (
    <div className="flex flex-col items-center gap-3">
      <button type="button" className={buttonClass} onClick={() => setOpen(true)}>
        删除这一条
      </button>
      {open && !gone ? (
        <div className={`${panelClass} w-56`}>
          <p className="text-sm">删除后不能恢复。</p>
          <div className="mt-3 flex justify-end gap-2">
            <button type="button" className={buttonClass} onClick={() => setOpen(false)}>
              取消
            </button>
            <button
              type="button"
              className={buttonClass}
              onClick={() => {
                setGone(true)
                setOpen(false)
              }}
            >
              删除
            </button>
          </div>
        </div>
      ) : null}
      {gone ? <p className="text-sm">这一条已经删除。</p> : null}
    </div>
  )
}

export function AlertDemo() {
  const [open, setOpen] = useState(true)
  if (!open) {
    return (
      <button type="button" className={buttonClass} onClick={() => setOpen(true)}>
        再显示提示
      </button>
    )
  }
  return (
    <div className="flex w-full max-w-sm items-start justify-between gap-3 rounded-md border border-line bg-stage px-3 py-2 text-sm" role="status">
      <p>保存失败。请再试一次。</p>
      <button type="button" className="text-accent" onClick={() => setOpen(false)}>
        关闭
      </button>
    </div>
  )
}

export function ProgressDemo() {
  const [value, setValue] = useState(35)
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="h-2 overflow-hidden rounded-full bg-line" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full bg-accent" style={{ width: `${value}%` }} />
      </div>
      <button type="button" className={buttonClass} onClick={() => setValue((current) => Math.min(100, current + 15))}>
        完成 {value}%
      </button>
    </div>
  )
}

export function SkeletonDemo() {
  const [ready, setReady] = useState(false)
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      {ready ? (
        <div>
          <p className="font-medium">松树记</p>
          <p className="mt-1 text-sm">正文已经到了。</p>
        </div>
      ) : (
        <div className="animate-pulse" aria-hidden="true">
          <div className="h-4 w-24 rounded bg-line" />
          <div className="mt-2 h-3 w-full rounded bg-line" />
        </div>
      )}
      <button type="button" className={buttonClass} onClick={() => setReady((value) => !value)}>
        {ready ? '重新占位' : '数据到了'}
      </button>
    </div>
  )
}

export function SpinnerDemo() {
  const [busy, setBusy] = useState(true)
  return (
    <button type="button" className={buttonClass} onClick={() => setBusy((value) => !value)}>
      <span className={`mr-2 inline-block h-3 w-3 rounded-full border-2 border-current border-t-transparent ${busy ? 'animate-spin' : ''}`} />
      {busy ? '正在保存' : '已保存'}
    </button>
  )
}

export function EmptyDemo() {
  const [items, setItems] = useState<string[]>([])
  if (items.length === 0) {
    return (
      <div className="flex w-full max-w-xs flex-col items-start gap-3 rounded-md border border-dashed border-line px-4 py-5">
        <p className="text-sm">还没有记录。</p>
        <button type="button" className={buttonClass} onClick={() => setItems(['第一笔'])}>
          写第一笔
        </button>
      </div>
    )
  }
  return <p className="text-sm">{items[0]}</p>
}
