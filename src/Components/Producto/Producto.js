import React, { useContext } from "react";
// import { Card } from 'react-bootstrap/';
import './Producto.css';
import CartButton from "./CartButton";

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function Producto(props) {
  const { datos, handleDelete } = props
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (

    <div className="productoContainer">
      <Card className="cardproduct" >
        <CardMedia
          component="img"
          height="194"
          image={datos.url}
          alt="Paella dish"
        />
        <CardContent>
          <Typography className="productTitle" gutterBottom variant="h5" component="div">
            {datos.name.toUpperCase()}
          </Typography>
          <Typography className="productPrice" variant="body2" color="text.secondary">
            ${datos.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        
        <CartButton producto={datos} />
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
      </Card>

    </div>










    //   <div className="productoContainer">
    //     <Card className="cardproduct" >
    //       {/* <ProductToolBar handleDelete={handleDelete} datos={datos} /> */}
    //       <Card.Img variant="top" src={datos.url} />
    //       <Card.Body>
    //         <Card.Title className="productTitle">{datos.name.toUpperCase()}</Card.Title>
    //         <Card.Text className="productPrice">${datos.price}<CartButton producto={datos} />
    //         </Card.Text>

    //       </Card.Body>
    //     </Card>

    //   </div>

  )
};
export default Producto;