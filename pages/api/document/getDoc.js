import { connectToDatabase } from "../../../mongo";

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const post = await db
		.collection("document")
		.find()
		.sort({ created: -1 })
		.toArray();

	res.json(post);
};
