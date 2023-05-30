import React, {useState} from "react"
import "../scss/main.scss"

function ItemProduct({itemid, image, title, category, description, price, count, handleItemClick}) {
  // const [buttonView, setButtonView] = useState("add"); // State variable for button view
  const [quantity, setQuantity] = useState(count) // State variable for quantity
  const totalPrice = (price * quantity).toFixed(2)

  // const handleButtonClick = () => {
  //   if (buttonView === "add") {
  //     setButtonView("quantity");
  //     handleItemClick("add");
  //   }
  // };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1)
  }

  const imageLocation = `/src/images/products/${image}`

  return (
    <div className="CartItem" id={itemid}>
      <img src={imageLocation} alt={title} />
      <div className="details">
        <h4>{title}</h4>
        <h6>{category}</h6>
        <h4>{description}</h4>
        <h2>{price} kr</h2>
        {/* {buttonView === "add" ? (
          <button className="add" onClick={handleButtonClick}>
            Add to Cart
          </button>
        ) : ( */}
        <button className="add" onClick={() => handleItemClick("add")}>
          Add to Cart
        </button>
        {/* <div className="quantity">
            <button className="decrement" onClick={handleDecrement}>
              -
            </button>
            <p className="amount">{quantity}</p>
            <button className="increment" onClick={handleIncrement}>
              +
            </button>
          </div> */}
      </div>
    </div>
  )
}

export default ItemProduct
