import { Command } from 'cmdk'
import { panelClass } from './ui'

const actions = ['新建文件', '打开文件', '保存', '切换主题']

export function CommandDemo() {
  return (
    <Command label="命令面板" className={`${panelClass} w-full max-w-sm`}>
      <Command.Input placeholder="过滤动作" className="w-full border-b border-line bg-transparent px-1 py-2" />
      <Command.List className="mt-2">
        <Command.Empty className="px-1 py-2 text-sm">没有匹配的动作</Command.Empty>
        {actions.map((action) => (
          <Command.Item
            key={action}
            value={action}
            className="rounded-md px-2 py-1.5 text-sm data-[selected=true]:bg-line"
          >
            {action}
          </Command.Item>
        ))}
      </Command.List>
    </Command>
  )
}
