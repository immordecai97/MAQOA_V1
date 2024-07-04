import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './../../Routes';
import Navbar from '../../Components/Navbar';
import ModalCart from '../../Components/ModalCart';
import './App.css';

const App = () => {

    return (
        <ShopMaqoaProvider>
            <BrowserRouter>
                <AppRoutes />
                <Navbar />
                <ModalCart/>
            </BrowserRouter>
        </ShopMaqoaProvider>
    );
};

export default App;
