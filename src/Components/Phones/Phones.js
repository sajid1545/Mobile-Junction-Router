import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';

const Phones = () => {
    const [phones, setPhones] = useState([]);
	const [search, setSearch] = useState('apple');
    

	useEffect(() => {
		fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
			.then((res) => res.json())
			.then((data) => setPhones(data.data));
	}, [search]);


	return (
		<div>
			<input onChange={(e)=> setSearch(e.target.value)}
				type="text"
				placeholder="Type here"
				className="input input-bordered input-error w-full max-w-xs"
			/>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto gap-5 mt-5'>
				{phones.map((phone) => (
					<Phone key={phone.slug} phone={phone}></Phone>
				))}
			</div>
		</div>
	);
};

export default Phones;
