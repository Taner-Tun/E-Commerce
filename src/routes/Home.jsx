import React from "react";
import Item from "../components/Item";
import Footer from '../components/Footer';
import "../scss/main.scss";

function Home() {
  
  return (
    <div className="main-container">
      <h1>Main Page</h1>
      {/* Your main page content... */}
      <Footer />
    </div>
  );
}

export default Home;
