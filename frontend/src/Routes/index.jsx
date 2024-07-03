import { useRoutes } from 'react-router-dom'

import Home from '../Pages/Home'
import ProductDetails from '../Pages/ProductDetails'

/**Creamos el array de rutas */
const AppRoutes = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/product/:id', element: <ProductDetails /> }
	])
	return routes
}
export default AppRoutes