const baseURL = process.env.API_URL

export const fetcherEntries = async (
  endpoint: string,
  q?: string | string[],
  sort?: string | string[]
): Promise<any> => {
  const url =
    q !== undefined && sort !== undefined
      ? `${String(baseURL)}/${endpoint}?q=${String(q)}&sort=${String(sort)}`
      : q !== undefined
        ? `${String(baseURL)}/${endpoint}?q=${String(q)}`
        : sort !== undefined
          ? `${String(baseURL)}/${endpoint}?sort=${String(sort)}`
          : `${String(baseURL)}/${endpoint}`

  const res = await fetch(url)
  return await res.json()
}

export const fetcherEntry = async (endpoint: string): Promise<any> => {
  const url = `${String(baseURL)}/${endpoint}`

  const res = await fetch(url)
  return await res.json()
}
