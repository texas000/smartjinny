import { connectToDatabase } from "../../../mongo";

export default async (req, res) => {
	const { db } = await connectToDatabase();
	// console.log(req.body);
	const movies = await db.collection("blog").insertOne({
		title: "hello world",
		private: false,
		markdown: req.body,
		created: new Date(),
		comment: [],
	});

	res.json(movies);
};
