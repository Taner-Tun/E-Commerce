import React, {useState} from "react"
import "../scss/main.scss"

const FilterProductMenu = ({handleFilter}) => {
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleCategoryChange = (event) => {
    const category = event.target.value
    handleFilter("Category", category)
  }

  return (
    <div className="menu-box">
      <h3>Filter by:</h3>
      <ul>
        <li onClick={() => handleFilter("A-Z")}>A-Z</li>
        <li onClick={() => handleFilter("PriceAsc")}>Price (Lowest to Highest)</li>
        <li onClick={() => handleFilter("PriceDesc")}>Price (Highest to Lowest)</li>
        <li>
          <label htmlFor="category">Category:</label>
          <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="category-select">
            <option value="">All</option>
            <option value="Wine">Wine</option>
            <option value="Meat">Meat</option>
            <option value="Cheese">Cheese</option>
          </select>
        </li>
      </ul>
    </div>
  )
}

export default FilterProductMenu
