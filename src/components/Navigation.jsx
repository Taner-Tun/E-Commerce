import {Link} from "react-router-dom"

import ErrorBoundary from "./ErrorBoundary"

function MainNavigation() {
  return (
    <ErrorBoundary>
      <nav className="nav-container">
        <ul>
          Links:
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Shopping Cart</Link>
          </li>
        </ul>
      </nav>
    </ErrorBoundary>
  )
}
export default MainNavigation
