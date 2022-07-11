import Head from "next/head";
import { Fragment } from "react";
import Script from "next/script";
import Footer from "./Global/Footer";
import Navbar from "./Global/Navbar";

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
			<Script id="google-tag-manager" strategy="afterInteractive">
				{`
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-T5KW8HH');
	`}
			</Script>
			<noscript>
				<iframe
					src="https://www.googletagmanager.com/ns.html?id=GTM-T5KW8HH"
					height="0"
					width="0"
					style={{ display: "none", visibility: "hidden" }}
				></iframe>
			</noscript>

			<Navbar />
			{children}

			<Footer />
		</Fragment>
	);
}
