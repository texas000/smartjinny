import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Page from "../component/Page";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import useSWR from "swr";
import { useEffect } from "react";
import { Grid } from "@mui/material";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary">
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

function CardResult({ id, title, sub, path, raw }) {
	return (
		<Box key={id}>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<Typography>{title}</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography>{sub}</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography>xs=4</Typography>
				</Grid>
				<Grid item xs={8}>
					<Typography>xs=8</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}

export default function Home({ query }) {
	const router = useRouter();
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data: git } = useSWR(
		query
			? `https://api.github.com/search/code?q=${decodeURIComponent(
					`${query} user:texas000`
			  )}`
			: null,
		fetcher
	);
	useEffect(() => {
		console.log(git);
	}, [git]);
	const { data: dict } = useSWR(
		query
			? `https://api.dictionaryapi.dev/api/v2/entries/en_US/${encodeURIComponent(
					query
			  )}`
			: null,
		fetcher
	);

	return (
		<Page title={"SEARCH"}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
				}}
			>
				<CssBaseline />
				<Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
					<Typography variant="h2" component="h1" gutterBottom>
						{JSON.stringify(query)}
					</Typography>

					{git?.items.map(({ sha, name, git_url, score }) => (
						<CardResult id={sha} title={name} sub={score} path={git_url} />
					))}

					{/* {JSON.stringify(git)} */}
					{/* {JSON.stringify(dict)} */}
					{/* <Typography variant="h5" component="h2" gutterBottom>
						{"Pin a footer to the bottom of the viewport."}
						{"The footer will move as the main element of the page grows."}
					</Typography> */}
					{/* <Typography variant="body1">Sticky footer placeholder.</Typography> */}
				</Container>
				<Box
					component="footer"
					sx={{
						py: 3,
						px: 2,
						mt: "auto",
						backgroundColor: (theme) =>
							theme.palette.mode === "light"
								? theme.palette.grey[200]
								: theme.palette.grey[800],
					}}
				>
					<Container maxWidth="sm">
						<Typography variant="body1">
							My sticky footer can be found here.
						</Typography>
						<Copyright />
					</Container>
				</Box>
			</Box>
		</Page>
	);
}

// This gets called on every request
export async function getServerSideProps(context) {
	var query = context.query?.q || null;
	// Pass data to the page via props
	return { props: { query } };
}
