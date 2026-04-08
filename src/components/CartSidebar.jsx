function CartSidebar({
  isOpen,
  cartItems,
  totalPrice,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <>
      {isOpen && <button className="cart-backdrop" onClick={onClose} aria-label="Close cart" />}
      <aside className={`cart-sidebar ${isOpen ? 'open' : ''}`} aria-label="Shopping cart">
        <div className="cart-header-row">
          <h2>My Cart</h2>
          <button className="close-cart-btn" onClick={onClose} aria-label="Close cart panel">
            x
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <p>Add products to get started.</p>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                    <div className="qty-row">
                      <button onClick={() => onDecrease(item.id)} aria-label={`Decrease ${item.name}`}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onIncrease(item.id)} aria-label={`Increase ${item.name}`}>
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="remove-item-btn"
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-total">
              <span>Total</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartSidebar
