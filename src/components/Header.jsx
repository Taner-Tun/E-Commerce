import {Fragment} from "react"
import {Link} from "react-router-dom"

import "../scss/main.scss"

import CartButton from "./CartButton"
import MainNavigation from "./Navigation"

const Header = (props) => {
  return (
    <>
      <Fragment>
        <header className="header-container">
          <Link to="/" alt="Jensen Deli" title="Jensen Deli">
            <svg className="logo">
              <title>Jensen Deli</title>
            </svg>
          </Link>
          <CartButton />
          <MainNavigation />
        </header>
      </Fragment>
    </>
  )
}

export default Header
