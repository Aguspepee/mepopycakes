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

function Producto(props) {
  const { datos, handleDelete } = props

  const handleClick = () => {
    console.log("handleClick")
  }

  return (
    <Card className="cardproduct" >
      <ImageListItemBar
        sx={{
          background:
            'rgba(0,0,0,0) 100%',
        }}

        position="top"
        actionIcon={
          <>
            <Tooltip title="Editar" enterDelay={500} leaveDelay={200}>
              <IconButton sx={{ color: 'white' }} enterDelay={500} leaveDelay={200}>
                <Link to={"/producto/" + datos.id}><EditIcon sx={{ color: 'white' }} /></Link>
              </IconButton>
            </Tooltip>
            <Tooltip title="Borrar" enterDelay={500} leaveDelay={200}>
              <IconButton sx={{ color: 'white' }} enterDelay={500} leaveDelay={200}>
                <DeleteOutlineIcon onClick={() => handleDelete(datos.id)} />
              </IconButton>
            </Tooltip>
          </>
        }
        actionPosition="right"
      />


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