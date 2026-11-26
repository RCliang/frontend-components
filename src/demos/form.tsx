import { useState } from 'react'
import { buttonClass } from './ui'

const fieldClass = 'w-full max-w-xs rounded-md border border-line bg-stage px-2 py-1.5 text-sm'

export function InputDemo() {
  const [value, setValue] = useState('松')
  return (
    <label className="flex w-full max-w-xs flex-col gap-2 text-sm">
      名字
      <input className={fieldClass} value={value} onChange={(event) => setValue(event.target.value)} />
      <span>现在是：{value || '空'}</span>
    </label>
  )
}

export function TextareaDemo() {
  const [value, setValue] = useState('第一行\n第二行')
  return (
    <label className="flex w-full max-w-xs flex-col gap-2 text-sm">
      备注
      <textarea className={`${fieldClass} min-h-20`} value={value} onChange={(event) => setValue(event.target.value)} />
      <span>{value.length} 个字</span>
    </label>
  )
}

export function CheckboxDemo() {
  const [checked, setChecked] = useState({ mail: true, sms: false })
  return (
    <div className="flex flex-col gap-2 text-sm">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked.mail}
          onChange={(event) => setChecked((value) => ({ ...value, mail: event.target.checked }))}
        />
        邮件
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked.sms}
          onChange={(event) => setChecked((value) => ({ ...value, sms: event.target.checked }))}
        />
        短信
      </label>
    </div>
  )
}

const seasons = ['春', '夏', '秋']

export function RadioDemo() {
  const [value, setValue] = useState(seasons[0])
  return (
    <div className="flex flex-col gap-2 text-sm">
      {seasons.map((season) => (
        <label key={season} className="flex items-center gap-2">
          <input type="radio" name="season" checked={value === season} onChange={() => setValue(season)} />
          {season}
        </label>
      ))}
      <p>留下的是：{value}</p>
    </div>
  )
}

export function SwitchDemo() {
  const [on, setOn] = useState(false)
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label="深色"
        className={`${buttonClass} w-14 justify-start px-1 ${on ? 'border-accent' : ''}`}
        onClick={() => setOn((value) => !value)}
      >
        <span className={`h-5 w-5 rounded-sm border border-line bg-paper ${on ? 'ml-auto' : ''}`} />
      </button>
      <p className="text-sm">{on ? '已经是深色' : '还是浅色'}</p>
    </div>
  )
}

export function SliderDemo() {
  const [value, setValue] = useState(40)
  return (
    <label className="flex w-full max-w-xs flex-col gap-2 text-sm">
      音量 {value}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </label>
  )
}

export function NumberInputDemo() {
  const [value, setValue] = useState(3)
  return (
    <div className="flex items-center gap-2">
      <button type="button" className={buttonClass} onClick={() => setValue((current) => current - 1)}>
        减少
      </button>
      <input
        className="w-16 rounded-md border border-line bg-stage px-2 py-1.5 text-center text-sm"
        inputMode="numeric"
        value={value}
        onChange={(event) => setValue(Number(event.target.value) || 0)}
      />
      <button type="button" className={buttonClass} onClick={() => setValue((current) => current + 1)}>
        增加
      </button>
    </div>
  )
}

export function FieldDemo() {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)
  const invalid = touched && value.trim() === ''
  return (
    <label className="flex w-full max-w-xs flex-col gap-1 text-sm">
      <span>
        邮箱 <span className="text-accent">必填</span>
      </span>
      <input
        className={fieldClass}
        value={value}
        placeholder="you@example.com"
        onBlur={() => setTouched(true)}
        onChange={(event) => setValue(event.target.value)}
      />
      <span>{invalid ? '请填写邮箱。' : '用来接收结果。'}</span>
    </label>
  )
}
