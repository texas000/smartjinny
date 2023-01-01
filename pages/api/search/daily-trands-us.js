const googleTrends = require("google-trends-api");

export default async (req, res) => {
	googleTrends
		.dailyTrends({ trendDate: new Date(), geo: "US" })
		.then(function (results) {
			res.send(results);
		})
		.catch(function (err) {
			res.status(500).send(err);
		});
};
export const config = {
	api: {
	  externalResolver: true,
	},
  };