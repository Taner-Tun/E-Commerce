import {Link} from "react-router-dom"

import "../scss/main.scss"
import {useEffect, useState} from "react"

const CartButton = () => {
  const [itemCount, setItemCount] = useState(0)

  setInterval(() => {
    const storedCart = localStorage.getItem("cart")

    const cartData = storedCart ? JSON.parse(storedCart) : []
    let count = 0
    if (cartData.length > 0) {
      cartData.forEach((item) => {
        count += item.count
      })
      setItemCount(count)
    }
  }, 500)

  return (
    <Link to="/shoppingcart" tabIndex="-1">
      <button className="header-button" tabIndex={5} aria-label="shopping cart" title="Shopping Cart">
        <span className="ui-svg">
          <svg className="icon-cart"></svg>
        </span>
        <span>Your Cart</span>
        <span className="header-button-badge">{itemCount}</span>
      </button>
    </Link>
  )
}

export default CartButton
