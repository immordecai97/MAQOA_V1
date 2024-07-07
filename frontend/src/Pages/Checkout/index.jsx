// Checkout.jsx
import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShopMaqoaContext } from "../../Context";
import { IconPlus, IconMinus, IconCash } from '@tabler/icons-react';
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Checkout = () => {
	// const gg = useContext(ShopMaqoaContext);
	// console.log(gg)
	const { cartBasket, addToCart, subtractFromCart, cartSubtotal, purchase, user, onSubmitPurchase, userPurchase } = useContext(ShopMaqoaContext);
	const { register, handleSubmit, formState: { errors } } = useForm();
	// const shippingCost = purchase?.shipping || 5; // Valor de envío predeterminado

	if (purchase) {	
		return <Navigate to="/thanks" />;
	}

	return (
		<Layout title="Checkout">
			<div className="flex gap-4">
				<div>
					<div className="bg-white p-6 rounded-lg w-[35rem] shadow-lg flex flex-col gap-4">
						<h2 className="text-xl font-semibold">Cart</h2>
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
										<td className="flex items-center justify-center">
											<div className="flex gap-4">
												<button className="rounded-full bg-black p-1" onClick={() => addToCart(product)}>
													<IconPlus className="text-white" width="16" height="16" />
												</button>
												<span>{product.quantity}</span>
												<button className="rounded-full bg-black p-1" onClick={() => subtractFromCart(product)}>
													<IconMinus className="text-white" width="16" height="16" />
												</button>
											</div>
										</td>
										<td className="text-center">${product.price.toFixed(2)}</td>
										<td className="text-center font-bold">${product.subtotal.toFixed(2)}</td>
									</tr>
								))}
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td className="text-end font-bold">Shipping:</td>
									<td className="text-center font-bold">$5</td>
									{/* <td className="text-center font-bold">${shippingCost}</td> */}
								</tr>
								<tr>
									<td></td>
									<td className="text-xs text-gray-400">Ground shipping</td>
									<td className="text-xs text-gray-400">(3-5 Days)</td>
									<td className="text-end font-bold">Total:</td>
									<td className="text-center font-bold">${(cartSubtotal + 5).toFixed(2)}</td>
									{/* <td className="text-center font-bold">${(cartSubtotal + shippingCost).toFixed(2)}</td> */}
								</tr>
							</tbody>
						</table>
						<div className="w-full">
							<Link to='/' className="flex gap-2 bg-black text-white items-center justify-center rounded py-2 px-4">
								<span>See more products</span>
							</Link>
						</div>
					</div>
				</div>
				<div>
					<form onSubmit={handleSubmit(onSubmitPurchase)} className="flex flex-col gap-2 shadow-lg p-6">
						<legend className="flex flex-col gap-2">
							<span className="font-bold">Shipping information</span>
							<div className="flex flex-col gap-1">
								<label className="text-xs pl-2" htmlFor="username">Username</label>
								<input
									defaultValue={user.username}
									type="text"
									id="username"
									placeholder="username"
									className="rounded border border-black py-1 px-2"
									{...register("username", { required: true })}
								/>
								{errors.username && <span className="text-red-500 text-xs">Username is required</span>}
							</div>
							<div className="flex flex-col gap-1">
								<label className="text-xs pl-2" htmlFor="email">Email</label>
								<input
									defaultValue={user.email}
									type="text"
									id="email"
									placeholder="Email"
									className="rounded border border-black py-1 px-2"
									{...register("email", { required: true })}
								/>
								{errors.email && <span className="text-red-500 text-xs">Email is required</span>}
							</div>
						</legend>

						<legend className="flex flex-col gap-2">
							<span className="font-bold">Shipping address</span>
							<div className="flex flex-col gap-1">
								<label className="text-xs pl-2" htmlFor="country">Country</label>
								<select
									name="country"
									id="country"
									className="rounded border border-black py-1 px-2"
									{...register("country", { required: true })}
								>
									<option value="">Select a country</option>
									<option value="United States">United States</option>
									<option value="Canada">Canada</option>
								</select>
								{errors.country && <span className="text-red-500 text-xs">Country is required</span>}
							</div>
							<div className="flex flex-col gap-1">
								<label className="text-xs pl-2" htmlFor="address">Address</label>
								<input
									type="text"
									id="address"
									placeholder="Address"
									className="rounded border border-black py-1 px-2"
									{...register("address", { required: true })}
								/>
								{errors.address && <span className="text-red-500 text-xs">Address is required</span>}
							</div>
						</legend>

						<legend className="flex flex-col gap-2">
							<span className="font-bold">Payment details</span>
							<div className="flex flex-col gap-1">
								<label className="text-xs pl-2" htmlFor="cardNumber">Card number</label>
								<input
									type="text"
									id="cardNumber"
									placeholder="Card number"
									className="rounded border border-black py-1 px-2"
									{...register("cardNumber", { required: true })}
								/>
								{errors.cardNumber && <span className="text-red-500 text-xs">Card number is required</span>}
							</div>
							<div className="flex gap-2">
								<div className="flex flex-col">
									<label className="text-xs pl-2" htmlFor="cardDate">Expiration date</label>
									<input
										type="text"
										id="cardDate"
										placeholder="MM/YY"
										className="rounded border border-black py-1 px-2"
										{...register("cardDate", { required: true })}
									/>
									{errors.cardDate && <span className="text-red-500 text-xs">Card expiration date is required</span>}
								</div>
								<div className="flex flex-col">
									<label className="text-xs pl-2" htmlFor="cvc">CVC</label>
									<input
										type="text"
										id="cvc"
										placeholder="CVC"
										className="rounded border border-black py-1 px-2"
										{...register("cvc", { required: true })}
									/>
									{errors.cvc && <span className="text-red-500 text-xs">CVC is required</span>}
								</div>
							</div>
						</legend>
						<input type="hidden" defaultValue={user._id} name="userID" {...register("userID", { required: true })}/>
						<div className="w-full">
							<button
								type="submit"
								className="w-full flex gap-2 bg-black text-white items-center justify-center rounded py-2 pc-4">
								<IconCash stroke={1.5} />
								<span>Pay</span>
								<span>${(cartSubtotal + 5).toFixed(2)}</span>
								{/* <span>${(cartSubtotal + shippingCost).toFixed(2)}</span> */}
							</button>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default Checkout;
