import { connectToDatabase } from "../../../mongo";

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const post = await db.collection("blog").find({}).limit(20).toArray();

	res.json(post);
};
