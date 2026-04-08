import { useState } from 'react'
import CartSidebar from './components/CartSidebar'
import Header from './components/Header'
import ProductList from './components/ProductList'
import products from './data/products'
import './styles/App.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  const handleAddToCart = (product) => {
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

  const handleIncreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const handleDecreaseQuantity = (productId) => {
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

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    )
  }

  return (
    <main className="app">
      <div className="app-shell">
        <Header totalItems={totalItems} onToggleCart={() => setIsCartOpen(true)} />
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </div>

      <CartSidebar
        isOpen={isCartOpen}
        cartItems={cartItems}
        totalPrice={totalPrice}
        onClose={() => setIsCartOpen(false)}
        onIncrease={handleIncreaseQuantity}
        onDecrease={handleDecreaseQuantity}
        onRemove={handleRemoveItem}
      />
    </main>
  )
}

export default App
