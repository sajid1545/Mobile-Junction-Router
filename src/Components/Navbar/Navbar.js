import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className='w-full relative'>
			<div onClick={() => setOpen(!open)} className="h-6 w-6 text-black-500 md:hidden  ">
				{open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
			</div>

			<ul
				className={`text-2xl md:flex justify-center mt-2 gap-8 mb-10 md:static relative w-full ${
					open ? 'top-6' : 'top-[-250px]'
				}`}>
				<img
					className="w-[40px] height-[100px] rounded-full mx-auto md:m-0"
					src="https://img.freepik.com/free-vector/digital-device-mockup_53876-89354.jpg?w=740&t=st=1664722641~exp=1664723241~hmac=feb3e31e89629c65d73ae26e5bb1bf6bb75e49827792a05b4b5aede0c0208798"
					alt=""
				/>
				<li>
					<Link to={`/home`}>Home</Link>
				</li>
				<li>
					<Link to={`/phones`}>Phones</Link>
				</li>
				<li>
					<Link to={`/about`}>About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
