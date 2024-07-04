import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import Banner from "../../Components/Banner"
import Footer from "../../Components/Footer"

const Home = () => {
	
	const handleFetchProducts = async() =>{
		try {
			const data = await fetchProducts()
			return data
		} catch (error) {
			console.log('HOLA: ', error.message)			
		}
	}



	
	return (
		<Layout>
			{/* TÍTULO */}
			<h1 className="text-5xl font-bold mb-8">Welcome to MAQOA</h1>
			{/* BANNER */}
			<Banner/>
			{/* PRODUCTOS */}
			<ul className="flex flex-wrap gap-4 px-16 justify-center mt-6">
				{
					products.map(item => (
						<Card key={item._id} data={item} />
					))
				}
			</ul >
			<Footer />
		</Layout >
	)
}
export default Home