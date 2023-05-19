import {Link} from "react-router-dom"

import "../scss/main.scss"

const CartButton = (props) => {
  return (
    <Link to="/cart" tabindex="-1">
      <button className="header-button" tabIndex={5} aria-label="shopping cart" title="Shopping Cart">
        <span className="ui-svg">
          <svg className="icon-cart"></svg>
        </span>
        <span>Your Cart</span>
        <span className="header-button-badge">3</span>
      </button>
    </Link>
  )
}

export default CartButton
