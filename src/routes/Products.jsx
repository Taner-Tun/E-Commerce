import React, {useState, useEffect} from "react"
import ItemProduct from "../components/ItemProduct"
import Footer from "../components/Footer"
import "../scss/main.scss"

function Products() {
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(0)
  const [itemCount, setItemCount] = useState(0)
  const [searchText, setSearchText] = useState("")
  const [filteredCart, setFilteredCart] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/data")
      const data = await response.json()
      console.log(data)
      setCart(data.map((item) => ({...item})))
    } catch (error) {
      console.log("Error occurred:", error)
    }
  }

  const handleItemClick = (selectedProduct, action) => {
    switch (action) {
      case "add": {
        window.location.href = `/cart/${selectedProduct.itemid}`
        break
      }
      default:
        break
    }
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
    const filteredItems = cart.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()))
    setFilteredCart(filteredItems)
  }, [cart, searchText])

  return (
    <>
      <div className="test">
        <h1 className="Cart">
          Products Page <p>{filteredCart.length}</p>
        </h1>
        <div className="search">
          <input type="text" placeholder="Search products" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>
      </div>
      {filteredCart.map((item, index) => (
        <ItemProduct
          key={item.itemid}
          itemid={item.itemid}
          image={item.image}
          title={item.title}
          category={item.category}
          price={item.price}
          count={item.count}
          handleItemClick={(action) => handleItemClick(item, action)}
        />
      ))}
      <Footer />
    </>
  )
}

export default Products
