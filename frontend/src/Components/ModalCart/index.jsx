import { useContext } from "react";
import { IconPlus, IconMinus, IconX  } from '@tabler/icons-react';
import './styles.css';
import { Link } from "react-router-dom";
import { ShopMaqoaContext } from "../../Context";

const ModalCart = () => {
    const { showModal, toggleModal, cartBasket, addToCart, subtractFromCart, cartSubtotal } = useContext(ShopMaqoaContext);

    return showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-[35rem]">
                <div className="flex items-center justify-around">
                    <h2 className="text-xl font-semibold">Cart</h2>
                    <IconX onClick={toggleModal} className="transition rounded-full hover:text-white hover:bg-black "/>
                </div>
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
            onClick={toggleModal}
            to={'/checkout'} 
            className="flex gap-2 bg-black text-white items-center justify-center rounded py-2 pc-4">
		    <span>Pay</span>
		    <span>${cartSubtotal.toFixed(2)}</span>
		    </Link>
                </div>
            </div>
        </div>
    ) : null;
};

export default ModalCart;
