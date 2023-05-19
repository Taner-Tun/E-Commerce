import {Fragment} from "react"
import {Link} from "react-router-dom"

import "../scss/main.scss"

import CartButton from "./CartButton"
import Navigation from "./Navigation"

const Header = (props) => {
  return (
    <Fragment>
      <header className="header-container">
        <Link className="header-logo-button" to="/" alt="Jensen Deli" title="Jensen Deli" tabIndex={1} aria-label="Jensen Deli">
          <svg className="icon-logo">
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
