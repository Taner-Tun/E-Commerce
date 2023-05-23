import React, {Fragment} from "react"
import Item from "../components/Item"
import Footer from "../components/Footer"
import "../scss/main.scss"

function Home() {
  return (
    <Fragment>
      <div className="main-container">
        <h1>Main Page</h1>
        {/* Your main page content... */}
        <main>
          <div className="test-image"></div>
        </main>
      <Footer />
      </div>
    </Fragment>
  )
}

export default Home
