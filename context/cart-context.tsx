import { createContext, FC, useContext, useMemo, useReducer } from 'react'

import { PRODUCT } from '@/assets/models'

interface STATE {
  cartProducts: PRODUCT[]
}

const initialState: STATE = {
  cartProducts: []
}

type ACTION =
  | { type: 'ADD PRODUCT', payload: PRODUCT }
  | { type: 'DECREASE AMOUNT', payload: PRODUCT }
  | { type: 'REMOVE PRODUCT', payload: PRODUCT }

const CARTContext = createContext(initialState)

function cartReducer (state: STATE, action: ACTION): STATE {
  switch (action.type) {
    case 'ADD PRODUCT': {
      // Is the product already added in the cart
      const isItemInCart = state.cartProducts.find(
        (cartProduct) => cartProduct.id === action.payload.id
      )

      if (isItemInCart) {
        return {
          ...state,
          cartProducts: state.cartProducts.map((cartProduct) =>
            cartProduct.id === action.payload.id
              ? { ...cartProduct, amount: cartProduct.amount + 1 }
              : cartProduct
          )
        }
      }

      // First time the product is added in the cart
      return {
        ...state,
        cartProducts: [...state.cartProducts, { ...action.payload, amount: 1 }]
      }
    }

    case 'DECREASE AMOUNT': {
      return {
        ...state,
        cartProducts: state.cartProducts.reduce<PRODUCT[]>((acc, curr) => {
          if (curr.id === action.payload.id) {
            if (curr.amount === 1) return acc
            return [...acc, { ...curr, amount: curr.amount - 1 }]
          }
          return [...acc, curr]
        }, [])
      }
    }

    case 'REMOVE PRODUCT': {
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (cartProduct) => cartProduct.id !== action.payload.id
        )
      }
    }

    default: {
      throw new Error('Unsupported action type.')
    }
  }
}

export const CARTProvider: FC = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addProductToCart = (product: PRODUCT): void =>
    dispatch({
      type: 'ADD PRODUCT',
      payload: product
    })

  const decreaseAmount = (product: PRODUCT): void =>
    dispatch({ type: 'DECREASE AMOUNT', payload: product })

  const removeProductFromCart = (product: PRODUCT): void =>
    dispatch({
      type: 'REMOVE PRODUCT',
      payload: product
    })

  const value = useMemo(
    () => ({
      ...state,
      addProductToCart,
      decreaseAmount,
      removeProductFromCart
    }),
    [state]
  )

  return <CARTContext.Provider value={value} {...props} />
}

export const useCart = (): STATE | any => {
  const context = useContext(CARTContext)

  if (context === undefined) {
    throw new Error('useCart must be within a CARTProvider')
  }

  return context
}
