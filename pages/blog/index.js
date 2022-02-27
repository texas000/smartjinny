import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Page from "../../component/Page";

export async function getServerSideProps({ req }) {
	return {
		props: {},
	};
}

const Post = (props) => {
	const [data, setData] = useState(false);
	useEffect(() => {
		getData();
		const raw = Cookies.get("user_session");
		const token = jwt.decode(raw);
		// console.log(token);
	}, []);
	async function getData() {
		const getPosts = await fetch("/api/blog/getPosts");
		const postRes = await getPosts.json();
		if (getPosts.ok) {
			setData(postRes);
		}
	}
	if (!data) return <div>loading...</div>;
	const router = useRouter();
	return (
		<Page>
			<div
				className="
        relative
        z-10
        pt-[120px]
        md:pt-[130px]
        lg:pt-[160px]
        pb-[50px]
        bg-primary
        overflow-hidden
      "
			>
				<div className="container">
					<div className="flex flex-wrap items-center -mx-4">
						<div className="w-full px-4">
							<div className="text-center">
								<h1 className="font-semibold text-white text-4xl">Blog</h1>
							</div>
						</div>
					</div>
				</div>
				<div>
					<span className="absolute top-0 left-0 z-[-1]">
						<svg
							width="495"
							height="470"
							viewBox="0 0 495 470"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="55"
								cy="442"
								r="138"
								stroke="white"
								strokeOpacity="0.04"
								strokeWidth="50"
							/>
							<circle
								cx="446"
								r="39"
								stroke="white"
								strokeOpacity="0.04"
								strokeWidth="20"
							/>
							<path
								d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
								stroke="white"
								strokeOpacity="0.08"
								strokeWidth="12"
							/>
						</svg>
					</span>
					<span className="absolute top-0 right-0 z-[-1]">
						<svg
							width="493"
							height="470"
							viewBox="0 0 493 470"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="462"
								cy="5"
								r="138"
								stroke="white"
								strokeOpacity="0.04"
								strokeWidth="50"
							/>
							<circle
								cx="49"
								cy="470"
								r="39"
								stroke="white"
								strokeOpacity="0.04"
								strokeWidth="20"
							/>
							<path
								d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
								stroke="white"
								strokeOpacity="0.06"
								strokeWidth="13"
							/>
						</svg>
					</span>
				</div>
			</div>
			<div className="m-3 p-3">
				{data.map((ga) => (
					<blockquote
						key={ga._id}
						className="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow mb-2 hover:bg-gray-100 cursor-pointer"
						onClick={() => router.push(`/blog/${ga._id}`)}
					>
						<div className="flex flex-col pr-8">
							<div className="relative pl-12">
								<svg
									className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 100 125"
								>
									<path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
								</svg>
								<p className="mt-2 text-md text-gray-600 sm:text-base lg:text-lg xl:text-lg">
									{ga.title}
								</p>
							</div>

							<h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-base">
								{new Date(ga.created).toLocaleDateString()}
								{/* <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
									- CEO SomeCompany
								</span> */}
							</h3>
						</div>
						<img
							className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24"
							src="/images/smartjinny.jpg"
							alt=""
						/>
						<button
							onClick={() =>
								fetch(`/api/blog/deletePost?id=${ga._id}`).then(() => getData())
							}
							className="absolute right-0 top-0 mt-5"
						>
							Delete
						</button>
					</blockquote>
				))}
				{/* <ul key={ga._id} className="text-2xl">
						<li onClick={() => router.push(`/blog/${ga._id}`)}>{ga.title}</li>
						<li>
							<button
								onClick={() =>
									fetch(`/api/blog/deletePost?id=${ga._id}`).then(() =>
										getData()
									)
								}
							>
								Delete
							</button>
						</li>
					</ul> */}
			</div>
		</Page>
	);
};

export default Post;
