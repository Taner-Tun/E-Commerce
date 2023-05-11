import React from "react"
import "./item.css"

function Item({itemid, image, title, category, price}) {
  // const p = 0;
  // p = price;
  return (
    <div className="CartItem" id={itemid}>
      <img src={image} />
      <div className="details">
        <h4>{title}</h4>
        <h6>{category}</h6>
        <h5>
          {price} <p>kr</p>
        </h5>
        <h2>{price}</h2>
        <button className="delete">Radera</button>
      </div>
      <div className="quantity">
        <button className="plus">+</button>
        <p className="amount">1</p>
        <button className="minus">-</button>
      </div>
    </div>
  )
}

export default Item
