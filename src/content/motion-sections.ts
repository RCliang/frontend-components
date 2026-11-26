import type { TermId } from '../domain/types'

export const motionSections: { id: string; name: string; blurb: string; terms: readonly TermId[] }[] = [
  {
    id: 'enter',
    name: '进入离开',
    blurb: '它怎么出现，或者怎么离开。',
    terms: ['fade', 'slide', 'scale', 'bounce', 'flip', 'expand', 'presence'],
  },
  {
    id: 'feedback',
    name: '状态反馈',
    blurb: '指针停着，或手指按下去，给的那一点回应。',
    terms: ['hover', 'press', 'ripple', 'shake', 'check'],
  },
  {
    id: 'loading',
    name: '加载反馈',
    blurb: '还没完成时，让人知道它在忙。',
    terms: ['number', 'pulse', 'shimmer', 'indeterminate', 'loading-dots', 'typewriter'],
  },
  {
    id: 'travel',
    name: '移动换位',
    blurb: '标记、列表或滚动位置在变。',
    terms: ['indicator', 'smooth-scroll', 'stagger', 'flip-layout', 'swipe', 'scroll-reveal'],
  },
  {
    id: 'time',
    name: '时间',
    blurb: '这一段怎么走完：跟状态、自己播、晚一点，或直接跳到终态。',
    terms: ['transition', 'keyframes', 'easing', 'delay', 'spring', 'timeline', 'reduced-motion'],
  },
  {
    id: 'ornament',
    name: '装饰',
    blurb: '不承担操作。一层层拉开距离，或热闹一下就收。',
    terms: ['particle', 'confetti', 'parallax'],
  },
]

export function motionSectionErrors(motionIds: readonly string[]): string[] {
  const listed = motionSections.flatMap((section) => section.terms)
  const errors: string[] = []
  const seen = new Set<string>()
  for (const id of listed) {
    if (seen.has(id)) errors.push(`${id} is listed twice`)
    seen.add(id)
    if (!motionIds.includes(id)) errors.push(`${id} is not a motion term`)
  }
  for (const id of motionIds) {
    if (!seen.has(id)) errors.push(`${id} is missing from a motion section`)
  }
  return errors
}
