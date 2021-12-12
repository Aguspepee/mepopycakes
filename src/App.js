import './App.css';
import Menu from './Components/Menu.js';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import AltaProductoPage from './Pages/AltaProductoPage';
import EditarProductoPage from './Pages/EditarProductoPage';
import DetallePage from './Pages/DetallePage';
import AuthProvider from './Context/AuthProvider';
import CartProvider from './Context/CartProvider';
import Footer from './Components/Footer';
import Cart from './Components/Cart/Cart';
import { Container } from 'react-bootstrap';
import LoginMenu from './Components/LoginMenu';
import 'semantic-ui-css/semantic.min.css'


function App() {
    return (

        <>

            <AuthProvider>
                <CartProvider>
                    <Cart/>
                    <BrowserRouter>

                        <Menu />
                        <Routes>
                            <Route path="mepopycakes/" element={<HomePage />} />
                            <Route path="mepopycakes/LoginPage" element={<LoginPage />} />
                            <Route path="mepopycakes/RegisterPage" element={<RegisterPage />} />
                            <Route path="mepopycakes/AltaProductoPage" element={<AltaProductoPage />} />
                            <Route path="mepopycakes/EditarProductoPage" element={<EditarProductoPage />} />
                            <Route path="mepopycakes/producto/:id" element={<DetallePage />} />
                        </Routes>

                    </BrowserRouter>
                    <Footer />
                </CartProvider>
            </AuthProvider>
            </>

    );
}

export default App;
