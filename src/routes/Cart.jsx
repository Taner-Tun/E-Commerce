import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import Total from "../components/Total";
import "../scss/main.scss";

function Cart() {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:4000/data");
  //     const data = await response.json();
  //     console.log(data);
  //     setCart(data.map((item) => ({ ...item, count: 1 })));
  //   } catch (error) {
  //     console.log("Error occurred:", error);
  //   }
  // };

  const fetchData = async () => {
    try {
      const productId = window.location.pathname.split("/").pop();
      const response = await fetch(`http://localhost:4000/data/${productId}`);
      const data = await response.json();
      setCart([{ ...data, count: 1 }]);
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };
  

  const handleItemClick = (index, action) => {
    const updatedCart = [...cart];
    const item = updatedCart[index];
    switch (action) {
      case "+": {
        item.count += 1;
        break;
      }
      case "-": {
        if (item.count > 1) {
          item.count -= 1;
        }
        break;
      }
      case "delete": {
        updatedCart.splice(index, 1);
        break;
      }
      default:
        break;
    }
    setCart(updatedCart);
  };

  useEffect(() => {
    let totalPrice = 0;
    let itemCount = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.count;
      itemCount += item.count;
    });
    setAmount(totalPrice.toFixed(2));
    setItemCount(itemCount);
  }, [cart]);

  const calculateTotalWithShipping = (totalPrice) => {
    const totalNum = Number(totalPrice);
    if (totalNum >= 5000) {
      return totalNum.toFixed(2);
    } else {
      return (totalNum + 0).toFixed(2);
    }
  };

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
          {cart.map((item, index) => (
            <Item
              key={`${item.id}-${index}`}
              itemid={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
              price={item.price}
              count={item.count}
              handleItemClick={(action) => handleItemClick(index, action)}
            />
          ))}
        </div>
        <Total totalprice={calculateTotalWithShipping(amount)} itemCount={itemCount} />
      </div>
    </div>
  );
}

export default Cart;

