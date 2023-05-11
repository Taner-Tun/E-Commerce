// import React from "react"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import {doc} from "prettier"
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import Cart from "./routes/Cart"
import Cheese from "./routes/Cheese"
import Meat from "./routes/Meat"
import Wine from "./routes/Wine"

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/Contact", element: <Contact />},
  {path: "/Cart", element: <Cart />},
  {path: "/Cheese", element: <Cheese />},
  {path: "/Meat", element: <Meat />},
  {path: "/Wine", element: <Wine />},
])

function App() {
  return <RouterProvider router={router} />
}

export default App
