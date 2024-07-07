import { useRoutes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProductDetails from '../Pages/ProductDetails'
import Store from '../Pages/Store'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import AboutUs from '../Pages/AboutUs'
import Checkout from '../Pages/Checkout'
import Thanks from './../Pages/Thanks'
import User from '../Pages/User'
// import Dashboard from './../Pages/Respa'

import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShopMaqoaContext } from '../Context'

const PrivateRoute = ({ element: Component }) => {
	const { isAuth } = useContext(ShopMaqoaContext);
	return isAuth ? <Component /> : <Navigate to="/login" />;
};

/**Creamos el array de rutas */
const AppRoutes = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/login', element: <Login /> },
		{ path: '/register', element: <Register /> },
		{ path: '/aboutus', element: <AboutUs /> },
		{ path: '/checkout', element: <PrivateRoute element={Checkout} /> },
		{ path: '/thanks', element: <PrivateRoute element={Thanks} /> },
		{ path: '/dashboard', element: <PrivateRoute element={User} /> },
		// { path: '/dashboard', element: <PrivateRoute element={Dashboard} /> },
		{ path: '/store/:id', element: <Store /> },
		{ path: '/product/:id', element: <ProductDetails />},
	])
	return routes
}
export default AppRoutes