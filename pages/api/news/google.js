var convert = require('xml-js');

export default async (req, res) => {
	var status;
	const data = await fetch(`https://news.google.com/rss?pz=1&hl=ko&topic=po&gl=KR&ceid=KR:ko`, {
		method: "GET",
	})
		.then(async (res) => {
			const data = await res.text();
			var result = convert.xml2json(data, {compact: true, spaces: 4});
			status = res.status;
			return result;
		})
		.catch((err) => {
			console.log(err);
			status = 404;
			return err.toString();
		});
	// console.log(data)
	res.status(status).json(data);
};
