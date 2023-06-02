import {Link} from "react-router-dom"
import {Fragment} from "react"

function Hamburger() {
  return (
    <Fragment>
      <nav className="hamburger-wrapper">
        <ul>
          <li>
            <Link to="/" tabIndex={1} aria-label="Products" title="Products">
              Products
            </Link>
          </li>
          <li>
            <Link to="/shoppingcart" tabIndex={2} aria-label="Shopping Cart" title="Shopping Cart">
              Shopping Cart
            </Link>
          </li>
          <li>
            <Link to="/contact" tabIndex={3} aria-label="Contact Us" title="Contact Us">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}
export default Hamburger
