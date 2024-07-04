
const CardProductDetail = ({ image, title, description, price, categories }) => {
	console.log(categories)
	const handleAddToCart = () => {
		addToCart(prod)
	}
	return (
		<div className='w-full flex justify-center mt-8'>
			<div className='flex justify-between w-10/12'>
				{/* IZQUIERDO */}
				<div className='w-80 p-2'>
					<figure className='max-w-[20rem] max-h-[20rem] overflow-hidden rounded'>
						<img src={image} alt={title} className='w-full transition hover:scale-150  h-full object-cover' />
					</figure>
				</div>
				{/* DERECHO */}
				<div className='w-80 p-2'>
					{/* LOGO DE LA TIENDA */}
					<div className="flex items-center gap-2">
						<figure className="rounded-full overflow-hidden w-[2rem] h-[2rem] flex justify-center items-center">
							<img src="https://i.pinimg.com/736x/2b/58/d9/2b58d965cdee09c70ed00924a162c6b2.jpg" alt="Shazi" className='w-full transition hover:scale-150  h-full object-cover' />
						</figure>
						<p className="text-xs">
							<span className="font-bold">Shop: </span>
							<span className="hover:text-blue-600 hover:underline cursor-pointer">Shazia</span>
						</p>
					</div>
					<div className='flex flex-col gap-2'>
						<h2 className='font-bold text-xl'>{title}</h2>
						<p>{description}</p>
						<p className='font-bold'>${price}</p>
						<p className='py-2 opacity-80 text-[12px]'>
							<span className='font-semibold'>Category: </span>
						</p>
						<button
						onClick={handleAddToCart}
						className='bg-black rounded text-white transition py-1 px-2 self-end border border-transparent hover:bg-white hover:border-black hover:text-black w-full'>Add to cart</button>
					</div>
				</div>
			</div>
		</div>

	)
}

export default CardProductDetail