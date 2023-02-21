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
import { Button, Card, Chip, Grid, Popover, Skeleton } from "@mui/material";

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
							disabled={!path}
							onClick={() => {
								window.open(path, "_blank");
							}}
						>
							<img src={`https://s2.googleusercontent.com/s2/favicons?domain=${path}&sz=32`} />
							<div dangerouslySetInnerHTML={{__html : title}}/>
						</Button>
					</Grid>
					<Grid item xs={4} display="flex" justifyContent="flex-end">
						<Button
							variant="text"
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
							<div dangerouslySetInnerHTML={{__html : sub}}/>
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

	const { data: naver } = useSWR(
		query
			? `/api/search/blog?query=${encodeURIComponent(
					query
			  )}`
			: null,
		fetcher
	);

	const { data: photo } = useSWR(
		query
			? `/api/search/unsplash?q=${encodeURIComponent(
					query
			  )}`
			: null,
		fetcher
	);
	// useEffect(() => {
	// 	console.log(duck);
	// }, [duck]);

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
            <div className="overflow-x-auto flex">
              {related?.default?.rankedList[1]?.rankedKeyword?.map((ga) => (
                <Chip
                  key={ga.query}
                  className="mr-1 mb-1"
                  onClick={() =>
                    router.push(`/search?q=${encodeURIComponent(ga.query)}`)
                  }
                  label={ga.query}
                />
              ))}
            </div>
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

			{photo?.results?.map(ga=>(
			<div key={ga.id}>
				<img src={ga.urls.small_s3}/>
			</div>
		  ))}
          
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
		  {naver?.items?.map(({title, link, description, bloggername}, i) => (
			<CardResult
              id={link}
              title={title}
              path={link}
              sub={description}
              detail={bloggername}
              raw={JSON.stringify(naver?.items[i])}
            />
		  ))}
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
