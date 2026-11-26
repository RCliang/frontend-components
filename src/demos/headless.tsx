import { useState } from 'react'
import { buttonClass } from './ui'

const panels = [
  { id: 'one', label: '第一项', body: '第一块内容' },
  { id: 'two', label: '第二项', body: '第二块内容' },
] as const

function TabStrip({ styled }: { styled: boolean }) {
  const [current, setCurrent] = useState<(typeof panels)[number]['id']>(panels[0].id)
  const active = panels.find((panel) => panel.id === current) ?? panels[0]

  return (
    <div>
      <div role="tablist" className="flex flex-wrap gap-2">
        {panels.map((panel) => {
          const selected = panel.id === current
          return (
            <button
              key={panel.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={styled ? `${buttonClass} ${selected ? 'border-accent' : ''}` : undefined}
              onClick={() => setCurrent(panel.id)}
            >
              {panel.label}
            </button>
          )
        })}
      </div>
      <p role="tabpanel" className="mt-3 text-sm">
        {active.body}
      </p>
    </div>
  )
}

export function HeadlessDemo() {
  return (
    <div className="grid w-full gap-6 @min-[36rem]:grid-cols-2">
      <div>
        <p className="mb-2 text-sm">无样式</p>
        <TabStrip styled={false} />
      </div>
      <div>
        <p className="mb-2 text-sm">同一行为，用上按钮样式</p>
        <TabStrip styled />
      </div>
    </div>
  )
}
