export default async (req, res) => {
	var status;
	const data = await fetch(
		`http://api.smartjinny.com/social/${req.query.query}`,
		{
			method: "GET",
			headers: {
				'Content-Type': 'text/json;charset=utf-8'
			}
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
