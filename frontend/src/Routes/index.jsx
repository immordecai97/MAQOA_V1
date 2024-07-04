import { useRoutes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProductDetails from '../Pages/ProductDetails'
import Store from '../Pages/Store'

/**Creamos el array de rutas */
const AppRoutes = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/product/:id', element: <ProductDetails /> },
		{ path: '/store/:id', element: <Store /> },
	])
	return routes
}
export default AppRoutes