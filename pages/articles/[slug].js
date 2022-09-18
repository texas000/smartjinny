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
			title={data.title}
			description={data.description}
			img={data.image?.name}
		>
			{data && (
				<div className="mt-6 mx-2 lg:mx-6 min-h-screen">
					{/* <h1 className="text-3xl mb-5 text-gray-700">{data.title}</h1>

					<div className="text-base mb-5 text-gray-700">{data.published_at}</div>
					<div className="text-base mb-5 text-gray-700">{data.updatedAt}</div>
					<div className="text-base mb-5 text-gray-700">{data.createdAt}</div> */}
					<article className="prose md:prose-lg lg:prose-xl prose-img:rounded-xl prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-none">
						<ReactMarkdown children={data.content} />
					</article>
				</div>
			)}
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
	const response = await fetch(`${Constant.CMS_URL}/articles/${query.slug}`);
	if (response.status === 200) {
		const json = await response.json();
		data = json;
	}

	return { props: { data } };
}
