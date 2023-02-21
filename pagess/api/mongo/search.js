import { connectToDatabase } from "../../../mongo";

export default async (req, res) => {
	const { db } = await connectToDatabase({ database: "sample_analytics" });

	const post = await db
		.collection("customers")
		.find({ name: { $regex: req.query.query, $options: "i" } })
		.sort({ created: -1 })
		.toArray();

	res.json(post);
};
