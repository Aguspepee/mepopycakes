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
    <div>
      <AuthContext.Consumer>
        {
          context =>
            <>
              <StickyNav length='30'>
                <Navbar className="navmenu" expand="lg" position="static">
                  <Navbar.Brand href="/mepopycakes/">
                    <Logo />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="offcanvasNavbar" />
                  <Navbar.Collapse className="navcollapse">
                    <Nav 
                    >
                      <Nav.Link className='menuButton' as={Link} to="mepopycakes/">HOME</Nav.Link>
                      {
                        context.userLogin &&
                        <>
                          <Nav.Link className='menuButton' as={Link} to="mepopycakes/AltaProductoPage">ALTA PRODUCTO</Nav.Link>
                          <Nav.Link className='menuButton' onClick={context.logoutUser}>SALIR</Nav.Link>
                        </>
                      }
                      {
                        !context.userLogin &&
                        <>
                          <Nav.Link className='menuButton' as={Link} to="mepopycakes/LoginPage">LOGIN</Nav.Link>
                          <Nav.Link className='menuButton' as={Link} to="mepopycakes/RegisterPage">REGISTRARSE</Nav.Link>
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