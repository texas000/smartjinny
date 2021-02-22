import styles from "../../component/Blog/blog.module.css";
import marked from "marked";
import Head from "next/head";
import Navbar from "../../component/Navbar";

function Page({ data, Title }) {
	const a = Buffer.from(data.content, "base64").toString();
	const content = marked(decodeURIComponent(a));
	return (
		<div className="container">
			<Head>
				<title>{Title}</title>
				<meta name="description" content={Title}></meta>
				<meta name="robots" content="index, follow" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Faster+One&family=Gochi+Hand&family=Heebo:wght@100;200;400;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Navbar />
			<div className={styles.contents + " container my-4 py-4 shadow-sm"}>
				<p className="text-right">{data.size} bytes of reading</p>
				<article dangerouslySetInnerHTML={{ __html: content }}></article>
			</div>
		</div>
		// <p>{JSON.stringify(data)}</p>
	);
}

// This gets called on every request
export async function getServerSideProps({ params, query }) {
	// console.log(params);
	// Fetch data from external API
	// console.log(query);
	const res = await fetch(
		`${process.env.MAIN_REPO_API}/git/blobs/${params.id}`
	);
	const data = await res.json();
	// Pass data to the page via props
	return { props: { data, Title: query.title } };
}

export default Page;
