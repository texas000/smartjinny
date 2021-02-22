import styles from "../../component/Blog/blog.module.css";
import marked from "marked";
import Head from "next/head";
import Navbar from "../../component/Navbar";
import { useEffect } from "react";
function Page({ Blog }) {
	useEffect(() => {
		console.log(Blog);
	}, []);
	return (
		<div className="container">
			<Head>
				<title>Blog</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Faster+One&family=Gochi+Hand&family=Heebo:wght@100;200;400;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Navbar />
			<div
				className="list-group mt-4 shadow"
				style={{ fontFamily: "Gochi Hand" }}
			>
				{Blog.map((ga) => (
					<a
						href={`/blog/${ga.sha}`}
						key={ga.sha}
						className="list-group-item list-group-item-action flex-column align-items-start shadow-sm"
					>
						<div className="d-flex w-100 justify-content-between mt-1">
							<h5>{ga.name}</h5>
							<div>
								<a target="_blank" href={ga.download_url}>
									<img
										className="mx-2"
										src="/images/github.svg"
										width="25"
										height="25"
									/>
								</a>
								<small>{ga.size}B</small>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}

// This gets called on every request
export async function getServerSideProps({ params }) {
	const gitCredential = Buffer.from(
		`${process.env.GIT_CLIENT_ID}:${process.env.GIT_CLIENT_SECRTE}`,
		"binary"
	).toString("base64");

	// Fetch data from external API
	const resBlog = await fetch(process.env.MAIN_REPO_API + "/contents/blog", {
		headers: { Authorization: `Basic ${gitCredential}` },
	});
	var Blog = await resBlog.json();
	if (typeof Blog === "object") Blog.reverse();
	// Pass data to the page via props
	return { props: { Blog } };
}

export default Page;
