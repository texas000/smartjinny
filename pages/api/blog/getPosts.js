import { connectToDatabase } from "../../../mongo";

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const post = await db
		.collection("blog")
		.find({ private: false }, { markdown: 0 })
		.toArray();

	res.json(post);
};
