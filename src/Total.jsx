import React from "react"
import "./total.css"

function Total({totalprice}) {
  return (
    <div className="checkout">
      <h1>Summa</h1>

      <div className="money">
        <h4>{totalprice}</h4>
        <p>kr</p>
      </div>
      <button>Complete Order</button>
      <p className="description">Om du beställer mer än 4000 kr fraktfritt</p>
      <div className="cargo">
        <div className="cargoamount">
          <p>Cargo</p>
          <p className="freeshipping">Free Deliver</p>
          <p className="cargoamountkr">5000 kr</p>
        </div>
        <div className="ordertotal">
          <p>Products</p>
          <p className="orderamount">{totalprice} kr</p>
        </div>
      </div>
    </div>
  )
}

export default Total
