import { useState } from "react";
import { useEffect } from "react";
import Page from "../component/Page";

export default function Web({}) {
	const [docList, setDocList] = useState([]);
	const [selectedDoc, setSelectedDoc] = useState(false);
	const [data, setData] = useState([]);
	const [mapper, setMapper] = useState([]);

	async function call() {
		const fetchDocList = await fetch("/api/document/getDoc");
		const DocList = await fetchDocList.json();
		setDocList(DocList);

		// Get the object name as an array
		// const mapper = Object.keys(json["items"][0]);
		// setMapper(mapper);
		// console.log(json["items"]);
		// setData(json["items"]);
	}

	async function menuClickHandler() {
		// selected default as first one
		const fet = await fetch(docList[0]?.api);
		const json = await fet.json();

		const dataPath = docList[0].path.join(".");
		console.log(json[dataPath]);

		// const mapper = Object.keys(json["items"][0]);
		// setMapper(mapper);
		// setData(json["items"]);
	}

	useEffect(() => {
		call();
	}, []);
	return (
		<Page title="Document Viewer">
			{docList.map((ga) => (
				<h1 key={ga._id} onClick={menuClickHandler}>
					{ga.name}
				</h1>
			))}
			{/* <table>
				<thead>
					{mapper.map((head) => (
						<th key={head}>{head}</th>
					))}
				</thead>
				<tbody>
					{data.map((row, index) => {
						return (
							<tr key={index}>
								{mapper.map((key, mapIndex) => {
									return <td key={mapIndex}>{JSON.stringify(row[key])}</td>;
								})}
							</tr>
						);
					})}
				</tbody>
			</table> */}

			{/* {data.map((ga) => (
				<ul key={ga["@id"]}>
					<li>{ga["title"]}</li>
					<li>{ga["description"]}</li>
				</ul>
			))} */}
		</Page>
	);
}
