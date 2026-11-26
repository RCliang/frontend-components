export function complete<K extends string, V>() {
  return <T extends Record<K, V> & { [P in Exclude<keyof T, K>]: never }>(record: T) =>
    record
}
