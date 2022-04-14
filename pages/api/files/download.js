export default async (req, res) => {
	var status;
	const dropbox = await fetch(
		"https://api.dropboxapi.com/2/files/get_temporary_link",
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.DROPBOX_API_KEY}`,
				"Content-Type": "application/json",
			},
			body: req.body,
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
	res.status(status).json(dropbox);
};
