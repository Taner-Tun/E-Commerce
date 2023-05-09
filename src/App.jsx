import React, {useState, useEffect} from "react"

import "./App.css"
import Item from "./item"
import Total from "./Total"

function App() {
  const [cart, setCart] = useState([])
  const amount = 0
  const itemCount = 0

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=15")
        const data = await response.json()
        console.log(data)
        setCart(data)
        getItems();
      } catch (error) {
        console.log("Error occurred:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div>
        <div className="test">
        <h1 className="Cart">
          Shopping Cart <p>{cart.length}</p>
        </h1>
        <h4>Products</h4>
        </div>
     <div className="main">
        {/* <div className="itemList">{cart.map((item) => item.price)}</div> */}
        <div className="itemList">
          {cart.map((item) => (
            <Item key={item.id} itemid={item.id} image={item.image} title={item.title} category={item.category} price={item.price} />
          ))}
          </div>
       
        {/* {
        (cart.forEach((item) => (amount=amount+item.price)),
         (<Total totalprice={amount.toFixed(2)} /> ))
        } */}

        {(() => {
          let amount = 0
          cart.forEach((item) => {
            amount = amount + item.price
          })
          return <Total totalprice={amount.toFixed(2)} />
        })()}
      </div>
      </div>
    </>
  )
  function getItems() {
    const cartItems = document.querySelectorAll(".CartItem");
    cartItems.forEach((item) => {
      const deleteButton = item.querySelector(".delete");
      deleteButton.classList.add("visible");
    });
  }

 }
export default App
