import { useContext } from "react"
import { ShopMaqoaContext } from "../../Context"
import Layout from "../../Components/Layout"
// import { IconPlus, IconMinus } from '@tabler/icons-react';



const Thanks = () => {
	const { purchase, cartBasket, cartSubtotal } = useContext(ShopMaqoaContext)
	console.log(purchase)
	return (
		<Layout title="Thanks for your purchase!">
			<div className="w-full flex items-center justify-center">
				<div className="p-4 shadow-lg w-[30rem] flex flex-col gap-4">
					<div className="flex gap-4">
						<div className="w-full shadow-lg p-3 rounded-xl">
							<h2 className="font-bold">Ticket</h2>
							<p>
								<span className="text-xs">Username: </span> <span className="text-gray-500">
									{purchase.username}
								</span>
							</p>
							<p>
								<span className="text-xs">Emial: </span> <span className="text-gray-500">
									{purchase.email}
								</span>
							</p>
						</div>
						<div className="w-full shadow-lg p-3 rounded-xl">
							<h2 className="font-bold">Shipping address</h2>
							<p>
								<span className="text-xs">Country: </span> <span className="text-gray-500">
									{purchase.country}
								</span>
							</p>
							<p>
								<span className="text-xs">Address: </span> <span className="text-gray-500">
									{purchase.address}
								</span>
							</p>
						</div>
					</div>
					<div>
						<h2 className="font-bold mb-2">Product details</h2>
						<table className="w-full">
							<thead>
								<tr>
									<th className="text-start"></th>
									<th className="text-start">Product</th>
									<th className="text-center">Quantity</th>
									<th className="text-center">Price</th>
									<th className="text-center">Subtotal</th>
								</tr>
							</thead>
							<tbody>
								{cartBasket.map((product) => (
									<tr key={product._id}>
										<td>
											<figure className="flex items-center justify-center h-[2rem] w-[2rem] rounded-full overflow-hidden">
												<img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
											</figure>
										</td>
										<td className="font-bold">{product.title}</td>
										<td className="text-center">{product.quantity}</td>
										<td className="text-center">${product.price.toFixed(2)}</td>
										<td className="text-center font-bold">${product.subtotal.toFixed(2)}</td>
									</tr>
								))}
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td className="text-end font-bold">Shipping:</td>
									<td className="text-center font-bold">${purchase.shipping}</td>
								</tr>
								<tr>
									<td></td>
									<td className="text-xs text-gray-400">Ground shipping</td>
									<td className="text-xs text-gray-400">(3-5 Days)</td>
									<td className="text-end font-bold">total:</td>
									<td className="text-center font-bold">${(cartSubtotal + purchase.shipping).toFixed(2)}</td>
								</tr>
							</tbody>
						</table>

					</div>
					<div>
						<button className="rounded bg-black text-white py-2 px-4 w-full">Continue</button>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Thanks