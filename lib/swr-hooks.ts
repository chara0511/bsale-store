/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import useSWR from 'swr'

interface Data {
  data: any
  isLoading: boolean
  isError: any
}

const baseURL = process.env.API_URL

const fetcher = async (url: string): Promise<any> => {
  return await window.fetch(url).then(async (res) => await res.json())
}

export const fetcherBackend = async (
  endpoint: string,
  q?: string | string[],
  sort?: string | string[]
): Promise<any> => {
  const url =
    q && sort
      ? `${String(baseURL)}/${endpoint}?q=${String(q)}&sort=${String(sort)}`
      : q
        ? `${String(baseURL)}/${endpoint}?q=${String(q)}`
        : sort
          ? `${String(baseURL)}/${endpoint}?sort=${String(sort)}`
          : `${String(baseURL)}/${endpoint}`

  const res = await fetch(url)
  return await res.json()
}

export const fetcherEntry = async (
  endpoint: string,
  id?: string | string[]
): Promise<any> => {
  const url = `${String(baseURL)}/${endpoint}?id=${String(id)}`

  const res = await fetch(url)
  return await res.json()
}

export const useEntries = (
  url: string,
  query?: string,
  sort?: string
): Data => {
  // !improve this maybe with SWITCH case
  const { data, error } = useSWR(
    query && sort
      ? `${url}?q=${query}&sort=${sort}`
      : query
        ? `${url}?q=${query}`
        : sort
          ? `${url}?sort=${sort}`
          : url,
    fetcher
  )
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export const useEntry = (url: string, id: string): Data => {
  const { data, error } = useSWR(`${url}?id=${id}`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
