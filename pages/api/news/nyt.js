var convert = require('xml-js');
export default async (req, res) => {
	var status;
	const data = await fetch(`https://rss.nytimes.com/services/xml/rss/nyt/US.xml`, {
		method: "GET",
	})
		.then(async (res) => {
			const data = await res.text();
			var result = convert.xml2json(data, {compact: true, spaces: 4});
			status = 200;
			return result;
		})
		.catch((err) => {
			console.log(err);
			status = 404;
			return err.toString();
		});
	res.status(status).json(data);
};
