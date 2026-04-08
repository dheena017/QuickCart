import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { CartProvider } from './context/CartProvider'
import products from './data/products'
import CartPage from './pages/CartPage'
import CategoryPage from './pages/CategoryPage'
import HomePage from './pages/HomePage'
import './styles/App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const categories = [...new Set(products.map((product) => product.category))]

  return (
    <CartProvider>
      <main className="app">
        <div className="app-shell">
          <Header
            categories={categories}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <Routes>
            <Route
              path="/"
              element={<HomePage products={products} searchTerm={searchTerm} />}
            />
            <Route
              path="/category/:categoryName"
              element={
                <CategoryPage
                  products={products}
                  categories={categories}
                  searchTerm={searchTerm}
                />
              }
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </CartProvider>
  )
}

export default App
