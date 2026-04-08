import Header from './components/Header'
import ProductList from './components/ProductList'
import products from './data/products'
import './styles/App.css'

function App() {
  return (
    <main className="app">
      <div className="app-shell">
        <Header />
        <ProductList products={products} />
      </div>
    </main>
  )
}

export default App
