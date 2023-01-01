const googleTrends = require("google-trends-api");

export default async (req, res) => {
	googleTrends
		.autoComplete({ keyword: decodeURIComponent(req.query.q) })
		.then(function (results) {
			res.end(results);
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