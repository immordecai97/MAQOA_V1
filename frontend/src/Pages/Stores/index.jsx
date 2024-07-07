// import { fetchStores } from "../../Services/store.service.js"
import { useContext, useEffect } from 'react'
import Layout from './../../Components/Layout'
import { ShopMaqoaContext } from '../../Context'
import { fetchStores } from '../../Services/store.service'
import { Link } from 'react-router-dom'


const Stores = () => {
	const { stores, setStores } = useContext(ShopMaqoaContext)
	const hanldeGetStores = async () => {
		try {
			const res = await fetchStores()
			// const data = await res.json()
			await setStores(res)
		} catch (error) {
			console.log(error.message)
			// console.log('no hay tiendas')
		}
	}

	useEffect(() => {
		hanldeGetStores()
	}, [])
	console.log(stores)

	if (!stores) {
		return <div>Loading...</div>
	}

	return (
		<Layout title={"Our shops"}>
			<div>
				<ul className='flex flex-wrap gap-4'>
					{
						stores?.map((shop) => (
							<li key={shop._id} >
								<Link to={`/store/${shop._id}`} className="flex flex-col items-center justify-center gap-2">
									<figure className='rounded-full w-[6rem] h-[6rem] overflow-hidden '>
										<img src={shop.images.logo} alt="" className='transition w-full hover:scale-125' />
									</figure>
									<h2 className='font-bold'>{shop.name}</h2>
								</Link>
							</li>
						))
					}
				</ul>
			</div>
		</Layout>
	)
}
export default Stores