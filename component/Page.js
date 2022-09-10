import Head from "next/head";
import Script from "next/script";
import Footer from "./Global/Footer";
import Navbar from "./Global/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#0052cc",
		},
		secondary: {
			main: "#edf2ff",
		},
		success: {
			main: "#008000",
		},
	},
	typography: {
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

export default function Page({ children, title, description }) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>{title || "SMARTJINNY"}</title>
				<meta
					name="description"
					content={
						description ||
						"Default Description"
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
						"Default Description"
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

			<SnackbarProvider
				maxSnack={3}
				anchorOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
			>
				<Navbar />
				{children}
			</SnackbarProvider>
			<Footer />
		</ThemeProvider>
	);
}
