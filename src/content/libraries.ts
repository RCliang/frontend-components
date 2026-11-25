import { complete } from '../domain/complete'
import type { Library, LibraryId, LibraryRole } from '../domain/types'

function roleFields(role: LibraryRole): Pick<Library, 'role' | 'roleLabel'> {
  switch (role) {
    case 'foundation':
      return { role, roleLabel: '底子' }
    case 'specialist':
      return { role, roleLabel: '专才' }
    case 'finished':
      return { role, roleLabel: '成品件' }
    default: {
      const neverRole: never = role
      return neverRole
    }
  }
}

export const libraries: Record<LibraryId, Library> = complete<LibraryId, Library>()({
  shadcn: {
    id: 'shadcn',
    name: 'shadcn',
    url: 'https://ui.shadcn.com',
    ...roleFields('foundation'),
    summary:
      'shadcn 不是运行时依赖。你把 Radix 加 Tailwind 的源码复制进自己的仓库。',
    owns: '一份放在你仓库里、可以改的组件源码。',
    notFor: '它不作为依赖装进 node_modules。',
    terms: [
      'dialog',
      'alert-dialog',
      'popover',
      'tooltip',
      'dropdown-menu',
      'select',
      'tabs',
      'accordion',
      'drawer',
      'toast',
      'command',
    ],
  },
  'base-ui': {
    id: 'base-ui',
    name: 'Base UI',
    url: 'https://base-ui.com',
    ...roleFields('foundation'),
    summary: 'Base UI 是无样式组件。它和 Radix 同一路，API 不同。本站不挂载它。',
    owns: '无样式的可访问行为。',
    notFor: '颜色和圆角。本站的例子也不引用它。',
    terms: [
      'headless',
      'portal',
      'focus-trap',
      'controlled',
      'dialog',
      'alert-dialog',
      'popover',
      'tooltip',
      'dropdown-menu',
      'select',
      'tabs',
      'accordion',
    ],
  },
  radix: {
    id: 'radix',
    name: 'Radix',
    url: 'https://www.radix-ui.com',
    ...roleFields('foundation'),
    summary: 'Radix 提供无样式的可访问行为。焦点、键盘、popper。没有颜色。',
    owns: '焦点、键盘和浮层定位。',
    notFor: '颜色、圆角和成品外观。',
    terms: [
      'headless',
      'portal',
      'focus-trap',
      'controlled',
      'dialog',
      'alert-dialog',
      'popover',
      'tooltip',
      'dropdown-menu',
      'select',
      'tabs',
      'accordion',
    ],
  },
  sonner: {
    id: 'sonner',
    name: 'Sonner',
    url: 'https://sonner.emilkowal.ski',
    ...roleFields('specialist'),
    summary: 'Sonner 只做 Toast 临时通知。调用 toast()，页面上放一个 Toaster。',
    owns: '临时通知的出现和离开。',
    notFor: '对话框、菜单和其他浮层。',
    terms: ['toast'],
  },
  vaul: {
    id: 'vaul',
    name: 'Vaul',
    url: 'https://vaul.emilkowal.ski',
    ...roleFields('specialist'),
    summary: 'Vaul 只做 Drawer 抽屉，可以拖动关闭。',
    owns: '贴边的抽屉和拖动关闭。',
    notFor: '停在画面中间的 Dialog 对话框。',
    terms: ['drawer'],
  },
  cmdk: {
    id: 'cmdk',
    name: 'cmdk',
    url: 'https://github.com/dip/cmdk',
    ...roleFields('specialist'),
    summary: 'cmdk 只做可以过滤的 Command 命令面板。cmdk.paco.me 现在会跳到这个仓库。',
    owns: '可搜索的动作列表。',
    notFor: '表单里的 Select 选择器。',
    terms: ['command'],
  },
  'number-flow': {
    id: 'number-flow',
    name: 'Number Flow',
    url: 'https://number-flow.barvian.me',
    ...roleFields('specialist'),
    summary: 'Number Flow 只做数值变化时的数字滚动。',
    owns: '数字从旧值滚到新值。',
    notFor: '数字输入框。',
    terms: ['number'],
  },
  'beautiful-ui': {
    id: 'beautiful-ui',
    name: 'Beautiful UI',
    url: 'https://www.beautifului.dev/',
    ...roleFields('finished'),
    summary: 'Beautiful UI 交付做好的视觉。它不定义这些词。beautifului.dev 会跳到这里。',
    owns: '成品视觉。',
    notFor: '这些词的定义。',
    terms: [],
  },
  'magic-ui': {
    id: 'magic-ui',
    name: 'Magic UI',
    url: 'https://magicui.design',
    ...roleFields('finished'),
    summary: 'Magic UI 交付做好的视觉。它不定义这些词。',
    owns: '成品视觉。',
    notFor: '这些词的定义。',
    terms: [],
  },
  aceternity: {
    id: 'aceternity',
    name: 'Aceternity UI',
    url: 'https://ui.aceternity.com',
    ...roleFields('finished'),
    summary: 'Aceternity UI 交付做好的视觉。它不定义这些词。',
    owns: '成品视觉。',
    notFor: '这些词的定义。',
    terms: [],
  },
  'twenty-first': {
    id: 'twenty-first',
    name: '21st.dev',
    url: 'https://21st.dev',
    ...roleFields('finished'),
    summary: '21st.dev 是成品组件的社区目录。它不定义这些词。',
    owns: '别人做好的组件目录。',
    notFor: '这些词的定义。',
    terms: [],
  },
  shitui: {
    id: 'shitui',
    name: 'ShitUI',
    url: 'https://shitui.in/',
    ...roleFields('finished'),
    summary: 'ShitUI 交付做好的视觉。它不定义这些词。以前的名字是 Rare UI。rareui.in 会跳到这里。',
    owns: '成品视觉。',
    notFor: '这些词的定义。',
    terms: [],
  },
})

export const roleOrder = ['foundation', 'specialist', 'finished'] as const satisfies readonly LibraryRole[]

const libraryIds = new Set<string>(Object.values(libraries).map((library) => library.id))

export function isLibraryId(id: string): id is LibraryId {
  return libraryIds.has(id)
}

export function findLibrary(id: string): Library | undefined {
  if (!isLibraryId(id)) return undefined
  return libraries[id]
}
