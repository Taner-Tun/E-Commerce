import React from 'react';
import "./home.css";

function Card_Items(props) {
    
        return (
          <div className="card-container">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
        );
      };


export default Card_Items
