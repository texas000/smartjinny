var geoip = require("geoip-lite");
var zipcodes = require("zipcodes");

export default async (req, res) => {
	var ip = req.query.ip;
	if (ip) {
		var geo = geoip.lookup(ip);
		// console.log(geo);
		var zip = zipcodes.lookupByCoords(geo?.ll[0], geo?.ll[1]);
		res.send({ geo, zip, ip });
	} else {
		res.send(false);
	}
};
