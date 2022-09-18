// import { connectToDatabase } from "../../../mongo";

// export default async (req, res) => {
// 	const { db } = await connectToDatabase();
// 	// const body = JSON.parse(req.body);
// 	const post = await db.collection("document").insertOne({
// 		// Doc name to display in the page
// 		name: "FBI WANTED",
// 		// API URL to fetch
// 		api: "https://api.fbi.gov/wanted/v1/list",
// 		// Actual Data Path
// 		path: ["items"],
// 		title: "title",
// 		description: "description",
// 		image: ["images", "0", "large"],
// 		url: "url",
// 		created: new Date(),
// 	});

// 	res.json(post);
// };
