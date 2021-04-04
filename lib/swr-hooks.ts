/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import useSWR, { SWRResponse } from 'swr'

interface Data {
  data: any
  isLoading: boolean
  isError: any
}

const fetcher = async (url: string): Promise<any> => {
  return await window.fetch(url).then(async (res) => await res.json())
}

export const useEntries = (url: string, query?: string): Data => {
  const { data, error } = useSWR(query ? `${url}?q=${query}` : url, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export function useEntry (id: string): SWRResponse<any, any> {
  return useSWR(`/api/get-entry?id=${id}`, fetcher)
}
