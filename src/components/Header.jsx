import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/useCart'

function Header({ categories, searchTerm, onSearchChange }) {
  const { totalItems } = useCart()

  return (
    <header className="app-header">
      <div className="header-top-row">
        <p className="tagline">QuickCart</p>
        <nav className="main-nav" aria-label="Primary navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to={`/category/${encodeURIComponent(categories[0])}`}>
            Category
          </NavLink>
          <NavLink to="/cart" className="cart-trigger" aria-label="Open cart page">
            Cart
            <span className="cart-count">{totalItems}</span>
          </NavLink>
        </nav>
      </div>

      <h1>Discover Everyday Essentials</h1>
      <p className="subtitle">
        Browse our curated product lineup and find quality picks at great prices.
      </p>

      <div className="search-row">
        <label htmlFor="product-search">Search products</label>
        <input
          id="product-search"
          type="text"
          placeholder="Search by name, category, or description"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="category-links" aria-label="Category shortcuts">
        {categories.map((category) => (
          <Link key={category} to={`/category/${encodeURIComponent(category)}`}>
            {category}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header
