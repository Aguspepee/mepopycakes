import imagen from '../Images/banner/imagen.svg';
import texto from '../Images/banner/texto.svg';
import lateral from '../Images/banner/lateral.svg';
import './Banner.css';


function Banner() {
  return (
    <div className='grid'>
      <div>
        <img
          className="texto"
          src={texto}
          alt="First slide"
        />
      </div>
      <div>
        <img
          className="imagen"
          src={imagen}
          alt="First slide"
        />
      </div>
      <div className="lateral">
        <img
          
          src={lateral}
          alt="First slide"
        />
      </div>
    </div>
  );
};

export default Banner