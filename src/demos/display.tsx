import { useState } from 'react'
import { buttonClass, panelClass } from './ui'

export function BadgeDemo() {
  const [count, setCount] = useState(3)
  return (
    <button type="button" className={`${buttonClass} gap-2`} onClick={() => setCount((value) => value + 1)}>
      收件
      <span className="rounded-full border border-accent px-1.5 text-xs text-accent">{count}</span>
    </button>
  )
}

export function TagDemo() {
  const [tags, setTags] = useState(['松', '竹', '梅'])
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="inline-flex items-center gap-1 rounded-full border border-line bg-stage px-2 py-1 text-sm">
          {tag}
          <button type="button" aria-label={`去掉${tag}`} className="text-ink/60" onClick={() => setTags((value) => value.filter((item) => item !== tag))}>
            ×
          </button>
        </li>
      ))}
      {tags.length === 0 ? <li className="text-sm">标记都去掉了。</li> : null}
    </ul>
  )
}

const people = [
  { name: '林', tone: 'bg-accent/15' },
  { name: '周', tone: 'bg-line' },
  { name: '陈', tone: 'bg-paper' },
]

export function AvatarDemo() {
  return (
    <ul className="flex">
      {people.map((person, index) => (
        <li
          key={person.name}
          className={`${person.tone} -ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-line text-sm first:ml-0`}
          style={{ zIndex: people.length - index }}
        >
          {person.name}
        </li>
      ))}
    </ul>
  )
}

export function CardDemo() {
  return (
    <article className={`${panelClass} w-full max-w-xs`}>
      <h3 className="font-medium">今日记录</h3>
      <p className="mt-2 text-sm leading-6">一块有边界的信息，标题和内容在一起。</p>
    </article>
  )
}

const trees = ['松', '竹', '梅', '柏']

export function AutocompleteDemo() {
  const [query, setQuery] = useState('')
  const matches = trees.filter((tree) => tree.includes(query.trim()))
  return (
    <div className="w-full max-w-xs">
      <input
        className="w-full rounded-md border border-line bg-stage px-2 py-1.5 text-sm"
        placeholder="打一个字"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        aria-label="找一棵树"
      />
      <ul className="mt-2">
        {matches.map((tree) => (
          <li key={tree}>
            <button type="button" className="w-full rounded-md px-2 py-1.5 text-left text-sm hover:bg-line" onClick={() => setQuery(tree)}>
              {tree}
            </button>
          </li>
        ))}
        {matches.length === 0 ? <li className="px-2 py-1.5 text-sm">没有这棵</li> : null}
      </ul>
    </div>
  )
}
