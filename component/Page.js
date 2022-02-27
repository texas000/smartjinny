import Header from "./Header";
import Head from "next/head";
import { Fragment } from "react";
export default function Page({ children, title, description }) {
	return (
		<Fragment>
			<Head>
				<title>{title || "Smartjinny"}</title>
				<meta
					name="description"
					content={
						description ||
						"Smartjinny, Professional Software Developer Portfolio Website"
					}
				></meta>
				<meta property="og:site_name" content="SMARTJINNY" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="SMARTJINNY" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="index, follow" />
				<meta property="og:url" content="https://smartjinny.com"></meta>
				<meta
					property="og:image"
					content="https://smartjinny.com/images/smartjinny.jpg"
				></meta>
				<meta
					property="og:description"
					content={
						description ||
						"Smartjinny, Professional Software Developer Portfolio Website"
					}
				></meta>
				<link rel="icon" href="/assets/images/favicon.png" />
			</Head>

			<Header />
			{children}
		</Fragment>
	);
}
