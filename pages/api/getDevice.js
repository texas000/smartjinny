export default async (req, res) => {
	var status;
	var agent = req.query?.agent;
	const data = await fetch(
		`https://api.apicagent.com/?ua=${
			agent ? agent : req.headers["user-agent"]
		}`,
		{
			method: "GET",
		}
	)
		.then(async (res) => {
			const data = await res.json();
			status = res.status;
			return data;
		})
		.catch((err) => {
			console.log(err);
			status = 404;
			return err.toString();
		});
	res.status(status).json(data);
};
