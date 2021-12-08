import React from "react";
import IconButton from '@mui/material/IconButton';
import { useState, useContext } from 'react';
import Tooltip from '@mui/material/Tooltip';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartContext from '../../Context/CartContext';



function CartButton(props) {
    const { producto } = props
    const [cart, setCart, setShow, show, handleCloseCart, handleShowCart, addToCart,] = useContext(CartContext);
    const handleClick = () => {
        addToCart(producto)
        handleShowCart()
    }

    return (
        <Tooltip title="Agregar al carrito" enterDelay={500} leaveDelay={200}>
            <IconButton sx={{ color: 'grey' }} onClick={handleClick} enterDelay={500} leaveDelay={200}>
                <AddShoppingCartIcon />
            </IconButton>
        </Tooltip>
    )
}
export default CartButton
