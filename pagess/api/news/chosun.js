var convert = require('xml-js');
export default async (req, res) => {
	var status;
	const data = await fetch(`http://myhome.chosun.com/rss/www_section_rss.xml`, {
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
