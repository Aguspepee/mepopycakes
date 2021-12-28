import React, { setState, useState } from "react";
import './Quantity.css';
import { useContext } from "react";
import CartContext from '../../Context/CartContext';

function Quantity(props) {
  const producto = props.producto
  const [cart,
    setCart,
    setShowCart,
    show,
    handleCloseCart,
    handleShowCart,
    addToCart,
    deleteFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity] = useContext(CartContext);

  const [quantity, setQuantity] = useState(producto.quantity);

  const increment = () => {
    incrementQuantity(producto)
    setQuantity(cart.find(cart=>cart.id==producto.id).quantity)
  }

  const decrement = () => {
    decrementQuantity(producto)
    setQuantity(cart.find(cart=>cart.id==producto.id).quantity)
  }


  return (

    <div className="quantity-input">
      <button className="quantity-button" onClick={decrement}>-</button>
      <input className="quantity-number" type="text" value={quantity} readonly />
      <button className="quantity-button" onClick={increment}>+</button>
    </div>
  );
}

export default Quantity