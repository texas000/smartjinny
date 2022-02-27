import jwt from "jsonwebtoken";
import os from "os";
export default async (req, res) => {
	const id = process.env.USER_NAME;
	const pass = process.env.USER_PASS;
	const { username, password } = JSON.parse(req.body);

	if (id === username && pass === password) {
		res.json({
			token: jwt.sign(
				{
					username,
					signed: new Date(),
					network: os.networkInterfaces(),
				},
				process.env.USER_PASS
			),
		});
	} else {
		res.json({
			token: false,
		});
	}
};
