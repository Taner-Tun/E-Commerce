import React from "react"
import "../scss/main.scss"

function Total({totalprice}) {
  return (
    <div className="checkout">
      <h1>Summa</h1>
      <div className="money">
        <h4>{totalprice}</h4>
        <p>kr</p>
      </div>
      <button>Complete Order</button>
      {totalprice >= 5000 ? <p className="description">Gratis frakt</p> : <p className="description">Om du beställer mer än 5000 kr fraktfritt</p>}
      <div className="cargo">
        <div className="cargoamount">
          <p>Cargo</p>
          <p className="freeshipping">Fri frakt</p>
          <p className="cargoamountkr">5000 kr</p>
        </div>
        <div className="ordertotal">
          <p>Produkter</p>
          <p className="orderamount">{totalprice} kr</p>
        </div>
      </div>
    </div>
  )
}

export default Total
