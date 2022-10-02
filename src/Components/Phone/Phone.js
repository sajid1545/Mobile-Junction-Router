import React from 'react';
import { DevicePhoneMobileIcon } from '@heroicons/react/24/solid';

const Phone = ({ phone }) => {
	const { phone_name, image, brand, slug } = phone;
	console.log(phone);

	return (
		<div>
			<div className="card w-96 bg-base-100 shadow-xl hover:shadow-red-700 duration-500 ease-linear hover:scale-95">
				<figure className="px-10 pt-10">
					<img src={image} alt="phones" className="rounded-xl" />
				</figure>
				<div className="card-body items-center text-center">
					<h3 className="text-2xl font-bold"> Brand : {brand}</h3>
					<h2 className="card-title">
						
						<DevicePhoneMobileIcon className="h-6 w-6" />  {phone_name}
					</h2>
					<div className="card-actions mt-3 w-full">
						<button className="btn btn-primary w-full hover:bg-orange-700 duration-500 focus:bg-red-700 ">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Phone;
