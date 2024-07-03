import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import { ShopMaqoaContext } from './../../Context'
import Banner from "../../Components/Banner"

const Home = () => {
	// const context = useContext(ShopMaqoaContext)
	const { products } = useContext(ShopMaqoaContext)
	return (
		<Layout>
			{/* TÍTULO */}
			<h1 className="text-4xl font-bold mb-8">Welcome to MAQOA</h1>
			{/* BANNER */}
			{/* <div className="bg-black w-full h-[20rem] flex justify-center items-center mb-8">
				<h2 className="text-white">BANNER</h2>
			</div> */}
			<Banner/>
			{/* PRODUCTOS */}
			<ul className="flex flex-wrap gap-4 px-16 justify-center mt-6">
				{
					products.map(item => (
						<Card key={item._id} data={item} />
					))
				}
			</ul >
		</Layout >
	)
}
export default Home