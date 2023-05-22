import {Fragment} from "react"
import {Link} from "react-router-dom"

import "../scss/main.scss"

import CartButton from "./CartButton"
import Navigation from "./Navigation"

const Header = (props) => {
  return (
    <Fragment>
      <div>
        <header className="header-container background">
          <div className="header-wrapper">
            <Link className="header-logo-button" to="/" alt="Jensen Deli" title="Jensen Deli" tabIndex={1} aria-label="Jensen Deli">
              <div className="icon-logo "></div>
            </Link>
            <CartButton />
          </div>
          <Navigation />
        </header>
      </div>
    </Fragment>
  )
}

export default Header
