import React, { useState, useEffect, useContext } from "react";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../Context/CartContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    
  },
}));



export default function CartNumber() {
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
  const handleClick = () => {
    handleShowCart()
  }

  return (
    <IconButton aria-label="cart">
      <StyledBadge onClick={handleClick} badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}