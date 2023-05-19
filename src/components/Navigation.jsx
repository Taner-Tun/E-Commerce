import {Link} from "react-router-dom"

import {Fragment} from "react"

function MainNavigation() {
  return (
    <Fragment>
      <nav className="nav-container">
        <ul>
          <li>
            <Link to="/" tabIndex={2}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" tabIndex={3}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" tabIndex={4}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}
export default MainNavigation
