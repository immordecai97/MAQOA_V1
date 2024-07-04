// App.js
// import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ShopMaqoaProvider } from './../../Context';
import AppRoutes from './../../Routes';
import Navbar from '../../Components/Navbar';
import ModalCart from '../../Components/ModalCart';
import Footer from "./../../Components/Footer"

import './App.css';

const App = () => {
//     const { showModal } = useContext(ShopMaqoaContext);

    return (
        <ShopMaqoaProvider>
            <BrowserRouter>
                <AppRoutes />
                <Navbar />
			    <Footer />
                <ModalCart/>
            </BrowserRouter>
        </ShopMaqoaProvider>
    );
};

export default App;
