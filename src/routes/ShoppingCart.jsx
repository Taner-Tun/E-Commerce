import React, {useState, useEffect} from "react"
import Item from "../components/Item"
import Total from "../components/Total"
import Footer from "../components/Footer"
import "../scss/main.scss"

function ShoppingCart() {
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(0)
  const [itemCount, setItemCount] = useState(0)
  let isFirstLoad = false
  useEffect(() => {
    if (!isFirstLoad) {
      fetchData()
    }
  }, [])

  const fetchData = async () => {
    try {
      isFirstLoad = true
      const storedCart = localStorage.getItem("cart")
      const cartData = storedCart ? JSON.parse(storedCart) : []
      const productId = window.location.pathname.split("/").pop()

      if (productId !== "shoppingcart") {
        const response = await fetch(`http://localhost:4000/data/${productId}`)

        const data = await response.json()

        // Check if the product is already in the cart
        const existingProductIndex = cart.findIndex((item) => item.id === data.id)
        if (existingProductIndex !== -1) {
          // Product already exists, update the count
          const updatedCart = [...cartData]
          updatedCart[existingProductIndex].count += 1
          setCart(updatedCart)
        } else {
          // Product doesn't exist, add it to the cart
          setCart([...cartData, {...data, count: 1}])
        }
      } else {
        setCart([...cartData])
      }
    } catch (error) {
      console.log("Error occurred:", error)
    }
  }
  const handleItemClick = (index, action) => {
    const updatedCart = [...cart]
    const item = updatedCart[index]
    switch (action) {
      case "+": {
        item.count += 1
        break
      }
      case "-": {
        if (item.count > 1) {
          item.count -= 1
        }
        break
      }
      case "delete": {
        updatedCart.splice(index, 1)
        break
      }
      default:
        break
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart))
    setCart(updatedCart)
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
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const calculateTotalWithShipping = (totalPrice) => {
    const totalNum = Number(totalPrice)
    if (totalNum >= 5000) {
      return totalNum.toFixed(2)
    } else {
      return totalNum.toFixed(2)
    }
  }

  return (
    <>
      <div className="main-container">
        <div className="test">
          <br />
          <hr />
          <br />
          <h1 className="Cart">
            Shopping Cart <span>{itemCount}</span>
          </h1>
        </div>
        <div className="cart-main">
          <div className="itemList">
            {cart.map((item, index) => (
              <Item
                key={`${item.id}-${index}`}
                itemid={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                description={item.description}
                price={item.price}
                count={item.count}
                handleItemClick={(action) => handleItemClick(index, action)}
              />
            ))}
          </div>
          <Total totalprice={calculateTotalWithShipping(amount)} itemCount={itemCount} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ShoppingCart
