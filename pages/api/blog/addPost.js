import { connectToDatabase } from "../../../mongo";

export default async (req, res) => {
	const { db } = await connectToDatabase();
	const body = JSON.parse(req.body);
	const post = await db.collection("blog").insertOne({
		title: body.title,
		private: false,
		markdown: body.markdown,
		created: new Date(),
		comment: [],
	});

	res.json(post);
};
