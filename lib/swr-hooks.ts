/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import useSWR from 'swr'

interface Data {
  data: any
  isLoading: boolean
  isError: any
}

const fetcher = async (url: string): Promise<any> => {
  return await window.fetch(url).then(async (res) => await res.json())
}

export const useEntries = (
  url: string,
  query?: string,
  sort?: string
): Data => {
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
