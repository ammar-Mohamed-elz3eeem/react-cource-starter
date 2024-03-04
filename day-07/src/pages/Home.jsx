import React, { useRef, useState } from "react";
import { SNEAKERS, brands, filterByBrand, findAll } from "../utils/data.js";

function Home() {
	const [brand, setBrand] = useState("all");
	const [data, setData] = useState(SNEAKERS);

	const searchRef = useRef();

	const changeBrand = (brand) => {
		setBrand(brand);
		console.log(brand);
		if (brand !== "all") {
			setData(filterByBrand(brand));
			return;
		}
		setData(findAll());
	};

	const handleSubmit = function (e) {
		e.preventDefault();
		setData(findSneakersByKey("model", searchRef.current.value));
	};

	return (
		<div className="flex flex-column container items-center">
			{/* <div className="flex flex-row items-center justify-between fixed top-0 bg-light w-100 z-1">
				<ul className="flex flex-row list-style-none gap-lg">
					<li>
						<button onClick={() => changeBrand("all")}>All</button>
					</li>

					{brands.map((brand) => {
						return (
							<li key={brand}>
								<button onClick={() => changeBrand(brand)}>{brand}</button>
							</li>
						);
					})}
				</ul>
				<form onSubmit={handleSubmit}>
					<input ref={searchRef} type="search" placeholder="Search Sneakers" />
				</form>
			</div> */}
			<div className="grid mt-10 w-100 place-center sneakers">
				{data.map((sneaker) => {
					let name = `${sneaker.brand} ${sneaker.model} ${sneaker.colorway}`;
					return (
						<div key={sneaker.id} style={{ position: "relative" }}>
							<img
								width="200"
								height="200"
								src={sneaker.imageUrl}
								alt={name}
								style={{
									borderRadius: "8px",
									width: "100%",
									height: "auto",
									aspectRatio: "1 / 1",
								}}
							/>
							<a
								href={"/sneakers/" + sneaker.id}
								style={{ position: "absolute", inset: 0 }}
							>
								{name}
							</a>
							<div>
								<p>{name}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
