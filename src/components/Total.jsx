import React, { useState } from "react";
import "../scss/main.scss";

function Total({ totalprice }) {
  const [orderCompleted, setOrderCompleted] = useState(false);

  const handleCompleteOrder = () => {
   
    setOrderCompleted(true);
  };

  return (
    <div className="checkout">
      <h1>Amount</h1>
      <div className="money">
        <h4>{totalprice}</h4>
        <p>kr</p>
      </div>
      <button onClick={handleCompleteOrder}>Complete Order</button>
      {orderCompleted ? (
        <p className="success-message">Order completed successfully!</p>
      ) : totalprice >= 300 ? (
        <p className="description">Free Delivery</p>
      ) : (
        <p className="description">
          If you order more than 300 kr, free delivery
        </p>
      )}
      <div className="cargo">
        <div className="cargoamount">
          <p>Cargo</p>
          <p className="freeshipping">Free Delivery</p>
          <p className="cargoamountkr">300 kr</p>
        </div>
        <div className="ordertotal">
          <p>Products</p>
          <p className="orderamount">{totalprice} kr</p>
        </div>
      </div>
    </div>
  );
}

export default Total;

