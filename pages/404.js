import Head from "next/head";

export default function Error({}) {
	return (
		<div
			className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-indigo-600
    to-blue-400
  "
		>
			<Head>
				<title>{"Smartjinny"}</title>
				<meta
					name="description"
					content={
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
						"Smartjinny, Professional Software Developer Portfolio Website"
					}
				></meta>
				<link rel="icon" href="/assets/images/favicon.png" />
			</Head>
			<div className="px-40 py-20 bg-white rounded-md shadow-xl">
				<div className="flex flex-col items-center">
					<h1 className="font-bold text-blue-600 text-9xl">404</h1>

					<h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
						<span className="text-red-500">Oops!</span> Page not found
					</h6>

					<p className="mb-8 text-center text-gray-500 md:text-lg">
						The page you’re looking for doesn’t exist.
					</p>

					<a
						href="/"
						className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
					>
						Go home
					</a>
				</div>
			</div>
		</div>
	);
}

