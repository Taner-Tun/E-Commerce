import React from "react"
import Item from "../components/Item"
import Footer from "../components/Footer"
import FilterProductMenu from "../components/FilterProductMenu"
import "../scss/main.scss"

function Home() {
  return (
    <div className="main-container">
        <FilterProductMenu />
      <div className="content-box">
      <h1>Main Page</h1>
      {/* Your main page content... */}
      <main></main>
      <Footer />
      </div>
    </div>
  )
}

export default Home
