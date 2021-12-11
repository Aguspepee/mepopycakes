import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import g869 from '../Images/banner.jpg';
import './Banner.css';
import BasicBreadcrumbs from '../Components/BasicBreadcrumbs';

function Banner() {
  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item>
          
          <img
            className="d-block w-100"
            src={g869}
            alt="First slide"
          />
          <BasicBreadcrumbs className="navegacion"/>
        </Carousel.Item>
      </Carousel>

    </div>




  );
};

export default Banner