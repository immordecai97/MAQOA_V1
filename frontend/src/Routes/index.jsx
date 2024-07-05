import { useRoutes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProductDetails from '../Pages/ProductDetails'
import Store from '../Pages/Store'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import AboutUs from '../Pages/AboutUs'

/**Creamos el array de rutas */
const AppRoutes = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/login', element: <Login /> },
		{ path: '/register', element: <Register /> },
		{ path: '/aboutus', element: <AboutUs /> },
		{ path: '/store/:id', element: <Store /> },
		{ path: '/product/:id', element: <ProductDetails /> },
	])
	return routes
}
export default AppRoutes