import { NavLink } from 'react-router-dom';
import { ShopMaqoaContext } from './../../Context';
import { useContext } from 'react';

const Navbar = () => {
	const { carrito, showModal, setShowModal } = useContext(ShopMaqoaContext);
	const { quantity } = carrito;

	const handleToggleModalCart = () => {
		setShowModal(!showModal)
	};

	return (
		<nav className='flex justify-between fixed z-10 top-0 w-full py-5 px-8 bg-white shadow'>
			<ul className='flex items-center gap-3'>
				<li className='font-semibold text-lg'>
					<NavLink to='/'>
						MAQOA
					</NavLink>
				</li>
				<li>
					<NavLink to='/'>
						Home
					</NavLink>
				</li>
			</ul>
			<ul className='flex items-center gap-3'>
				<li
					onClick={handleToggleModalCart}
					className='font-semibold text-lg cursor-pointer'>
					🛒 {quantity}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
