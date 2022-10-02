import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';

const Phones = () => {
	const [phones, setPhones] = useState([]);

	useEffect(() => {
		fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
			.then((res) => res.json())
			.then((data) => setPhones(data.data));
	
        }, []);

    const [search, setSearch] = useState([]);


	return (
		<div>
			<input
				type="text"
				placeholder="Type here"
				className="input input-bordered input-error w-full max-w-xs"
            />
            
            {
                phones.map(phone => <Phone key={phone.slug} phone={ phone } ></Phone>)
            }
		</div>
	);
};

export default Phones;
