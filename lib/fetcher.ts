import { PRODUCT } from '@/assets/models'

const baseURL = process.env.API_URL

export const fetcherEntries = async (
  endpoint: string,
  q?: string | string[],
  sort?: string | string[]
): Promise<PRODUCT[]> => {
  // improve this
  const url =
    q !== undefined && sort !== undefined
      ? `${String(baseURL)}/${endpoint}?q=${String(q)}&sort=${String(sort)}`
      : q !== undefined
        ? `${String(baseURL)}/${endpoint}?q=${String(q)}`
        : sort !== undefined
          ? `${String(baseURL)}/${endpoint}?sort=${String(sort)}`
          : `${String(baseURL)}/${endpoint}`

  return await (await fetch(url)).json()
}

export const fetcherEntry = async (endpoint: string): Promise<PRODUCT[]> => {
  const url = `${String(baseURL)}/${endpoint}`
  return await (await fetch(url)).json()
}
