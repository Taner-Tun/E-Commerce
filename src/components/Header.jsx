import {Fragment} from "react"
import {Link} from "react-router-dom"

import "../scss/main.scss"

import CartButton from "./CartButton"
import Navigation from "./Navigation"

const Header = (props) => {
  return (
    <Fragment>
      <header className="header-container">
        <Link to="/" alt="Jensen Deli" title="Jensen Deli" tabIndex={-1} disabled>
          <svg className="logo" tabIndex={1}>
            <title>Jensen Deli</title>
          </svg>
        </Link>
        <CartButton />
      </header>
      <Navigation />
    </Fragment>
  )
}

export default Header
