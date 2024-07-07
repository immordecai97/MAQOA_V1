import { useContext, useEffect } from "react"
import Layout from "../../Components/Layout"
import { ShopMaqoaContext } from "../../Context"
import { fetchPurchaseHistorial } from "../../Services/purchase.service.js"


const Dashboard = () => {
	const { user } = useContext(ShopMaqoaContext)

	const handleFetchHistory = async() => {  
		try {
			const data = await fetchPurchaseHistorial()
			console.log(data)
		} catch (error) {
			console.log('ERRORRRRR: ', error.message)
		}
	}

	useEffect(() => {
		handleFetchHistory()
	}, [])
	return (
		<Layout title={"Account"} >

		</Layout>
	)
}
export default Dashboard