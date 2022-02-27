import { connectToDatabase } from "../../../mongo";

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const body = JSON.parse(req.body);

	var ObjectId = require("mongodb").ObjectId;
	console.log(body);
	const post = await db.collection("blog").updateOne(
		{ _id: ObjectId(body.id) },
		{
			$set: {
				title: body.title,
				markdown: body.markdown,
			},
		},
		{ upsert: true }
	);

	res.json(post);
};
