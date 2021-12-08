import { Navbar, Container, Nav } from 'react-bootstrap';
import AuthContext from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import CartNumber from './Cart/CartNumber';
import { StickyNav } from 'react-js-stickynav';
import 'react-js-stickynav/dist/index.css';
import './Menu.css'

function Menu() {


  return (

    <div>

      <AuthContext.Consumer>

        {
          context =>
            <StickyNav length='80'>
              <Navbar className="navmenu" expand="lg">

                <Navbar.Brand href="#home">
                  M.E. Popy Cakes
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link as={Link} to="/">Home</Nav.Link>

                    {
                      context.userLogin &&
                      <>
                        <Nav.Link as={Link} to="/AltaProductoPage">Alta Producto</Nav.Link>
                        <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                      </>
                    }
                    {
                      !context.userLogin &&
                      <>
                        <Nav.Link as={Link} to="/LoginPage">Login</Nav.Link>
                        <Nav.Link as={Link} to="/RegisterPage">Registrarse</Nav.Link>
                      </>
                    }

                  </Nav>
                </Navbar.Collapse>
                <Navbar.Text className="border-left pl-2 ml-auto" >
                  Signed in as: Mark Otto
                </Navbar.Text>
                <CartNumber />
              </Navbar>
            </StickyNav>
        }
      </AuthContext.Consumer>

    </div>


  );
}
export default Menu