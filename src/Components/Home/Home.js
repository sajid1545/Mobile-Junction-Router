import React from 'react';

const Home = () => {
	return (
		<div className="max-w-[1300px] mx-auto">
			<div className="carousel w-full rounded-xl">
				<div id="item1" className="carousel-item w-full h-[700px]">
					<img
						src="https://images.unsplash.com/photo-1573920011462-eb3003086611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						className="w-full"
						alt="phones"
					/>
				</div>
				<div id="item2" className="carousel-item w-full h-[700px]">
					<img
						src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						className="w-full"
						alt="phones"
					/>
				</div>
				<div id="item3" className="carousel-item w-full h-[700px]">
					<img
						src="https://images.unsplash.com/photo-1605170439002-90845e8c0137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						className="w-full"
						alt="phones"
					/>
				</div>
				<div id="item4" className="carousel-item w-full h-[700px]">
					<img
						src="https://images.unsplash.com/photo-1569183091671-696402586b9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
						className="w-full"
						alt="phones"
					/>
				</div>
			</div>
			<div className="flex justify-center w-full py-2 gap-2">
				<a href="#item1" className="btn btn-xs">
					1
				</a>
				<a href="#item2" className="btn btn-xs">
					2
				</a>
				<a href="#item3" className="btn btn-xs">
					3
				</a>
				<a href="#item4" className="btn btn-xs">
					4
				</a>
			</div>
		</div>
	);
};

export default Home;
