import {Link} from "react-router-dom"

import {Fragment} from "react"

function MainNavigation() {
  return (
    <Fragment>
      <nav className="nav-container">
        <ul>
          <li>
            <Link to="/" tabIndex={2} aria-label="Home" title="Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" tabIndex={3} aria-label="Products" title="Products">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" tabIndex={4} aria-label="Contact Us" title="Contact Us">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}
export default MainNavigation
