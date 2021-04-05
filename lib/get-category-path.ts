import { getSlug } from './get-slug'

export const getCategoryPath = (path: string): string => {
  const category = getSlug(path)

  return `/categories${category !== '' ? `/${category}` : ''}`
}
