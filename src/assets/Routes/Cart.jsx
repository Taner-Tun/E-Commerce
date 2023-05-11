import React, {useState, useEffect} from "react"
import Item from "../../Item"
import Total from "../../Total"
import "../../App.css"

function Cart() {
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
        getItems()
      } catch (error) {
        console.log("Error occurred:", error)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      <div className="test">
        <h1 className="Cart">
          Shopping Cart <p>{cart.length}</p>
        </h1>
        <h4>Products</h4>
      </div>
      <div className="main">
        <div className="itemList">
          {cart.map((item) => (
            <Item key={item.id} itemid={item.id} image={item.image} title={item.title} category={item.category} price={item.price} />
          ))}
        </div>

        {(() => {
          let amount = 0
          cart.forEach((item) => {
            amount = amount + item.price
          })
          return <Total totalprice={amount.toFixed(2)} />
        })()}
      </div>
    </div>
  )
  function getItems() {
    const cartItems = document.querySelectorAll(".CartItem")
    cartItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        switch (e.target.textContent) {
          case "+": {
            const countElement = item.querySelector(".amount")
            let count = parseInt(countElement.textContent)
            const productPrice = parseFloat(item.querySelector(".details h2").textContent)
            count++
            countElement.textContent = count.toString()

            item.querySelector(".amount").textContent = count.toString()
            item.querySelector(".details h5").textContent = (productPrice * count).toFixed(2) + " kr"

            const tPrice = parseFloat(document.querySelector(".checkout h4").textContent)
            const cargoFreePrice = tPrice + productPrice * count
            if (cargoFreePrice > 5000) {
              document.querySelector(".freeshipping").classList.add("visible")
              document.querySelector(".cargoamountkr").classList.add("cargopricedelete")
            } else {
              document.querySelector(".freeshipping").classList.remove("visible")
              document.querySelector(".cargoamountkr").classList.remove("cargopricedelete")
            }

            document.querySelector(".checkout h4").textContent = (tPrice + productPrice * 1).toFixed(2)
            document.querySelector(".orderamount").textContent = document.querySelector(".checkout h4").textContent + " kr"
            break
          }
          case "-": {
            const countElement = item.querySelector(".amount")
            let count = parseInt(countElement.textContent)
            if (count !== 1) {
              const productPrice = parseFloat(item.querySelector(".details h2").textContent)
              count--
              if (count < 2) {
                item.querySelector(".delete").classList.add("visible")
              }
              countElement.textContent = count.toString()
              item.querySelector(".details h5").textContent = (productPrice * count).toFixed(2) + " kr"

              const tPrice = parseFloat(document.querySelector(".checkout h4").textContent)
              const cargoFreePrice = tPrice - productPrice * count
              if (cargoFreePrice < 500) {
                document.querySelector(".freeshipping").classList.add("visible")
                document.querySelector(".cargoamountkr").classList.add("cargopricedelete")
              } else {
                document.querySelector(".freeshipping").classList.remove("visible")
                document.querySelector(".cargoamountkr").classList.remove("cargopricedelete")
              }

              document.querySelector(".checkout h4").textContent = (tPrice - productPrice * 1).toFixed(2)
              document.querySelector(".orderamount").textContent = document.querySelector(".checkout h4").textContent + " kr"
            }
            break
          }
          case "delete": {
            const item = cartItems[index]
            const productPrice = parseFloat(item.querySelector(".details h2").textContent)
            const totalPriceElement = document.querySelector(".checkout h4")
            const tPrice = parseFloat(totalPriceElement.textContent)

            totalPriceElement.textContent = (tPrice - productPrice).toFixed(2)
            document.querySelector(".orderamount").textContent += " kr"

            const cartItem = cartItems[index]
            cartItem.style.animation = "removeanimation 0.5s ease"

            cartItem.addEventListener("animationend", () => {
              cartItem.remove()
              document.querySelector(".mycart p").textContent = itemCount.toString()
            })
            break
          }
        }
      })
    })
  }
}

export default Cart
