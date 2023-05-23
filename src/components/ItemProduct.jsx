import React from "react"
import "../scss/main.scss"

function ItemProduct({itemid, image, title, category, description, price, count, handleItemClick}) {
  const totalPrice = (price * count).toFixed(2)

  return (
    <div className="CartItem" id={itemid}>
      <img src={image} alt={title} />
      <div className="details">
        <h4>{title}</h4>
        <h6>{category}</h6>
        <h4>{description}</h4>
        <h2>{price} kr</h2>
        <button className="add" onClick={() => handleItemClick("add")}>
          Add to Cart
        </button>
      </div>
      <div className="quantity">
        <p className="amount">{count}</p>
      </div>
    </div>
  )
}

export default ItemProduct
