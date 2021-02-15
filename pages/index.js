import Head from "next/head";
import data from "../public/data";
import Header from "../component/Homepage/Header";
import About from "../component/Homepage/About";
import Work from "../component/Homepage/Work";
import Skills from "../component/Homepage/Skills";
import Footer from "../component/Homepage/Footer";
import React, { useState } from "react";
import marked from "marked";

export default function Home({ github, readme }) {
	const [content, setContent] = useState(false);
	React.useEffect(() => {
		setContent(marked(decodeURIComponent(escape(window.atob(readme.content)))));
	}, []);
	return (
		<div className="container">
			<Head>
				<title>Smartjinny</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Faster+One&family=Gochi+Hand&family=Heebo:wght@100;200;400;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Header />
			<About readme={content} />
			<Work />
			<Skills />
			{/* <Footer/> */}
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
	const res = await fetch("https://api.github.com/repos/texas000/texas000");
	const json = await res.json();

	const resReadMe = await fetch(
		"https://api.github.com/repos/texas000/texas000/readme"
	);
	const readMe = await resReadMe.json();
	return { github: json, readme: readMe };
};
