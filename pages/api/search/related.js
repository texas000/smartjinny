const googleTrends = require("google-trends-api");

export default async (req, res) => {
	googleTrends
		.relatedQueries({ keyword: decodeURIComponent(req.query.q) })
		.then(function (results) {
			res.send(results);
		})
		.catch(function (err) {
			res.status(500).send(err);
		});
};
