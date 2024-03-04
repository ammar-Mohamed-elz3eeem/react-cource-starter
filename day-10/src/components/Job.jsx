import React, { useState } from "react";
import { Link } from "react-router-dom";

function Job({ job }) {
	const [likes, setLikes] = useState(0);

	return (
		<div className="col-12 col-md-4 col-sm-6 mb-3">
			<div className="card">
				<div className="card-header">
					<h6>{job.title}</h6>
				</div>
				<div className="card-body">
					{job.description.replace(/(<([^>]+)>)/gi, "").substring(0, 100)}...
					<button className="btn btn-info rounded-3">
						<Link className="text-white" to={`jobs/${job.slug}`}>
							View Job Post
						</Link>
					</button>
					<button
						onClick={() => {
							setLikes(likes + 1);
						}}
					>
						No of Likes: {likes}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Job;
