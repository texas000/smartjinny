import { connectToDatabase } from "../../../mongo";

export default async (req, res) => {
	const { db } = await connectToDatabase();
	var ObjectId = require("mongodb").ObjectId;

	var hex = /[0-9A-Fa-f]{6}/g;
	let o_id = hex.test(req.query.id) ? ObjectId(req.query.id) : req.query.id;

	// let o_id = new ObjectId(req.query.id.trim());
	const post = await db.collection("blog").findOne({ _id: o_id });

	res.json(post);
};
