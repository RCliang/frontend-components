export type CategoryId =
  | 'concept'
  | 'action'
  | 'form'
  | 'navigation'
  | 'menu'
  | 'overlay'
  | 'status'
  | 'display'
  | 'motion'

export type LibraryRole = 'foundation' | 'specialist' | 'finished'

export type TermId =
  | 'headless'
  | 'portal'
  | 'focus-trap'
  | 'controlled'
  | 'dialog'
  | 'alert-dialog'
  | 'drawer'
  | 'popover'
  | 'tooltip'
  | 'toast'
  | 'command'
  | 'tabs'
  | 'accordion'
  | 'dropdown-menu'
  | 'select'
  | 'autocomplete'
  | 'number'
  | 'button'
  | 'icon-button'
  | 'link'
  | 'input'
  | 'textarea'
  | 'checkbox'
  | 'radio'
  | 'switch'
  | 'slider'
  | 'number-input'
  | 'field'
  | 'breadcrumb'
  | 'pagination'
  | 'steps'
  | 'popconfirm'
  | 'alert'
  | 'progress'
  | 'skeleton'
  | 'spinner'
  | 'empty'
  | 'badge'
  | 'tag'
  | 'avatar'
  | 'card'
  | 'transition'
  | 'keyframes'
  | 'fade'
  | 'slide'
  | 'scale'
  | 'spring'
  | 'stagger'
  | 'presence'
  | 'expand'
  | 'reduced-motion'
  | 'bounce'
  | 'flip'
  | 'hover'
  | 'press'
  | 'ripple'
  | 'shake'
  | 'check'
  | 'pulse'
  | 'shimmer'
  | 'indeterminate'
  | 'loading-dots'
  | 'typewriter'
  | 'indicator'
  | 'smooth-scroll'
  | 'flip-layout'
  | 'swipe'
  | 'scroll-reveal'
  | 'easing'
  | 'delay'
  | 'timeline'
  | 'particle'
  | 'confetti'
  | 'parallax'

export type DemoId = TermId

export type LibraryId =
  | 'shadcn'
  | 'base-ui'
  | 'radix'
  | 'sonner'
  | 'vaul'
  | 'cmdk'
  | 'number-flow'
  | 'beautiful-ui'
  | 'magic-ui'
  | 'aceternity'
  | 'twenty-first'
  | 'shitui'

export type Term = {
  id: TermId
  name: string
  nameZh: string
  aliases: string[]
  category: CategoryId
  oneLiner: string
  definition: string
  useWhen: string
  avoidWhen: string
  anatomy: { name: string; role: string }[]
  behaviors: string[]
  demo: DemoId
  libraries: { id: LibraryId; note: string }[]
  related: TermId[]
}

export type Library = {
  id: LibraryId
  name: string
  url: string
  role: LibraryRole
  roleLabel: '底子' | '专才' | '成品件'
  summary: string
  owns: string
  notFor: string
  terms: TermId[]
}

export type Category = {
  id: CategoryId
  name: string
  blurb: string
}
