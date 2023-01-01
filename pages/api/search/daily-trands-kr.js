const googleTrends = require("google-trends-api");

export default async (req, res) => {
	googleTrends
		.dailyTrends({ trendDate: new Date(), geo: "KR" })
		.then(function (results) {
			res.setHeader("Content-Type", "application/json");
			res.setHeader("Charset", "UTF-8");
			res.send(results);
		})
		.catch(function (err) {
			res.status(500).send(err);
		});
};
