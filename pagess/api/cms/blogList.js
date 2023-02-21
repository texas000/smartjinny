export default async (req, res) => {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const limit = req.query.limit || 10;

	var raw = JSON.stringify({
		structuredQuery: {
			from: [{ collectionId: "blog" }],
			orderBy: [
				{ field: { fieldPath: "created_on" }, direction: "DESCENDING" },
			],
			select: {
				fields: [
					{ fieldPath: "name" },
					{ fieldPath: "created_on" },
					{ fieldPath: "header_image" },
				],
			},
			limit,
		},
	});

	var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	const data = await fetch(
		"https://firestore.googleapis.com/v1/projects/smartjinny-cms/databases/(default)/documents:runQuery",
		requestOptions
	)
		.then(async (response) => await response.json())
		.catch((error) => console.log("error", error));

	res.send(data);
};
