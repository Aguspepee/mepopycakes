import React, {useContext } from "react";
import ProductoCart from './ProductoCart';
import CartContext from '../../Context/CartContext';
import { Item} from 'semantic-ui-react';




function ProductosCart() {
    const [cart, setCart, setShow, show, handleCloseCart, handleShowCart, addToCart, deleteFromCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr.price), 0);
    
    return (
        <>
            <Item.Group divided>
                {cart.map(productos => (
                    <>
                        <Item>
                            <ProductoCart datos={productos} />
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