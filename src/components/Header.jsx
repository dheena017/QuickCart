function Header({ totalItems, onToggleCart }) {
  return (
    <header className="app-header">
      <div className="header-top-row">
        <p className="tagline">QuickCart</p>
        <button className="cart-trigger" onClick={onToggleCart} aria-label="Open shopping cart">
          Cart
          <span className="cart-count">{totalItems}</span>
        </button>
      </div>
      <h1>Discover Everyday Essentials</h1>
      <p className="subtitle">
        Browse our curated product lineup and find quality picks at great prices.
      </p>
    </header>
  )
}

export default Header
