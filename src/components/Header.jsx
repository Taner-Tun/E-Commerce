import {Fragment} from "react"
import {Link} from "react-router-dom"
import "../scss/main.scss"
import CartButton from "./CartButton"
import Navigation from "./Navigation"

const Header = () => {
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
      <div className="social-media">
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
  </div>
    </Fragment>
  )
}

export default Header
