import React, {Fragment} from "react"
import Item from "../components/Item"
import Footer from "../components/Footer"
import FilterProductMenu from "../components/FilterProductMenu"
import "../scss/main.scss"

function Home() {
  return (
    <Fragment>
      <div className="main-container">
        <FilterProductMenu />
        <div className="content-box">
          <h1>Main Page</h1>
          {/* Your main page content... */}
          <main>
            <div className="test-image"></div>
          </main>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Home
