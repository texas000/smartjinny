import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Page from "../component/Page";

export default function Home({}) {
	const router = useRouter();
	return (
		<Page title="Home">
			{/* <!-- ====== Hero Section Start --> */}
			<h1>Hello</h1>
			{/* <!-- ====== Faq Section End --> */}
		</Page>
	);
}
