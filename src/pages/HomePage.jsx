import ProductList from '../components/ProductList'

function HomePage({ products, searchTerm }) {
  const normalizedSearch = searchTerm.trim().toLowerCase()

  const filteredProducts = products.filter((product) => {
    if (!normalizedSearch) {
      return true
    }

    return (
      product.name.toLowerCase().includes(normalizedSearch) ||
      product.description.toLowerCase().includes(normalizedSearch) ||
      product.category.toLowerCase().includes(normalizedSearch)
    )
  })

  return (
    <section>
      <div className="page-headline">
        <h2>All Products</h2>
        <p>Find products from every category in one place.</p>
      </div>

      <ProductList
        products={filteredProducts}
        emptyTitle="No products found"
        emptyDescription="Try a different search term to find matching products."
      />
    </section>
  )
}

export default HomePage
