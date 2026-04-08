import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'

function CartPage() {
  const {
    cartItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <section className="empty-state">
        <h2>Your cart is empty</h2>
        <p>Add products from the catalog to start your order.</p>
        <Link className="primary-link" to="/">
          Continue Shopping
        </Link>
      </section>
    )
  }

  return (
    <section className="cart-page">
      <div className="page-headline">
        <h2>Cart</h2>
        <p>Review your items before checkout.</p>
      </div>

      <ul className="cart-page-list">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-page-item">
            <img src={item.image} alt={item.name} className="cart-page-image" />
            <div className="cart-page-details">
              <h3>{item.name}</h3>
              <p className="cart-page-category">{item.category}</p>
              <p className="cart-page-price">${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-page-actions">
              <div className="qty-row">
                <button onClick={() => decreaseQuantity(item.id)} aria-label={`Decrease ${item.name}`}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} aria-label={`Increase ${item.name}`}>
                  +
                </button>
              </div>
              <button className="remove-item-btn" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <span>Total Price</span>
        <strong>${totalPrice.toFixed(2)}</strong>
      </div>
    </section>
  )
}

export default CartPage
