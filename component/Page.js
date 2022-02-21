import Header from "./Header";
import Head from "next/head";

export default function Page(props) {
	return (
		<div>
			<Head>
				<title>{props.title || "Smartjinny"}</title>
				<meta
					name="description"
					content="Smartjinny, Professional Software Developer Portfolio Website"
				></meta>
				<meta property="og:site_name" content="SMARTJINNY" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="SMARTJINNY" />

				<meta name="robots" content="index, follow" />
				<meta property="og:url" content="https://smartjinny.com"></meta>
				<meta
					property="og:image"
					content="https://smartjinny.com/images/smartjinny.jpg"
				></meta>
				<meta
					property="og:description"
					content="Smartjinny, Professional Software Developer Portfolio Website"
				></meta>
				<link rel="icon" href="/assets/images/favicon.png" />
			</Head>
			<Header />

			{props.children}
		</div>
	);
}
