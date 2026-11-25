import * as Select from '@radix-ui/react-select'
import { buttonClass, panelClass } from './ui'

const options = [
  { value: 'pine', label: '松' },
  { value: 'bamboo', label: '竹' },
  { value: 'plum', label: '梅' },
]

const itemClass = 'rounded-md px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-line'

export function SelectDemo() {
  return (
    <Select.Root>
      <Select.Trigger className={`${buttonClass} min-w-32 justify-between`} aria-label="选一个值">
        <Select.Value placeholder="选一个值" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={`${panelClass} z-50`} position="popper" sideOffset={8}>
          <Select.Viewport>
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value} className={itemClass}>
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
