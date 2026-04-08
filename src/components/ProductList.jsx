import ProductCard from './ProductCard'

function ProductList({ products }) {
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
