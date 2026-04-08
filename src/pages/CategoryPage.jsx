import { Link, useParams } from 'react-router-dom'
import ProductList from '../components/ProductList'

function CategoryPage({ products, categories, searchTerm }) {
  const { categoryName } = useParams()
  const decodedCategory = decodeURIComponent(categoryName ?? '')

  const matchedCategory = categories.find(
    (category) => category.toLowerCase() === decodedCategory.toLowerCase(),
  )

  if (!matchedCategory) {
    return (
      <section className="empty-state category-empty">
        <h2>Category not found</h2>
        <p>Select one of the available categories to continue browsing.</p>
        <div className="category-links">
          {categories.map((category) => (
            <Link key={category} to={`/category/${encodeURIComponent(category)}`}>
              {category}
            </Link>
          ))}
        </div>
      </section>
    )
  }

  const normalizedSearch = searchTerm.trim().toLowerCase()

  const filteredProducts = products
    .filter((product) => product.category === matchedCategory)
    .filter((product) => {
      if (!normalizedSearch) {
        return true
      }

      return (
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch)
      )
    })

  return (
    <section>
      <div className="page-headline">
        <h2>{matchedCategory}</h2>
        <p>Explore products in this category.</p>
      </div>

      <ProductList
        products={filteredProducts}
        emptyTitle="No results in this category"
        emptyDescription="Adjust your search to see matching items in this category."
      />
    </section>
  )
}

export default CategoryPage
