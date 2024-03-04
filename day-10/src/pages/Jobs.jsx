import React from "react";
import Job from "../components/Job";
import { getJobs } from "../utils/api";

function Jobs() {
	const [jobs, setJobs] = React.useState([]);

	React.useEffect(() => {
		getJobs().then((jobs) => {
			setJobs(jobs);
			console.log(jobs[0]);
		});
	}, []);

	return (
		<div className="d-flex flex-row flex-wrap">
			<div className="container">
				<div className="row">
					{jobs.map((job) => (
						<Job job={job}></Job>
					))}
				</div>
			</div>
		</div>
	);
}

export default Jobs;
