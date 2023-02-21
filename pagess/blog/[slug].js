import { useRouter } from "next/router";
import { useEffect } from "react";
import { Constant } from "../../common/constant";
import Page from "../../component/Page";
import ReactMarkdown from "react-markdown";

export default function Home({ data }) {
	const router = useRouter();

	useEffect(() => {
		if (!data) {
			router.push("/404");
		}
		// console.log(data);
	}, []);

	return (
		<Page
			title={data.fields?.name?.stringValue}
			description={data.fields?.name?.stringValue}
		>
			<div className="mt-6 mx-2 lg:mx-6">
				<h1 className='text-9xl text-center font-bold antialiased hover:subpixel-antialiased font-sans'>{data?.fields?.name?.stringValue}</h1>
			</div>
			<div className="mt-14 mx-2 lg:mx-6 min-h-screen font-sans">
				{data.fields.content.arrayValue.values.map((ga, i) => {
					if (ga.mapValue.fields.type.stringValue == "text") {
						return (
							<article
								key={i}
								className="prose md:prose-lg lg:prose-xl prose-img:rounded-xl prose-img:max-w-lg prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-none"
							>
								<ReactMarkdown
									children={ga.mapValue.fields.value.stringValue}
								/>
							</article>
						);
					}
				})}
			</div>
			{/* {data && (
				<div className="mt-6 mx-2 lg:mx-6 min-h-screen">
					<article className="prose md:prose-lg lg:prose-xl prose-img:rounded-xl prose-img:max-w-lg prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-none">
						<ReactMarkdown children={data.content} />
					</article>
				</div>
			)} */}
		</Page>
	);
}

export async function getServerSideProps({ query, res }) {
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=10, stale-while-revalidate=59"
	);
	// GLOBAL LAYOUT
	var data = false;
	const response = await fetch(
		`https://firestore.googleapis.com/v1/projects/smartjinny-cms/databases/(default)/documents/blog/${query.slug}`
	);
	if (response.status === 200) {
		const json = await response.json();
		data = json;
	}

	return { props: { data } };
}
