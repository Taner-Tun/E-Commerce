// import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

// import {doc} from "prettier"

// import Header from "./components/Header"

// import RootLayout from "./routes/Root"
// import Home from "./routes/Home"
// import Contact from "./routes/Contact"
// import Cart from "./routes/Cart"
// import Products from "./routes/Products"
// import ErrorPage from "./routes/Error"

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     {/* RootLayout is the parent element */}
//     <Route path="/" element={<RootLayout errorElement={<ErrorPage />} />}>
//       {/* These elements are children of RootLayout */}
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/contact" element={<Contact />}></Route>
//       <Route path="/cart" element={<Cart />}></Route>
//       <Route path="/products" element={<Products />}></Route>
//     </Route>
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions)

// function App() {
//   return (
//     <>
//       {/* <Header /> */}
//       <RouterProvider router={router} />
//     </>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import RootLayout from "./routes/Root";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Cart from "./routes/Cart";
import Products from "./routes/Products";
import ErrorPage from "./routes/Error";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
