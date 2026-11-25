import * as Tabs from '@radix-ui/react-tabs'
import { buttonClass } from './ui'

export function TabsDemo() {
  return (
    <Tabs.Root defaultValue="one" className="w-full max-w-sm">
      <Tabs.List className="flex flex-wrap gap-2" aria-label="标签页例子">
        <Tabs.Trigger className={`${buttonClass} data-[state=active]:border-accent`} value="one">
          第一项
        </Tabs.Trigger>
        <Tabs.Trigger className={`${buttonClass} data-[state=active]:border-accent`} value="two">
          第二项
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="mt-3 text-sm" value="one">
        第一块内容，占同一块区域。
      </Tabs.Content>
      <Tabs.Content className="mt-3 text-sm" value="two">
        第二块内容换掉了第一块。
      </Tabs.Content>
    </Tabs.Root>
  )
}
