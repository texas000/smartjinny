const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
	const msg = {
		to: "jin7604@gmail.com", // Change to your recipient
		from: "jin7604@gmail.com", // Change to your verified sender
		subject: "Sending with SendGrid is Fun",
		text: "and easy to do anywhere, even with Node.js",
		html: "<strong>and easy to do anywhere, even with Node.js</strong>",
	};

	sgMail
		.send(msg)
		.then(() => {
			console.log("Email sent");
			res.send("Email sent");
		})
		.catch((error) => {
			console.error(error);
			res.send(error);
		});
};
export const config = {
	api: {
		externalResolver: true,
	},
};
