import { Link } from 'react-router-dom';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShopMaqoaContext } from '../../Context';

const HeaderStore = () => {
	const { store } = useContext(ShopMaqoaContext)
	return (
		<div className="w-full mt-8 px-32 flex items-center justify-between">
			<div className="flex items-center gap-4">
				<figure className="rounded-full overflow-hidden w-[5rem] h-[5rem] flex justify-center items-center">
					<img src={store.images.logo} alt="Shazi" className='w-full transition hover:scale-150 h-full object-cover' />
				</figure>
				<h2 className="font-bold">{store.name}</h2>
			</div>
			<Link to='/'>
				<ArrowLeftCircleIcon className='text-black w-[2.5rem]' />
			</Link>
		</div>
	);
};

export default HeaderStore;
