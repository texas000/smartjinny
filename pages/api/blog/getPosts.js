import { connectToDatabase } from "../../../mongo";

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const post = await db
		.collection("blog")
		.find({ private: false }, { projection: { markdown: 0 } })
		.sort({ created: -1 })
		.toArray();

	res.json(post);
};
