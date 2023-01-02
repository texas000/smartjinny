export default async (req, res) => {
	var status;
	const data = await fetch(
		`https://openapi.naver.com/v1/search/blog?query=${encodeURIComponent(
			req.query.query
		)}`,
		{
			method: "GET",
			headers: {
				'X-Naver-Client-Id': process.env.NAVER_ID,
				'X-Naver-Client-Secret': process.env.NAVER_KEY,
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
