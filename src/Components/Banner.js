import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import g869 from '../Images/banner.jpg';
import './Banner.css';

function Banner() {
  return (

      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={g869}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>



  );
};

export default Banner