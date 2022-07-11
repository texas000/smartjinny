var geoip = require("geoip-lite");
var zipcodes = require("zipcodes");
import { publicIpv4 } from "public-ip";

export default async (req, res) => {
	var ip = await publicIpv4();
	// var ip = req.query.ip;
	if (ip) {
		var geo = geoip.lookup(ip);
		// console.log(geo);
		var zip = zipcodes.lookupByCoords(geo?.ll[0], geo?.ll[1]);
		res.send({ geo, zip, ip });
	} else {
		res.send(false);
	}
};
