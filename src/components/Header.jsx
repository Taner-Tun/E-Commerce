import {Fragment} from "react"
import {Link} from "react-router-dom"

import "../scss/main.scss"

import CartButton from "./CartButton"
import MainNavigation from "./Navigation"

const Header = (props) => {
  return (
    <>
      <Fragment>
        <header className="header">
          <svg className="logo" alt="Jensen Deli" title="Jensen Deli">
            <title>Jensen Deli</title>
          </svg>
          <CartButton />
          <MainNavigation />
        </header>
      </Fragment>
    </>
  )
}

export default Header
