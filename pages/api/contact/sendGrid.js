const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
	const { email } = JSON.parse(req.body);
	const msg = {
		to: email, // Change to your recipient
		from: "support@smartjinny.com", // Change to your verified sender
		subject: "[Smartjinny] Thank you for reaching out to us",
		html: `<h1>Thank you for reaching out</h1><br><br>We will contact you shortly<br><br>Regards,<br><br><a href="smartjinny.com">Smartjinny</a>`,
	};
	sgMail
		.send(msg)
		.then(() => {
			res.statusCode = 200;
			res.json({
				message: "Email sent successfully",
			});
		})
		.catch((err) => {
			res.statusCode = 400;
			res.json({
				message: "Email failed",
			});
			console.log(err);
		});
};
export const config = {
	api: {
		externalResolver: true,
	},
};
