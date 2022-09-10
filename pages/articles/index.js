import Link from "next/link";
import { Constant } from "../../common/constant";
import Page from "../../component/Page"

export default function Home({ data }) {
	console.log(data)
	
	return(
		<Page title="Article">
			<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 m-6">
			{/* TODO: MAKE IT AS CARD COMPONENT */}
			{data.map(ga=> (
				<div key={ga._id} className="max-w-lg overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
					{ga.image?.name && <img src={ga.image?.name} className="h-32 w-full object-cover"/>}
					<div className="p-5">
						<h2 className="text-lg font-extrabold mb-5 text-gray-700">{ga.title}</h2>
						<div className="text-base mb-5 text-gray-700">{ga.description}</div>
						<Link href={`/articles/${ga.slug}`}>
						<button className="w-full rounded-md bg-indigo-600 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">See More</button>
						</Link>
					</div>
					
				</div>
			))}
			</div>
		</Page>
	)
}

export async function getServerSideProps({res}) {
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=10, stale-while-revalidate=59'
	  )
	// GLOBAL LAYOUT
	var data = [];
	const response = await fetch(`${Constant.CMS_URL}/articles`);
	const json = await response.json();
	data = json;

	return { props: { data } };
}
