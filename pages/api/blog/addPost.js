import { connectToDatabase } from "../../../mongo";

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const movies = await db
		.collection("blog")
		.insertOne({ item: "card", qty: 15 });

	res.json(movies);
};
