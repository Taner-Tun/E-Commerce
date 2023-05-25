// import MainNav from "../components/MainNav"

import {Link} from "react-router-dom"

function ErrorPage() {
  return (
    <>
      {/* <MainNav /> */}
      <main>
        <h1>An error has occured!</h1>
        <p>
          Could not find this page. Click on the following link to go back to the{" "}
          <Link to="/" style={{color: "red"}}>
            start page
          </Link>
        </p>
      </main>
    </>
  )
}

export default ErrorPage
