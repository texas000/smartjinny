import Link from "next/link";
import { Constant } from "../../common/constant";
import Page from "../../component/Page";

export default function Home({ data }) {
	// console.log(data);
	return (
		<Page title="Article" description="Smartjinny Article Page">
			{/* {JSON.stringify(data)} */}
			<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 m-6">
				{data.map((ga) => (
					<div
						key={ga.document.name}
						className="max-w-lg overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl"
					>
						{ga.document?.fields?.header_image?.stringValue && (
							<img
								src={`https://firebasestorage.googleapis.com/v0/b/smartjinny-cms.appspot.com/o/${encodeURIComponent(
									ga.document?.fields?.header_image?.stringValue
								)}?alt=media`}
								className="h-32 w-full object-cover"
							/>
						)}
						<div className="p-5">
							<h2 className="text-lg font-extrabold mb-3 text-gray-700">
								{ga.document.fields.name.stringValue}
							</h2>
							<div className="text-sm mb-3 text-gray-400 text-right">
								{new Date(
									ga.document.fields.created_on.timestampValue
								).toLocaleDateString()}
							</div>
							<Link href={`/blog/${ga.document.name.split("/").pop()}`}>
								<button className="w-full rounded-md bg-indigo-600 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
									See More
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</Page>
	);
}

export async function getServerSideProps({ res }) {
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=10, stale-while-revalidate=59"
	);
	// GLOBAL LAYOUT
	var data = [];
	const response = await fetch(
		`${process.env.BASE_URL}/api/cms/blogList?limit=8`
	);
	const json = await response.json();
	data = json;

	return { props: { data } };
}
