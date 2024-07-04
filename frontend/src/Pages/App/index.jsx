import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './../../Routes';
import Navbar from '../../Components/Navbar';
// import ModalCart from '../../Components/ModalCart';
import './App.css';
import { ShopMaqoaProvider } from '../../Context';
import Footer from '../../Components/Footer';

const App = () => {

    return (
        <ShopMaqoaProvider>
            <BrowserRouter>
                <AppRoutes />
                <Navbar />
                {/* <ModalCart/> */}
                <Footer />
            </BrowserRouter>
        </ShopMaqoaProvider>
    );
};

export default App;
