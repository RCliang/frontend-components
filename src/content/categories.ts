import { complete } from '../domain/complete'
import type { Category, CategoryId } from '../domain/types'

export const categories: Record<CategoryId, Category> = complete<CategoryId, Category>()({
  concept: {
    id: 'concept',
    name: '概念',
    blurb: '这些词讲组件怎么工作，不指一块具体界面。',
  },
  action: {
    id: 'action',
    name: '操作',
    blurb: '点一下就发生的事。去另一个地方，和就地做一件事，不是同一个词。',
  },
  form: {
    id: 'form',
    name: '表单',
    blurb: '用户留下一个值。差别在能选几个，以及是不是马上生效。',
  },
  navigation: {
    id: 'navigation',
    name: '导航',
    blurb: '路径、页码、步骤，或者在同一块里换内容。',
  },
  menu: {
    id: 'menu',
    name: '菜单',
    blurb: '点开后的一组项。项可以是动作，也可以是留下的值。',
  },
  overlay: {
    id: 'overlay',
    name: '浮层',
    blurb: '浮在页面上的一层。差别在位置、关闭方式，以及里面有没有控件。',
  },
  status: {
    id: 'status',
    name: '状态',
    blurb: '告诉你现在怎么样。它留在页面上，不逼你先做一个选择。',
  },
  display: {
    id: 'display',
    name: '展示',
    blurb: '把一块信息摆出来。差别在它挂在别的东西上，还是自己成一块。',
  },
  motion: {
    id: 'motion',
    name: '动效',
    blurb: '按它干什么来分。出现、回应、等待、换位置，还有这一段时间怎么走完。',
  },
})
