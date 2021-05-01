import { Dispatch, SetStateAction } from 'react'

export interface CATEGORY {
  id: number
  name: string
}
export interface META {
  pathname: string
  category: string | undefined
}
export interface PRODUCT {
  id: number
  name: string
  url_image: string
  price: number
  discount: number
  category: number
  amount: number
}

export interface PAGINATE {
  products: PRODUCT[]
  pageCount: Dispatch<SetStateAction<number>>
  perPage: number
}
