const googleTrends = require("google-trends-api");

export default async (req, res) => {
	googleTrends
		.realTimeTrends({ geo: "US", category: "all" })
		.then(function (results) {
			res.send(results);
		})
		.catch(function (err) {
			res.status(500).send(err);
		});
};
