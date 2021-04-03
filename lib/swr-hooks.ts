/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import useSWR, { SWRResponse } from 'swr'

interface Products {
  products: any
  isLoading: boolean
  isError: any
}

const fetcher = async (url: string): Promise<any> => {
  return await window.fetch(url).then(async (res) => await res.json())
}

export const useProducts = (): Products => {
  const { data, error } = useSWR('/api/get-products', fetcher)

  return {
    products: data,
    isLoading: !error && !data,
    isError: error
  }
}

export function useEntry (id: string): SWRResponse<any, any> {
  return useSWR(`/api/get-entry?id=${id}`, fetcher)
}
