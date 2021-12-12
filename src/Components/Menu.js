import { Navbar, Container, Nav } from 'react-bootstrap';
import AuthContext from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import CartNumber from './Cart/CartNumber';
import { StickyNav } from 'react-js-stickynav';
import 'react-js-stickynav/dist/index.css';
import './Menu.css';
import LoginMenu from './LoginMenu';


function Menu() {


  return (
    <div >
      
      <AuthContext.Consumer>
      
        {
          context =>
          <>

          <StickyNav length='40'>
              
              <Navbar className="navmenu" expand="xlg" position="static">
              
                <Navbar.Brand href="#home">
                  M.E. Popy Cakes
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="start"
                >

                  <Navbar.Collapse  className="navcollapse">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
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
                  </Navbar.Collapse>
                  <Navbar.Text className="border-left pl-2 ml-auto" >
                    Signed in as: Mark Otto
                  </Navbar.Text>
                  <CartNumber />
                </Navbar.Offcanvas>
              </Navbar>
            </StickyNav>
          </>
            
        }
      </AuthContext.Consumer>
    </div>
  );
}
export default Menu