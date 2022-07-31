import { connectToDatabase } from "../../../mongo";

export default async (req, res) => {
	const { db } = await connectToDatabase();
	const body = JSON.parse(req.body);
	// await db.createCollection("agent");
	const post = await db.collection("agent").insertOne(body);
	res.json(post);
};
