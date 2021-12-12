import React, { useState, useEffect, useContext } from "react";
import ProductoCart from './ProductoCart';
import CartContext from '../../Context/CartContext';
import IconButton from '@mui/material/IconButton';
import { Image, Item, Button } from 'semantic-ui-react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Tooltip from '@mui/material/Tooltip';



function ProductosCart() {
    const [cart, setCart, setShow, show, handleCloseCart, handleShowCart, addToCart,] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr.price), 0);
    return (
        <>


            <Item.Group divided>
                {cart.map(productos => (
                    <>
                        <Item>
                            {/* <ProductoCart datos={productos} /> */}
                            <Item.Image size='tiny' src={productos.url} />
                            <Item.Content>

                                <Item.Header>{productos.name}

                                    <Tooltip title="Borrar" enterDelay={500} leaveDelay={200}>
                                        <IconButton sx={{ color: 'gray' }} enterDelay={500} leaveDelay={200}>
                                            <DeleteOutlineIcon/>
                                        </IconButton>
                                    </Tooltip>

                                </Item.Header>
                                <Item.Meta>
                                    <span className='price'>${productos.price}</span>
                                </Item.Meta>

                            </Item.Content>


                        </Item>

                    </>


                ))}

            </Item.Group>






            <h6>Total: $ {totalPrice}</h6>
            {console.log(cart)}

        </>


    )
}

export default ProductosCart