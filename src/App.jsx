import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {doc} from "prettier"
import RootLayout from "./routes/Root"
import Contact from "./routes/Contact"
import ShoppingCart from "./routes/ShoppingCart"
import Products from "./routes/Products"
import ErrorPage from "./routes/Error"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/shoppingcart/:id" element={<ShoppingCart />} />
          <Route path="/" element={<Products />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
