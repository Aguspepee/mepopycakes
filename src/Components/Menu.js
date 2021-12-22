import { Navbar, Container, Nav } from 'react-bootstrap';
import AuthContext from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import CartNumber from './Cart/CartNumber';
import { StickyNav } from 'react-js-stickynav';
import 'react-js-stickynav/dist/index.css';
import './Menu.css';
import Logo from './Logo/Logo';


function Menu() {


  return (
    <div >
      
      <AuthContext.Consumer>
      
        {
          context =>
          <>

          <StickyNav length='40'>
              
              <Navbar className="navmenu" expand="lg" position="static">
              
                <Navbar.Brand href="/mepopycakes/">
                  <Logo/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                  
                  <Navbar.Collapse  className="navcollapse">
                    <Nav
                      
                    >
                      <Nav.Link as={Link} to="mepopycakes/">Home</Nav.Link>
                      {
                        context.userLogin &&
                        <>
                          <Nav.Link as={Link} to="mepopycakes/AltaProductoPage">Alta Producto</Nav.Link>
                          <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                        </>
                      }
                      {
                        !context.userLogin &&
                        <>
                          <Nav.Link as={Link} to="mepopycakes/LoginPage">Login</Nav.Link>
                          <Nav.Link as={Link} to="mepopycakes/RegisterPage">Registrarse</Nav.Link>
                        </>
                      }
                    </Nav>
                    <CartNumber />
                  </Navbar.Collapse>
              </Navbar>
            </StickyNav>
          </>
            
        }
      </AuthContext.Consumer>
    </div>
  );
}
export default Menu