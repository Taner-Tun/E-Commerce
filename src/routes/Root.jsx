import {Outlet} from "react-router-dom"
import Navigation from "../components/Navigation"
import Header from "../components/Header"

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default RootLayout
