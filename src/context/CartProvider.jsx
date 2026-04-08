import { useEffect, useMemo, useState } from 'react'
import { CartContext } from './cartContext'

const CART_STORAGE_KEY = 'quickcart-cart-items'

function safeReadCartFromStorage() {
  try {
    const storedValue = localStorage.getItem(CART_STORAGE_KEY)

    if (!storedValue) {
      return []
    }

    const parsed = JSON.parse(storedValue)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => safeReadCartFromStorage())

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    )
  }

  const totals = useMemo(() => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )

    return { totalItems, totalPrice }
  }, [cartItems])

  const value = {
    cartItems,
    totalItems: totals.totalItems,
    totalPrice: totals.totalPrice,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
