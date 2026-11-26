export function routerBasename(baseUrl: string): string | undefined {
  const trimmed = baseUrl.replace(/\/$/, '')
  if (trimmed === '') return undefined
  return trimmed
}
