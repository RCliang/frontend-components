import { complete } from '../domain/complete'
import type { Category, CategoryId } from '../domain/types'

export const categories: Record<CategoryId, Category> = complete<CategoryId, Category>()({
  concept: {
    id: 'concept',
    name: '概念',
    blurb: '这些词讲组件怎么工作，不指一块具体界面。',
  },
  overlay: {
    id: 'overlay',
    name: '浮层',
    blurb: '浮在页面上的一层。差别在位置、关闭方式，以及里面有没有控件。',
  },
  navigation: {
    id: 'navigation',
    name: '导航',
    blurb: '在同一页里换着看几组内容。',
  },
  menu: {
    id: 'menu',
    name: '菜单',
    blurb: '点开后的一组项。项可以是动作，也可以是留下的值。',
  },
  motion: {
    id: 'motion',
    name: '动效',
    blurb: '一个值变了的时候，眼睛能跟上。',
  },
})
