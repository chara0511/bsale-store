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
}
