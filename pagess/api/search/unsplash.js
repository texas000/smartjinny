export default async (req, res) => {
	var status;
	const data = await fetch(
		`https://api.unsplash.com/search/photos/?query=${encodeURIComponent(
			req.query.q
		)}&client_id=${process.env.UNSPLASH_ID}`,
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
