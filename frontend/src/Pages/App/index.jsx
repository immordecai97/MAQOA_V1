import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './../../Routes';
import Navbar from '../../Components/Navbar';
import ModalCart from '../../Components/ModalCart';
<<<<<<< HEAD
import Footer from "./../../Components/Footer"
=======
>>>>>>> parent of c889430 (navbar)
import './App.css';

const App = () => {

    return (
<<<<<<< HEAD
        <BrowserRouter>
            <AppRoutes />
            <Navbar />
            <Footer />
            <ModalCart />
        </BrowserRouter>
=======
        <ShopMaqoaProvider>
            <BrowserRouter>
                <AppRoutes />
                <Navbar />
                <ModalCart/>
            </BrowserRouter>
        </ShopMaqoaProvider>
>>>>>>> parent of c889430 (navbar)
    );
};

export default App;
