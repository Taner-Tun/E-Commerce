import React, {useState, useEffect, Fragment} from "react"
import ItemProduct from "../components/ItemProduct"
import Footer from "../components/Footer"
import FilterProductMenu from "../components/FilterProductMenu"
import "../scss/main.scss"

function Products() {
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(0)
  const [itemCount, setItemCount] = useState(0)
  const [searchText, setSearchText] = useState("")
  const [sortBy, setSortBy] = useState("")
  const [filterBy, setFilterBy] = useState("")
  const [filteredCart, setFilteredCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/data")
      if (!response.ok) {
        throw new Error("Failed to fetch products")
      }
      const data = await response.json()
      console.log(data)
      setCart(data.map((item) => ({...item, count: 1})))
    } catch (error) {
      console.log("Error occurred:", error)
      setCart([])
    }
  }

  const handleItemClick = (selectedProduct, action) => {
    switch (action) {
      case "add": {
        // window.location.href = '/shoppingcart';
        window.location.href = `/shoppingcart/${selectedProduct.itemid}`
        break
      }
      default:
        break
    }
  }

  const handleFilter = (filterType, category) => {
    setFilterBy(filterType)
    setSearchText("") // Reset search text when applying a filter
    setSelectedCategory(category)
  }

  useEffect(() => {
    let totalPrice = 0
    let itemCount = 0
    cart.forEach((item) => {
      totalPrice += item.price * item.count
      itemCount += item.count
    })
    setAmount(totalPrice.toFixed(2))
    setItemCount(itemCount)
  }, [cart])

  useEffect(() => {
    const filteredItems = cart.filter(
      (item) => item.title.toLowerCase().includes(searchText.toLowerCase()) || item.category.toLowerCase().includes(searchText.toLowerCase())
    )

    // Apply additional filters if filterBy is set
    let finalFilteredCart = filteredItems
    if (filterBy === "Category") {
      finalFilteredCart = finalFilteredCart.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    switch (filterBy) {
      case "A-Z":
        // Logic for filtering A-Z
        finalFilteredCart = finalFilteredCart.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "PriceAsc":
        // Logic for filtering price from lowest to highest
        finalFilteredCart = finalFilteredCart.sort((a, b) => a.price - b.price)
        break
      case "PriceDesc":
        // Logic for filtering price from highest to lowest
        finalFilteredCart = finalFilteredCart.sort((a, b) => b.price - a.price)
        break
      default:
        break
    }

    setFilteredCart(finalFilteredCart)
  }, [cart, searchText, filterBy, selectedCategory])

  return (
    <Fragment>
      <div className="main-container">
        <FilterProductMenu handleFilter={handleFilter} />
        <h1 className="Cart">Products Page {/* <p>{filteredCart.length}</p> */}</h1>
        <div className="search">
          <input type="text" placeholder="Search products" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>
        <div className="product-wrapper">
          {filteredCart.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filteredCart.map((item, index) => (
              <ItemProduct
                key={item.itemid}
                itemid={item.itemid}
                image={item.image}
                title={item.title}
                category={item.category}
                description={item.description}
                price={item.price}
                count={item.count}
                handleItemClick={(action) => handleItemClick(item, action)}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Products
