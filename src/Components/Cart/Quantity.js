import React, { setState, useState } from "react";
import './Quantity.css';

function Quantity(props) {

  const [quantity, setQuantity] = useState(props.quantity);

  const increment = () => {
    setQuantity(quantity + 1)

  }

  const decrement = () => {
    setQuantity(quantity - 1)
  }


  return (

      <div className="quantity-input">
        <button className="quantity-button" onClick={decrement}>
          -
        </button>
        <input className="quantity-number" type="text" value={quantity} readonly />
        <button className="quantity-button" onClick={increment}> +
        </button>
      </div>
  );
}

export default Quantity