import { connectToDatabase } from "../../mongo";

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const movies = await db.collection("users").find({}).limit(20).toArray();

	res.json(movies);
};
