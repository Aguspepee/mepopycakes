import React, { useState } from "react";
import CartContext from "./CartContext";



function CartProvider(porps) {
    const [cart, setCart] = useState([]);
    const [show, setShowCart] = useState(false);
    

    //Ocultar carrito de compras
    const handleCloseCart = () => {
        setShowCart(false)
        console.log("ocultar carrito", show)
    }

    //Mostrar carrito de compras
    const handleShowCart = () => {
        setShowCart(true)
        console.log("mostrar carrito", show)
    }

    //Añadir al carrito de compras
    const addToCart = (producto) => {
        setCart(cart =>[producto,...cart])
        console.log(cart)
    }

    //Eliminar del carrito de compras
    const deleteFromCart = () => {
        console.log("Eliminar del carrito")
    }

    //Limpiar carrito de compras
    const clearCart = () => {
        console.log("Limpiar carrito")
    }

    return (
        <CartContext.Provider value={[
            cart, 
            setCart, 
            setShowCart, 
            show, 
            handleCloseCart, 
            handleShowCart,
            addToCart,
            deleteFromCart,
            clearCart]}>
            {porps.children}
        </CartContext.Provider>
    )
}
export default CartProvider