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
        //Si ya está en el carrito incrementa la cantidad
        if (cart.find(cart => cart.id == producto.id)) {
            cart[cart.findIndex(cart => cart.id == producto.id)].quantity++
            //Si no está en el carrito lo agrega
        } else {
            setCart(cart => [{ ...producto, quantity: 1 }, ...cart])
            console.log(JSON.stringify(cart))
        }
    }

    //Incrementar cantidad de producto
    const incrementQuantity = (producto) => {
        console.log("funcionaaaaaa")
        //Si ya está en el carrito incrementa la cantidad
        if (cart.find(cart => cart.id == producto.id)) {
            cart[cart.findIndex(cart => cart.id == producto.id)].quantity++
        }
    }

    //Decrementar cantidad de producto
    const decrementQuantity = (producto) => {
        //Si ya está en el carrito decrementa la cantidad
        if (cart.find(cart => cart.id == producto.id)) {
            if (cart[cart.findIndex(cart => cart.id == producto.id)].quantity > 1) {
                cart[cart.findIndex(cart => cart.id == producto.id)].quantity--
            } else {
                deleteFromCart(producto.id)
            }
        }
    }

    //Eliminar del carrito de compras
    const deleteFromCart = (producto) => {
        setCart(cart.filter(cart => cart.id !== producto))
        console.log("Eliminar del carrito", producto)
        console.log("Carrito", cart)
    }

    //Limpiar carrito de compras
    const clearCart = () => {
        setCart([])
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
            clearCart,
            incrementQuantity,
            decrementQuantity]}>
            {porps.children}
        </CartContext.Provider>
    )
}
export default CartProvider