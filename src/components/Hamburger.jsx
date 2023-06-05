import {Link} from "react-router-dom"
import {Fragment, useEffect, useState} from "react"

function Hamburger() {
  const [menuVisible, setMenuVisible] = useState(false)
  const [overlayVisible, setOverlayVisible] = useState(false)

  useEffect(() => {
    const primaryNav = document.querySelector(".hamburger-wrapper")
    const navToggle = document.querySelector(".hamburger-toggle")

    function toggleNavVisibility() {
      const visibility = primaryNav.getAttribute("data-visible")

      if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
      } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
      }
    }

    navToggle.addEventListener("click", toggleNavVisibility)

    // Remove the event listener when the component unmounts
    return () => {
      navToggle.removeEventListener("click", toggleNavVisibility)
    }
  }, [])

  function handleLinkClick() {
    setMenuVisible(false)
  }

  function toggleMenu() {
    setMenuVisible(!menuVisible)
    setOverlayVisible(!overlayVisible)
  }
  return (
    <Fragment>
      {menuVisible ? <div className="overlay"></div> : null}
      <button
        className="hamburger-toggle"
        onClick={toggleMenu}
        aria-controls="hamburger-wrapper"
        aria-expanded={menuVisible ? "true" : "false"}
        tabIndex={1}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav className="hamburger-wrapper" data-visible={menuVisible ? "true" : "false"}>
        <ul>
          <li>
            <Link to="/" tabIndex={2} aria-label="Products" title="Products" onClick={handleLinkClick}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/shoppingcart" tabIndex={3} aria-label="Shopping Cart" title="Shopping Cart" onClick={handleLinkClick}>
              Shopping Cart
            </Link>
          </li>
          <li>
            <Link to="/contact" tabIndex={4} aria-label="Contact Us" title="Contact Us" onClick={handleLinkClick}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}
export default Hamburger
