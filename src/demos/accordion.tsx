import * as Accordion from '@radix-ui/react-accordion'
import { buttonClass } from './ui'

const items = [
  { id: 'one', title: '第一项', body: '在标题下面展开。' },
  { id: 'two', title: '第二项', body: '可以和第一项同时打开。' },
]

export function AccordionDemo() {
  return (
    <Accordion.Root type="multiple" className="w-full max-w-sm">
      {items.map((item) => (
        <Accordion.Item key={item.id} value={item.id} className="border-b border-line">
          <Accordion.Header>
            <Accordion.Trigger className={`${buttonClass} my-2 w-full justify-between`}>
              {item.title}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-1 pb-3 text-sm">{item.body}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
