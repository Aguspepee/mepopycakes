import React, { useContext } from "react";
import { Card } from 'react-bootstrap/';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import './Producto.css';
import CartButton from "./CartButton";
import ProductToolBar from "./ProductToolBar";

function Producto(props) {
  const { datos, handleDelete } = props

  return (
    <Card className="cardproduct" >
      <ProductToolBar handleDelete={handleDelete} datos={datos} />
      <Card.Img variant="top" src={datos.url} />
      <Card.Body>
        <Card.Title>{datos.name}</Card.Title>
        <Card.Text>
          ${datos.price} <CartButton producto={datos} />
        </Card.Text>
        
      </Card.Body>
    </Card>
  )
};
export default Producto;