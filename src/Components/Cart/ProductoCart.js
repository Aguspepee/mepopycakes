import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ProductoCart.css';
import { useContext } from "react";
import CartContext from '../../Context/CartContext';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ProductoCart(props) {
  const theme = useTheme();
  const { datos } = props
  const [cart, setCart, setShow, show, handleCloseCart, handleShowCart, addToCart, deleteFromCart] = useContext(CartContext);
  const deleteItem = (id) => {
    const producto=id
    deleteFromCart(producto)
  }

  return (
    <Card className="ProductoCart" sx={{ display: 'flex' }}>
      <CardMedia className="ProductoCartImagen"
        component="img"
        sx={{ width: 151 }}
        image={datos.url}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h7">
            {datos.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            ${datos.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <Tooltip title="Borrar" enterDelay={500} leaveDelay={200}>
          <IconButton sx={{ color: 'gray' }} enterDelay={500} leaveDelay={200}>
            <DeleteOutlineIcon onClick={()=>deleteItem(datos.id)}/>
            
          </IconButton>
        </Tooltip>
        </Box>
      </Box>

    </Card>
  );
}