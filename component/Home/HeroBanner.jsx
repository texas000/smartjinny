import {
	Alert,
	Button,
	Grid,
	Link,
	ListItemButton,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { publicIpv4 } from "public-ip";
import { useEffect } from "react";
import AgentProfile from "../AgentProfile";
import { useSnackbar } from "notistack";
import HomeCanvas from "./HomeCanvas";

export default function HeroBanner({ title, mTitle }) {
	const matches = useMediaQuery("(min-width:600px)");
	const [Ip, setIp] = React.useState(null);
	const [agent, setAgent] = React.useState(false);
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		getip();
	}, []);

	async function getip() {
		var ip = await publicIpv4();
		const fetchGeo = await fetch(`/api/zipcode?ip=${ip}`);
		if (fetchGeo.status === 200) {
			const geo = await fetchGeo.json();
			setIp(geo);
			enqueueSnackbar(`Hello from ${geo?.zip?.city}, ${geo?.zip?.state}`, {
				variant: "success",
			});
		} else {
			enqueueSnackbar(`Location Service Failed`, { variant: "danger" });
		}
		const fetchDevice = await fetch(`/api/getDevice`);
		if (fetchDevice.status === 200) {
			const device = await fetchDevice.json();
			enqueueSnackbar(`Using ${device.browser_family} on ${device.os.name}`, {
				variant: "success",
			});
		} else {
			enqueueSnackbar(`Device Service Failed`, { variant: "danger" });
		}
	}
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: "100%" }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<ListItemButton component="a">
				<ListItemText primary={Ip?.zip?.zip} secondary="Zip Code" />
			</ListItemButton>
			<ListItemButton component="a">
				<ListItemText primary={Ip?.zip?.city} secondary="City" />
			</ListItemButton>
			<ListItemButton component="a">
				<ListItemText primary={Ip?.zip?.state} secondary="State" />
			</ListItemButton>
			<ListItemButton component="a">
				<ListItemText primary={Ip?.zip?.country} secondary="Country" />
			</ListItemButton>
			<ListItemButton component="a">
				<ListItemText primary={Ip?.ip} secondary="IP Address" />
			</ListItemButton>
		</Box>
	);

	const post = {
		title: "Global ERP System",
		description:
			"We focused on developing new innovations across the globe. We are committed to providing global ERP system that help customers live better",
		image: "https://source.unsplash.com/random",
		imageText: "main image description",
		linkText: "Continue reading…",
	};
	return <HomeCanvas />;
	// return (
	// 	<Paper
	// 		square={true}
	// 		sx={{
	// 			position: "relative",
	// 			backgroundColor: "grey.800",
	// 			color: "#fff",
	// 			mb: 4,
	// 			backgroundSize: "cover",
	// 			backgroundRepeat: "no-repeat",
	// 			backgroundPosition: "center",
	// 			backgroundImage: `url(${post.image})`,
	// 		}}
	// 	>
	// 		<Box
	// 			sx={{
	// 				position: "absolute",
	// 				top: 0,
	// 				bottom: 0,
	// 				right: 0,
	// 				left: 0,
	// 				backgroundColor: "rgba(0,0,0,.3)",
	// 			}}
	// 		/>
	// 		<Grid container>
	// 			<Grid item md={6}>
	// 				<Box
	// 					sx={{
	// 						position: "relative",
	// 						minHeight: "30rem",
	// 						verticalAlign: "middle",
	// 						p: { xs: 5, md: 15 },
	// 						pr: { md: 0 },
	// 					}}
	// 				>
	// 					<Typography
	// 						component="h1"
	// 						variant="h3"
	// 						color="inherit"
	// 						className="font-bold"
	// 						gutterBottom
	// 					>
	// 						{post.title}
	// 					</Typography>
	// 					<Typography
	// 						variant="h5"
	// 						color="inherit"
	// 						paragraph
	// 						className="leading-relaxed text-lg"
	// 					>
	// 						{post.description}
	// 					</Typography>
	// 					<Button
	// 						variant="outlined"
	// 						sx={{ m: 2 }}
	// 						color="secondary"
	// 						onClick={toggleDrawer("bottom", true)}
	// 					>
	// 						Geo Location
	// 					</Button>

	// 					<SwipeableDrawer
	// 						anchor={"bottom"}
	// 						open={state["bottom"]}
	// 						onClose={toggleDrawer("bottom", false)}
	// 						onOpen={toggleDrawer("bottom", true)}
	// 					>
	// 						{list("bottom")}
	// 					</SwipeableDrawer>
	// 					<Button
	// 						variant="outlined"
	// 						sx={{ m: 2 }}
	// 						color="secondary"
	// 						onClick={() => setAgent(!agent)}
	// 					>
	// 						Agent List
	// 					</Button>
	// 					<AgentProfile
	// 						loading={false}
	// 						open={agent}
	// 						handleClose={() => setAgent(!agent)}
	// 					/>
	// 				</Box>
	// 			</Grid>
	// 		</Grid>
	// 	</Paper>
	// );
}
