import Head from "next/head";
// import Navbar from "../../component/Navbar";
import { useRouter } from "next/router";
function Page({ Blog }) {
	const router = useRouter();
	return (
		<div className="container">
			<Head>
				<title>Blog</title>
				<meta
					name="description"
					content="smartjinny software developer portfolio website"
				></meta>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Faster+One&family=Gochi+Hand&family=Heebo:wght@100;200;400;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			{/* <Navbar />
			<div
				className="list-group mt-4 shadow"
				style={{ fontFamily: "Gochi Hand" }}
			>
				{Blog.map((ga) => (
					<a
						href="#"
						onClick={() =>
							router.push({
								pathname: `/blog/${ga.sha}`,
								query: { title: ga.name },
							})
						}
						key={ga.sha}
						className="list-group-item list-group-item-action flex-column align-items-start shadow-sm"
					>
						<div className="d-flex w-100 justify-content-between mt-1">
							<h5>{ga.name}</h5>
							<div>
								<img
									className="mx-2"
									src="/images/github.svg"
									width="25"
									height="25"
								/>
								<small>{ga.size}B</small>
							</div>
						</div>
					</a>
				))}
			</div> */}
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
	console.log(Blog);
	if (typeof Blog === "object") Blog.reverse();
	// Pass data to the page via props
	return { props: { Blog } };
}

export default Page;
