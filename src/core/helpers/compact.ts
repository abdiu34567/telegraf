export function compactOptions<T extends { [key: string]: unknown }>(
  options?: T
): T | undefined {
  if (!options) {
    return options
  }

  const compacted: Partial<T> = {}
  for (const key in options) {
    if (
      Object.prototype.hasOwnProperty.call(options, key) &&
      options[key] !== undefined
    ) {
      compacted[key] = options[key]
    }
  }
  return compacted as T | undefined
}
