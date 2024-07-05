import { NavLink } from 'react-router-dom';
import { IconGhost } from '@tabler/icons-react';
import { useContext } from 'react';
import { ShopMaqoaContext } from '../../Context';

const Navbar = () => {
  const {
    isAuth,
    cartQuantity
  } = useContext(ShopMaqoaContext); // isAuth está false por defecto
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
          <NavLink to='/aboutus'>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to='/shops'>
            Shops
          </NavLink>
        </li>
        {isAuth ? (
          <li>
            <NavLink to='/dashboard'>
              Dashboard
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink to='/register'>
                Sign up
              </NavLink>
            </li>
            <li>
              <NavLink to='/login'>
                Log in
              </NavLink>
            </li>
          </>
        )}
        <li className='flex items-center'>
          <IconGhost stroke={1.25} /> <span className='bg-black text-white rounded-full w-[1.1rem] h-[1.1rem] flex items-center justify-center text-xs'>{cartQuantity}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
