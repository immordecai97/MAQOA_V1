import { useContext, useEffect } from "react"
import { fetchProducts } from './../../Services/product.service.js'
import { ShopMaqoaContext } from "../../Context/index.jsx"
import Layout from "../../Components/Layout"
import Banner from "../../Components/Banner"
import ProductstUl from "../../Components/ProductstUl/index.jsx"


const Home = () => {
	const { products, setProducts } = useContext(ShopMaqoaContext)

	const handleFetchProducts = async () => {
		try {
			const data = await fetchProducts()
			setProducts(data)
		} catch (error) {
			console.log('ERRORRRRR: ', error.message)
		}
	}

	useEffect(() => {
		handleFetchProducts()
	}, [])

	if (!products) {
		return (
			<div>
				Cargando...
			</div>
		)
	}

	return (
		<Layout title="Welcome to MAQOA">
			{/* BANNER */}
			<Banner />
			{/* PRODUCTOS */}
			<ProductstUl products={products}/>			
		</Layout >
	)
}
export default Home