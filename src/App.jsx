import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

import {doc} from "prettier"

import RootLayout from "./routes/Root"
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import Cart from "./routes/Cart"
import Products from "./routes/Products"
import ErrorPage from "./routes/Error"

const routeDefinitions = createRoutesFromElements(
  <Route>
    {/* RootLayout is the parent element */}
    <Route path="/" element={<RootLayout errorElement={<ErrorPage />} />}>
      {/* These elements are children of RootLayout */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/products" element={<Products />}></Route>
    </Route>
  </Route>
)

const router = createBrowserRouter(routeDefinitions)

function App() {
  return (
    <>
      <div className="test">Test</div>
      <RouterProvider router={router} />
    </>
  )
}

export default App
