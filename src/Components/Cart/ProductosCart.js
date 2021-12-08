import React, { useState, useEffect, useContext } from "react";
import ProductoCart from './ProductoCart';
import CartContext from '../../Context/CartContext';

function ProductosCart() {
    const [cart, setCart, setShow, show, handleCloseCart, handleShowCart, addToCart,] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr.price), 0);
    return (
        <div className="App">
            <h6>Estás a un paso de recibir tus delicias!</h6>
            
            {cart.map(productos => (<ProductoCart datos={productos} />))}
            _______________________________________
            <h6>Total: $ {totalPrice}</h6> 
            {console.log(cart)}
        </div>
    )
}

export default ProductosCart