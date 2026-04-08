import ProductCard from './ProductCard'

function ProductList({ products, emptyTitle, emptyDescription }) {
  if (products.length === 0) {
    return (
      <section className="empty-state">
        <h2>{emptyTitle}</h2>
        <p>{emptyDescription}</p>
      </section>
    )
  }

  return (
    <section className="product-section" aria-label="Product listing">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
