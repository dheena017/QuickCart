import ProductCard from './ProductCard'

function ProductList({ products, onAddToCart }) {
  return (
    <section className="product-section" aria-label="Product listing">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
