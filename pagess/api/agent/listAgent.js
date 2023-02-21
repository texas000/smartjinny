import { connectToDatabase } from "../../../mongo";

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const post = await db.collection("agent").find().toArray();

	res.json(post);
};
