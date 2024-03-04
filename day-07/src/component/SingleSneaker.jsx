import React from "react";
import { useParams } from "react-router-dom";
import { findSneakersByKey } from "../utils/data";

function SingleSneaker() {
	const { sneakerId } = useParams();
	const sneaker = findSneakersByKey("id", sneakerId)[0];

	if (!sneaker) {
		return <h1>Sneaker Not Found</h1>;
	}

	return (
		<div className="flex flex-row justify-content-center">
			<div className="w-50">
				<img src={sneaker.imageUrl} width="100%"></img>
			</div>
			<div className="w-50">
				<div className="flex flex-column gap-lg">
					<h2>{sneaker.model}</h2>
					<p>{sneaker.colorway}</p>
					<span className="box">{sneaker.brand}</span>
				</div>
			</div>
		</div>
	);
}

export default SingleSneaker;
