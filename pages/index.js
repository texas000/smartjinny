import Head from "next/head";
import data from "../public/data";
import Header from "../component/Homepage/Header";
import About from "../component/Homepage/About";
import Work from "../component/Homepage/Work";
import Skills from "../component/Homepage/Skills";
import Footer from "../component/Homepage/Footer";
import React, { useState } from "react";
import marked from "marked";
import { useRouter } from "next/router";
import Navbar from "../component/Navbar";

export default function Home({ github, readme }) {
	const router = useRouter();
	const [content, setContent] = useState(false);

	React.useEffect(() => {
		setContent(marked(decodeURIComponent(escape(window.atob(readme.content)))));
	}, []);
	return (
		<div className="container">
			<Head>
				<title>Smartjinny</title>
				<meta
					name="description"
					content="Smartjinny, Professional Software Developer Portfolio Website"
				></meta>
				<meta name="robots" content="index, follow" />
				<meta property="og:title" content="Smartjinny"></meta>
				<meta property="og:url" content="https://smartjinny.com"></meta>
				<meta property="og:image" content="https://smartjinny.com/images/smartjinny.png"></meta>
				<meta property="og:description" content="Smartjinny, Professional Software Developer Portfolio Website"></meta>
				<meta name="og:description" content="Smartjinny, Professional Software Developer Portfolio Website"></meta>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Faster+One&family=Gochi+Hand&family=Heebo:wght@100;200;400;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Navbar />
			<Header />
			<About readme={content} />

			<Work />
			<Skills />
			<Footer/>
			<style jsx global>{`
				html,
				body {
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}
			`}</style>
		</div>
	);
}

Home.getInitialProps = async (ctx) => {
	const gitCredential = Buffer.from(
		`${process.env.GIT_CLIENT_ID}:${process.env.GIT_CLIENT_SECRTE}`,
		"binary"
	).toString("base64");

	const res = await fetch(process.env.MAIN_REPO_API, {
		headers: { Authorization: `Basic ${gitCredential}` },
	});
	const json = await res.json();

	const resReadMe = await fetch(process.env.MAIN_REPO_API + "/readme", {
		headers: { Authorization: `Basic ${gitCredential}` },
	});
	const readMe = await resReadMe.json();

	return { github: json, readme: readMe };
};
