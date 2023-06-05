import React from "react"
import "../scss/main.scss"

function Item({itemid, image, title, category, description, price, count, handleItemClick}) {
  const totalPrice = (price * count).toFixed(2)

  const imageLocation = `/src/assets/images/products/${image}`

  return (
    <div className="CartItem" id={itemid} key={itemid}>
      <img src={imageLocation} alt={title} />
      <div className="details">
        <h4>{title}</h4>
        <h6>{category}</h6>
        <h4>{description}</h4>
        <h5>{price} kr /each</h5>
        <h2>
          {totalPrice} <p>kr</p>
        </h2>
        <div className="deleteFromCart">
          <button className="delete" onClick={() => handleItemClick("delete")}>
            Delete
          </button>
        </div>
      </div>
      <div className="quantity">
        <button className="plus" onClick={() => handleItemClick("+")}>
          +
        </button>
        <p className="amount">{count}</p>
        <button className="minus" onClick={() => handleItemClick("-")}>
          -
        </button>
      </div>
    </div>
  )
}

export default Item
