import { NavLink } from 'react-router-dom';

const Navbar = () => {
	// const handleToggleModalCart = () => {
	// 	setShowModal(!showModal)
	// };
	return (
		<nav className='flex justify-around fixed items-center z-10 top-0 w-full py-5 px-8 bg-white shadow'>
					<NavLink to='/' className="font-bold">
						<span className='hidden'>MAQOA</span>
						<img src="/images/maqoa.png" alt="MAQOA logo" className='w-[8rem]'/>
					</NavLink>

			<ul className='flex items-center gap-4 '>
				<li>
					<NavLink to='/'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/'>
						About us
					</NavLink>
				</li>
				<li>
					<NavLink to='/'>
						Shops
					</NavLink>
				</li>
				<li>
					<NavLink to='/'>
						Sign up
					</NavLink>
				</li>
				<li>
					<NavLink to='/'>
						Log in
					</NavLink>
				</li>
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
