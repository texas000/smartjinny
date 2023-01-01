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
import { Button, Card, Grid, Popover, Skeleton } from "@mui/material";

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

function CardResult({ id, title, sub, path, raw, detail }) {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const rawId = open ? "simple-popover" : undefined;
	return (
		<Box key={id}>
			<Card variant="outlined" sx={{ boxShadow: 3, margin: 2, padding: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={8}>
						<Button
							variant="outlined"
							color="secondary"
							disabled={!path}
							onClick={() => {
								window.open(path, "_blank");
							}}
						>
							{title}
						</Button>
					</Grid>
					<Grid item xs={4} display="flex" justifyContent="flex-end">
						<Button
							variant="text"
							color="secondary"
							aria-describedby={rawId}
							onClick={handleClick}
						>
							Raw Data
						</Button>
						<Popover
							id={rawId}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							sx={{ overflow: "scroll" }}
						>
							<Typography sx={{ p: 2, fontFamily: "monospace" }}>
								{raw}
							</Typography>
						</Popover>
					</Grid>
					<Grid item xs={4}>
						<Typography>{sub}</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography>{detail}</Typography>
					</Grid>
				</Grid>
			</Card>
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
	const { data: related } = useSWR(
		query ? `/api/search/related?q=${encodeURIComponent(query)}` : null,
		fetcher
	);
	const { data: wiki } = useSWR(
		query ? `/api/wikiSearch?q=${query}` : null,
		fetcher
	);
	const { data: customer } = useSWR(
		query ? `/api/mongo/search?query=${query}` : null,
		fetcher
	);

	const { data: dict } = useSWR(
		query
			? `https://api.dictionaryapi.dev/api/v2/entries/en_US/${encodeURIComponent(
					query
			  )}`
			: null,
		fetcher
	);
	// useEffect(() => {
	// 	console.log(related);
	// }, [related]);

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
					<Typography variant="h4" component="h1" gutterBottom>
						{`Search result for "${query}"`}
					</Typography>
					{related?.default?.rankedList[1]?.rankedKeyword.length ? (
						related?.default?.rankedList[1]?.rankedKeyword?.map((ga) => (
							<li key={ga.query}>{ga.query}</li>
						))
					) : (
						<>
							<Skeleton
								variant="rectangular"
								className="my-2"
								width={510}
								height={10}
								animation="wave"
							/>
							<Skeleton
								variant="rectangular"
								className="my-2"
								width={510}
								height={10}
								animation="wave"
							/>
							<Skeleton
								variant="rectangular"
								className="my-2"
								width={510}
								height={10}
								animation="wave"
							/>
						</>
					)}

					<Typography variant="p" gutterBottom>
						{`${git?.items?.length} Search results found in Github`}
					</Typography>
					{customer?.map(({ _id, username, name, address, email }, i) => (
						<CardResult
							key={_id}
							id={_id}
							title={name}
							path={address}
							sub={username}
							detail={email}
							raw={JSON.stringify(customer[i])}
						/>
					))}
					<Typography variant="p" gutterBottom>
						<div
							dangerouslySetInnerHTML={{ __html: wiki?.parse?.text["*"] }}
						></div>
						{/* {wiki?.parse?.text["*"]} */}
					</Typography>
					{git?.items?.map(({ sha, name, html_url, path, repository }, i) => (
						<CardResult
							id={sha}
							title={name}
							path={html_url}
							sub={repository.name}
							detail={path}
							raw={JSON.stringify(git?.items[i])}
						/>
					))}
					{dict &&
						dict.length &&
						dict?.map(({ word, meanings, phonetic }) =>
							meanings?.map(({ definitions }, i) => (
								<CardResult
									id={i}
									title={word}
									path={false}
									sub={phonetic}
									detail={definitions[0].definition}
									raw={JSON.stringify(definitions)}
								/>
							))
						)}
				</Container>
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
