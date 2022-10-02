import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PhoneDetails = () => {
	const details = useLoaderData().data;
	console.log(details);

	const { name, mainFeatures, releaseDate, image } = details;

	return (
		<div>
			<div className="mockup-window border bg-base-300 max-w-[1300px] mx-auto">
				<div className="px-4 py-10 bg-base-200">
					<img className="block mx-auto w-[200px]" src={image} alt="phones" />
					<h1 className="text-2xl mt-4">Name : {name}</h1>

					<ul className="menu bg-base-100 w-[50%]  mx-auto mt-5">
						<li>
							<span> Display Size - {mainFeatures.displaySize?mainFeatures.displaySize:'Not Available'}</span>
						</li>
						<li>
							<span>{mainFeatures.memory?mainFeatures.memory:'Not Available'}</span>
						</li>
						<li>
                            <span>{releaseDate ? releaseDate : 'Not Available' }</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PhoneDetails;
