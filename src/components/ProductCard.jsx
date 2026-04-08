function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-content">
        <span className="product-category">{product.category}</span>
        <h2>{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
