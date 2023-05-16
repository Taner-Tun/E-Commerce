import React from "react"
import "../scss/main.scss"
import "./carditems.css"

function Card_Items(props) {
  return (
    <div className="card-container">
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <p>{props.category}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default Card_Items
