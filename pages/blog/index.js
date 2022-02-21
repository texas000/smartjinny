import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = () => {
	const [data, setData] = useState(false);
	useEffect(() => {
		getData();
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
		<div>
			{data.map((ga) => (
				<ul key={ga._id}>
					<li onClick={() => router.push(`/blog/${ga._id}`)}>{ga._id}</li>
					<li>
						<button
							onClick={() =>
								fetch(`/api/blog/deletePost?id=${ga._id}`).then(() => getData())
							}
						>
							Delete
						</button>
					</li>
				</ul>
			))}
		</div>
	);
};
export default Post;
