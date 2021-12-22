import { Card, Button } from 'react-bootstrap/';
import g869 from '../Images/featured.jpeg';

function Featured() {
  return (
    <Card data-aos="fade-up" className="text-center">
      <Card.Header>Ofertas</Card.Header>
      <Card.Body>
        
        <Card.Title>Los productos destacados</Card.Title>
        <Card.Text>
        <img
          className="d-block w-100"
          src={g869}
          alt="First slide"
          
        />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default Featured;