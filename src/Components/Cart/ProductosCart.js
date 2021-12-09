import React, { useState, useEffect, useContext } from "react";
import ProductoCart from './ProductoCart';
import CartContext from '../../Context/CartContext';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';


function ProductosCart() {
    const [cart, setCart, setShow, show, handleCloseCart, handleShowCart, addToCart,] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr.price), 0);
    return (
        <>
            <h6>Estás a un paso de recibir tus delicias!</h6>

            <List>
                {cart.map(productos => (
                    <>
                        <ListItem>
                            <ProductoCart datos={productos} />

                        </ListItem>
                        
                    </>


                ))}

            </List>






            <h6>Total: $ {totalPrice}</h6>
            {console.log(cart)}

        </>


    )
}

export default ProductosCart