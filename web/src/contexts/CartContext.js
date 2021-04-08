import { useState } from 'react'

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(0)

  const addItem = () => {
    setItems((items) => items + 1)
  }

  return (
    <CartContext.Provider value={{items, addItem}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartItems() {
  const context = React.useContext(CartContext)

  return context.items
}

export function useCartAddItem() {
  const context = React.useContext(CartContext)

  return context.addItem
}