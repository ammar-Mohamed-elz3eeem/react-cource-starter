import React from "react";
import { useParams } from "react-router-dom";
import { getJobs } from "../utils/api";

function SingleJobPage({ data }) {
	const [jobs, setJobs] = React.useState([]);
	const [job, setJob] = React.useState({});
	const { slug } = useParams();

	React.useEffect(() => {
		getJobs().then((jobs) => {
			setJobs(jobs);
			setJob(jobs.find((job) => job.slug === slug));
			console.log(job);
			console.log();
		});
	}, []);

	return (
		<div>
			<section className="bg-info mb-3">
				<div className="container">
					<div className="row">
						<div className="py-5 text-center">
							<h3 className="text-white">{job.title}</h3>
							<div className="text-center flex justify-content-center">
								<ul className="d-flex gap-5 font-bold">
									<li className="d-flex align-items-center gap-2 bg-light p-2 rounded-2">
										<i className="fa-solid fa-building icon"></i>{" "}
										{job.company_name}
									</li>
									<li className="d-flex align-items-center gap-2 bg-light p-2 rounded-2">
										<i className="fa-solid fa-calendar-days"></i>{" "}
										{new Date(Number(job.created_at) * 1000).toUTCString()}
									</li>
									<li className="d-flex align-items-center gap-2 bg-light p-2 rounded-2">
										<i className="fa-solid fa-map icon"></i> {job.location}
									</li>
									<li className="d-flex align-items-center gap-2 bg-light p-2 rounded-2">
										<i className="fa-solid fa-building icon"></i>{" "}
										{job.remote ? "Remote" : "OnLocation"}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-white">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-8">
							<div dangerouslySetInnerHTML={{ __html: job.description }}></div>
						</div>
						<div className="col-12 col-sm-4">
							<div className=""></div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default SingleJobPage;
