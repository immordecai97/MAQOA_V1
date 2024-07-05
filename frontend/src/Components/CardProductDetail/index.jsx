import { useContext } from "react"
import { ShopMaqoaContext } from "../../Context"
import { CategoriesUl } from "../Categories"

const CardProductDetail = () => {

	const { store, product, addToCart } = useContext(ShopMaqoaContext)
	const { images, title, description, price, categories } = product
	
	return (
		<div className='w-full  flex justify-evenly mt-8'>
			<div className='flex justify-between w-full max-w-[770px] mx-auto'>
				{/* IZQUIERDO */}
				<div className='w-80 p-2'>
					<figure className='max-w-[20rem] max-h-[20rem] overflow-hidden rounded'>
						<img src={images[0]} alt={title} className='w-full transition hover:scale-150  h-full object-cover' />
					</figure>
				</div>
				{/* DERECHO */}
				<div className='w-80 p-2'>
					{/* LOGO DE LA TIENDA */}
					<div className="flex items-center gap-2">
						<figure className="rounded-full overflow-hidden w-[2rem] h-[2rem] flex justify-center items-center">
							<img src={store.images.logo} alt="Shazi" className='w-full transition hover:scale-150  h-full object-cover' />
						</figure>
						<p className="text-xs">
							<span className="font-bold">Shop: </span>
							<span className="hover:text-blue-600 hover:underline cursor-pointer">{store.name}</span>
						</p>
					</div>
					<div className='flex flex-col gap-2'>
						<h2 className='font-bold text-xl'>{title}</h2>
						<p>{description}</p>
						<div className="flex justify-between items-center">
							<p className='font-bold'>${price}</p>
							<CategoriesUl categories={categories} />
						</div>
						<button
							onClick={()=>addToCart(product)}
							className='bg-black rounded text-white transition py-1 px-2 self-end border border-transparent hover:bg-white hover:border-black hover:text-black w-full'>Add to cart</button>
					</div>
				</div>
			</div>
		</div>

	)
}

export default CardProductDetail
// import { CategoriesUl } from "../Categories"

// const CardProductDetail = ({ data, store }) => {
// 	console.log('data:', data)
// 	const { images, title, description, price, categories } = data
// 	// const store = data.productBy
// 	console.log('STORE:', store)
// 	// console.log(categories)
// 	// const handleAddToCart = () => {
// 	// 	addToCart(prod)
// 	// }
// 	return (
// 		<div className='w-full flex justify-center mt-8'>
// 			<div className='flex justify-between w-10/12'>
// 				{/* IZQUIERDO */}
// 				<div className='w-80 p-2'>
// 					<figure className='max-w-[20rem] max-h-[20rem] overflow-hidden rounded'>
// 						<img src={images[0]} alt={title} className='w-full transition hover:scale-150  h-full object-cover' />
// 					</figure>
// 				</div>
// 				{/* DERECHO */}
// 				<div className='w-80 p-2'>
// 					{/* LOGO DE LA TIENDA */}
// 					<div className="flex items-center gap-2">
// 						<figure className="rounded-full overflow-hidden w-[2rem] h-[2rem] flex justify-center items-center">
// 							<img src={store.images.logo} alt="Shazi" className='w-full transition hover:scale-150  h-full object-cover' />
// 						</figure>
// 						<p className="text-xs">
// 							<span className="font-bold">Shop: </span>
// 							<span className="hover:text-blue-600 hover:underline cursor-pointer">{store.name}</span>
// 						</p>
// 					</div>
// 					<div className='flex flex-col gap-2'>
// 						<h2 className='font-bold text-xl'>{title}</h2>
// 						<p>{description}</p>
// 						<div className="flex justify-between items-center">
// 							<p className='font-bold'>${price}</p>
// 							<CategoriesUl categories={categories} />
// 						</div>
// 						<button
// 							// onClick={handleAddToCart}
// 							className='bg-black rounded text-white transition py-1 px-2 self-end border border-transparent hover:bg-white hover:border-black hover:text-black w-full'>Add to cart</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>

// 	)
// }

// export default CardProductDetail