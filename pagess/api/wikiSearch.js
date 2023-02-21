export default async (req, res) => {
	var status;
	const data = await fetch(
		`https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(
			req.query.q
		)}&format=json`,
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
