import { Card, Button } from 'react-bootstrap/';
import promo from '../Images/promo.svg';

function Featured() {
  return (
    <Card data-aos="fade-up" className="text-center">
      <Card.Header>Ofertas</Card.Header>
      <Card.Body>
        <Card.Title>Los productos destacados</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default Featured;