import {Fragment} from "react"
import {Link} from "react-router-dom"
import "../scss/main.scss"
import CartButton from "./CartButton"
import Navigation from "./Navigation"
import Hamburger from "./Hamburger"

const Header = () => {
  return (
    <Fragment>
      <header className="header-container background">
        <div className="header-wrapper">
          <Link className="header-logo-button" to="/" alt="Jensen Deli" title="Jensen Deli" tabIndex={1} aria-label="Jensen Deli Logo">
            <div className="icon-logo "></div>
          </Link>
          <CartButton />
          <Navigation />
          <Hamburger />
        </div>
      </header>
    </Fragment>
  )
}

export default Header
