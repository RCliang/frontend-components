import { useState } from 'react'
import { buttonClass } from './ui'

const crumbs = ['首页', '浮层', 'Dialog']

export function BreadcrumbDemo() {
  const [current, setCurrent] = useState(crumbs.length - 1)
  return (
    <nav aria-label="面包屑" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.slice(0, current + 1).map((crumb, index) => {
          const last = index === current
          return (
            <li key={crumb} className="flex items-center gap-2">
              {index > 0 ? <span className="text-ink/40">/</span> : null}
              {last ? (
                <span aria-current="page">{crumb}</span>
              ) : (
                <button type="button" className="text-accent" onClick={() => setCurrent(index)}>
                  {crumb}
                </button>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

const pageCount = 5

export function PaginationDemo() {
  const [page, setPage] = useState(1)
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm">第 {page} 页的记录</p>
      <div className="flex items-center gap-1" aria-label="分页">
        <button type="button" className={buttonClass} disabled={page === 1} onClick={() => setPage((value) => value - 1)}>
          上一页
        </button>
        {Array.from({ length: pageCount }, (_, index) => {
          const number = index + 1
          const current = number === page
          return (
            <button
              key={number}
              type="button"
              className={`${buttonClass} w-9 px-0 ${current ? 'border-accent' : ''}`}
              aria-current={current ? 'page' : undefined}
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          )
        })}
        <button
          type="button"
          className={buttonClass}
          disabled={page === pageCount}
          onClick={() => setPage((value) => value + 1)}
        >
          下一页
        </button>
      </div>
    </div>
  )
}

const steps = ['填写', '确认', '完成']

export function StepsDemo() {
  const [current, setCurrent] = useState(0)
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <ol className="flex gap-3 text-sm">
        {steps.map((step, index) => (
          <li key={step} className={index === current ? 'text-accent' : index < current ? 'text-ink' : 'text-ink/50'}>
            {index + 1}. {step}
          </li>
        ))}
      </ol>
      <p className="text-sm">现在是：{steps[current]}</p>
      <div className="flex gap-2">
        <button type="button" className={buttonClass} disabled={current === 0} onClick={() => setCurrent((value) => value - 1)}>
          上一步
        </button>
        <button
          type="button"
          className={buttonClass}
          disabled={current === steps.length - 1}
          onClick={() => setCurrent((value) => value + 1)}
        >
          下一步
        </button>
      </div>
    </div>
  )
}
