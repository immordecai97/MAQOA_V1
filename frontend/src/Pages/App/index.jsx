import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './../../Routes';
import Navbar from '../../Components/Navbar';
import './App.css';
import { ShopMaqoaProvider } from '../../Context';
import Footer from '../../Components/Footer';
import ModalCart from '../../Components/ModalCart';

const App = () => {
    return (
        <ShopMaqoaProvider>
            <BrowserRouter>
                <AppRoutes />
                <Navbar />
                <ModalCart/>
                <Footer />
            </BrowserRouter>
        </ShopMaqoaProvider>
    );
};
export default App;