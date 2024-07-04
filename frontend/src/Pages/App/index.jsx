import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './../../Routes';
import Navbar from '../../Components/Navbar';
import ModalCart from '../../Components/ModalCart';
import Footer from "./../../Components/Footer"
import './App.css';

const App = () => {

    return (
        <BrowserRouter>
            <AppRoutes />
            <Navbar />
            <Footer />
            <ModalCart />
        </BrowserRouter>
    );
};

export default App;
