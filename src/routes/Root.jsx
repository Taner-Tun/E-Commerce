import {Outlet} from "react-router-dom"
import Navigation from "../components/Navigation"
import Header from "../components/Header"

function RootLayout() {
  return (
    <>
      <Header />
      {/* <Navigation /> */}
      <Outlet />
    </>
  )
}

export default RootLayout
