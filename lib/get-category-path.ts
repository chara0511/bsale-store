import { getSlug } from './get-slug'

export const getCategoryPath = (path: string): string => {
  const category = getSlug(path)

  return `/search${category !== '' ? `/${category}` : ''}`
}
