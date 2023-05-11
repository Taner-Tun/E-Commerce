// import React from "react"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

import {doc} from "prettier"

import Home from "./routes/Home"
import Contact from "./routes/Contact"
import Cart from "./routes/Cart"
import Cheese from "./routes/Cheese"
import Meat from "./routes/Meat"
import Wine from "./routes/Wine"

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route path="/cheese" element={<Cheese />}></Route>
    <Route path="/meat" element={<Meat />}></Route>
    <Route path="/wine" element={<Wine />}></Route>
  </Route>
)

const router = createBrowserRouter(routeDefinitions)

function App() {
  return <RouterProvider router={router} />
}

export default App
