import {Link} from "react-router-dom"

function MainNav() {
  return (
    <nav>
      <div className="logo"></div>
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
  )
}
export default MainNav
