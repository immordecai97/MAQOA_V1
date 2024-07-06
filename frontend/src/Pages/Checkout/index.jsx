import { useContext, useState } from "react";
import Layout from "../../Components/Layout";
import { ShopMaqoaContext } from "../../Context";
import { IconPlus, IconMinus, IconCash } from '@tabler/icons-react';
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Checkout = () => {
	const { cartBasket, addToCart, subtractFromCart, cartSubtotal, purchase, setPurchase, user, onSubmitPurchase, userPurchase } = useContext(ShopMaqoaContext);
	const { register, handleSubmit, formState: { errors } } = useForm();

	if(userPurchase){
		return(
			<Navigate to="/thanks" />
		)
	}

	return (
		<Layout title="Checkout">
			<div className="flex gap-4">
				<div>
					<div className="bg-white p-6 rounded-lg w-[35rem] shadow-lg">
						<h2 className="text-xl font-semibold">Cart</h2>
						<ul>
							{cartBasket.map((product) => (
								<li key={product._id} className="flex gap-4 items-center justify-center my-2 shadow-slate-900 py-2 px-4">
									<div className="flex items-center gap-4 w-full">
										<figure className="flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-full overflow-hidden">
											<img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
										</figure>
										<div className="flex flex-col gap-2">
											<h3 className="font-bold">{product.title}</h3>
											<div className="flex flex-col">
												<div className="flex justify-around items-center w-full min-w-36">
													<button className="rounded-full bg-black p-1"><IconPlus onClick={() => addToCart(product)} className="text-white" width="16" height="16" /></button>
													<p className="font-bold">{product.quantity}</p>
													<button className="rounded-full bg-black p-1"><IconMinus onClick={() => subtractFromCart(product)} className="text-white" width="16" height="16" /></button>
												</div>
											</div>
										</div>
									</div>
									<p className="font-bold">${product.subtotal.toFixed(2)}</p>
								</li>
							))}
						</ul>
						<div className="w-full">
							<Link
								to={'/'}
								className="flex gap-2 bg-black text-white items-center justify-center rounded py-2 pc-4">
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
									value={user.username}
									type="text"
									id="username"
									placeholder="username"
									className="rounded border border-black py-1 px-2"
									{...register("username", { required: true })}
								/>
								{errors.username && <span className="text-red-500 text-xs">username is required</span>}
							</div>
							<div className="flex flex-col gap-1">
								<label className="text-xs pl-2" htmlFor="email">Email</label>
								<input
									value={user.email}
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
									<option value="" default>Select a country</option>
									<option value="United State">United State</option>
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
									placeholder="XXXX - XXXX - XXXX - XXXX"
									className="rounded border border-black py-1 px-2"
									{...register("cardNumber", { required: true })}
								/>
								{errors.cardNumber && <span className="text-red-500 text-xs">Card number is required</span>}
							</div>
							<div className="flex gap-2">
								<div className="flex flex-col">
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
						<div className="w-full">
							<button
								type="submit"
								className="w-full flex gap-2 bg-black text-white items-center justify-center rounded py-2 pc-4"
							>
								<IconCash stroke={1.5}/>
								<span>Pay</span>
								<span>${cartSubtotal.toFixed(2)}</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default Checkout;
