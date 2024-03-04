export const getJobs = async () => {
	const res = await fetch("https://www.arbeitnow.com/api/job-board-api", {
		method: "GET",
	});
	const jobs = await res.json();
	return jobs.data;
};
