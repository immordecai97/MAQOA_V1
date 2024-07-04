import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='flex justify-around fixed z-10 top-0 w-full py-5 px-8 bg-white shadow'>
					<NavLink to='/' className="font-bold">
						MAQOA
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
				{/* <li
					// onClick={handleToggleModalCart}
					className='font-semibold text-lg cursor-pointer'>
					🛒 {quantity}
				</li> */}
			</ul>
		</nav>
	);
};

export default Navbar;
