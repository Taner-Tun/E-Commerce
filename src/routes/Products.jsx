
//    }

//  export default Products

import React, { useState, useEffect } from "react";
import ItemProduct from "../components/ItemProduct";
import Footer from "../components/Footer";
import "../scss/main.scss";

function Products() {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [filteredCart, setFilteredCart] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/data");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      console.log(data);
      setCart(data.map((item) => ({ ...item, count: 1 })));
    } catch (error) {
      console.log("Error occurred:", error);
      setCart([]);
    }
  };

  const handleItemClick = (selectedProduct, action) => {
    switch (action) {
      case "add": {
        window.location.href = `/cart/${selectedProduct.itemid}`;
        break;
      }
      default:
        break;
    }
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

  useEffect(() => {
    const filteredItems = cart.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCart(filteredItems);
  }, [cart, searchText]);

  useEffect(() => {
    const filteredItems = cart.filter((item) =>
      item.category.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCart(filteredItems);
  }, [cart, searchText]);


  useEffect(() => {
    let sortedAndFilteredCart = [...cart];
  
    if (sortBy === "price") {
      sortedAndFilteredCart.sort((a, b) => a.price - b.price);
    } else if (sortBy === "title") {
      sortedAndFilteredCart.sort((a, b) => a.title.localeCompare(b.title));
    }
  
    if (filterBy) {
      sortedAndFilteredCart = sortedAndFilteredCart.filter(
        (item) => item.category === filterBy
      );
    }
  
    setFilteredCart(sortedAndFilteredCart);
  }, [cart, sortBy, filterBy]);
  
  return (
    <>
      <div className="test">
        <h1 className="Cart">
          Products Page <p>{filteredCart.length}</p>
        </h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search products"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="filter-sort">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sort By</option>
            <option value="price">Price</option>
            <option value="title">Title</option>
          </select>
  
          <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
            <option value="">Filter By Category</option>
            <option value="wine">Wine</option>
            <option value="cheese">Cheese</option>
            <option value="meat">Meat</option>
          </select>
        </div>
      </div>
      <div className="product-container">
        {filteredCart.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredCart.map((item, index) => (
            <ItemProduct
              key={item.itemid}
              itemid={item.itemid}
              image={item.image}
              title={item.title}
              category={item.category}
              description={item.description}
              price={item.price}
              count={item.count}
              handleItemClick={(action) => handleItemClick(item, action)}
            />
          ))
        )}
      </div>
      <Footer />
    </>
  );

}

  export default Products