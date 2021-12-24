import imagen from '../Images/banner/imagen.svg';
import texto from '../Images/banner/texto.svg';
import lateral from '../Images/banner/lateral.svg';
import './Banner.css';
import BasicBreadcrumbs from '../Components/BasicBreadcrumbs';


function Banner() {
  return (
    <div className='grid'>
      <div>
        <img
          className="texto"
          src={texto}
          alt="First slide"
        />
{/*         <h2 className='texto'>OBTENÉ</h2>
        <h2 className='texto'>10% OFF</h2>
        <h2 className='texto'>COMPRANDO</h2>
        <h2 className='texto'>EN LA WEB</h2> */}
      </div>
      <div>
        <img
          className="imagen"
          src={imagen}
          alt="First slide"
        />
      </div>
      <div>
        <img
          className="lateral"
          src={lateral}
          alt="First slide"
        />
      </div>
      <BasicBreadcrumbs  />
    </div>
  );
};

export default Banner