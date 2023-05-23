import React, { useState } from "react";
import "../scss/main.scss";

const FilterProductMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFilter = (filterType, category) => {
    if (filterType === "Category") {
      // Logic for filtering by category
      console.log("Filtering by Category");

      // Nest additional logic based on selected category
      switch (category) {
        case "Wine":
          // Logic for filtering Wine
          console.log("Filtering Wine");
          break;
        case "Meat":
          // Logic for filtering Meat
          console.log("Filtering Meat");
          break;
        case "Cheese":
          // Logic for filtering Cheese
          console.log("Filtering Cheese");
          break;
        default:
          // Logic for handling other cases within Category
          console.log("Handling other cases within Category");
          break;
      }
    } else {
      switch (filterType) {
        case "A-Z":
          // Logic for filtering A-Z
          console.log("Filtering A-Z");
          break;
        case "PriceAsc":
          // Logic for filtering price from lowest to highest
          console.log("Filtering Price (Lowest to Highest)");
          break;
        case "PriceDesc":
          // Logic for filtering price from highest to lowest
          console.log("Filtering Price (Highest to Lowest)");
          break;
        case "ProductName":
          // Logic for filtering by product name
          console.log("Filtering by Product Name");
          break;
        default:
          console.log(`Invalid filter type: ${filterType}`);
      }
    }
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    handleFilter("Category", category);
  };

  return (
    <div className="menu-box">
      <h3>Filter by:</h3>
      <ul>
        <li onClick={() => handleFilter("A-Z")}>A-Z</li>
        <li onClick={() => handleFilter("PriceAsc")}>
          Price (Lowest to Highest)
        </li>
        <li onClick={() => handleFilter("PriceDesc")}>
          Price (Highest to Lowest)
        </li>
        <li>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category-select"
          >
            <option value="">All</option>
            <option value="Wine">Wine</option>
            <option value="Meat">Meat</option>
            <option value="Cheese">Cheese</option>
          </select>
        </li>
        <li onClick={() => handleFilter("ProductName")}>Product Name</li>
      </ul>
    </div>
  );
};

export default FilterProductMenu;


