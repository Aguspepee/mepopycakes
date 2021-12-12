import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState, useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StepperCart from './StepperCart';
import CartContext from '../../Context/CartContext';
import CartNumber from './CartNumber';
import './Cart.css';


function Cart() {

  const [cart, setCart, setShow, show, handleCloseCart, handleShowCart] = useContext(CartContext);
  

  return (
    <>
      <Offcanvas className="cart" show={show} onHide={handleCloseCart} placement="end" scroll="true">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CARRITO DE COMPRAS <CartNumber /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
         
          <StepperCart />

          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart