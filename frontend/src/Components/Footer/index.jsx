import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandFacebook } from '@tabler/icons-react';
import { IconBrandX } from '@tabler/icons-react';




const Footer = () => {
	return (
		<footer className="grid grid-cols-3 bg-[#2b2b2b] text-white w-full p-8 h-[15rem] mt-8">
			<div className="row-span-2 flex items-center justify-center">
				<figure className='overflow-hidden flex justify-center items-center cursor-pointer'>
					<img src="/images/maqoa.iso.png" alt="Maqoa Isologo" className='w-[7rem]' />
				</figure>
			</div>
			<div className="flex items-center justify-center">
				<ul className="flex gap-4">
					<li>
						<IconBrandFacebook width="38" height="38" className='cursor-pointer'/>
					</li>
					<li>
						<IconBrandInstagram width="38" height="38" className='cursor-pointer'/>
					</li>
					<li>
						<IconBrandX width="38" height="38" className='cursor-pointer'/>
					</li>
				</ul>
			</div>
			<div className="flex flex-col items-center justify-center">
				<ul className="flex flex-col gap-2">
					<li>Jhackson Street 356. Miami, EE.UU</li>
					<li>(+1)123 4567 9876</li>
					<li>maqoa@maqoa.com</li>
				</ul>
			</div>
			<div className="col-start-2 col-span-2 flex items-center justify-center">
				<p className='w-full text-center'>&copy; 2024 MAQOA, inc. All rights reserved.</p>
				<div className='w-full'></div>
			</div>
		</footer>
	)
}
export default Footer