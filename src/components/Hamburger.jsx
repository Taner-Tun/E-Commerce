import {Link} from "react-router-dom"
import {Fragment, useEffect} from "react"

function Hamburger() {
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

      //Check to see whether toggle works or not
      // console.log(visibility)
    }

    navToggle.addEventListener("click", toggleNavVisibility)

    // Remove the event listener when the component unmounts
    return () => {
      navToggle.removeEventListener("click", toggleNavVisibility)
    }
  }, [])
  return (
    <Fragment>
      <button className="hamburger-toggle" aria-controls="hamburger-wrapper" aria-expanded="false" tabIndex={1}>
        <span className="sr-only">Menu</span>
      </button>
      <nav id="hamburger-wrapper" className="hamburger-wrapper" data-visible="true">
        <ul>
          <li>
            <Link to="/" tabIndex={2} aria-label="Products" title="Products">
              Products
            </Link>
          </li>
          <li>
            <Link to="/shoppingcart" tabIndex={3} aria-label="Shopping Cart" title="Shopping Cart">
              Shopping Cart
            </Link>
          </li>
          <li>
            <Link to="/contact" tabIndex={4} aria-label="Contact Us" title="Contact Us">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}
export default Hamburger
