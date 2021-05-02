import { PRODUCT } from '@/assets/models'

export const getTotalProductsInCart = (cartProducts: PRODUCT[]): number =>
  cartProducts.reduce((acc, curr) => acc + curr.amount, 0)

export const calculateSubTotal = (cartProducts: PRODUCT[]): number =>
  cartProducts.reduce((acc, curr) => acc + curr.amount * curr.price, 0)

export const calculateDiscount = (cartProducts: PRODUCT[]): number =>
  cartProducts.reduce((acc, curr) => acc + curr.amount * curr.discount, 0)
