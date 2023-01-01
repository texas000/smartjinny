import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import {
	AppBar,
	Avatar,
	Box,
	Container,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
	InputBase,
	Menu,
	MenuItem,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Drawer,
	Autocomplete,
	TextField
} from "@mui/material";
import { useState } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useRouter } from "next/router";
import { GNB } from "../../common/constant";
import useSWR from "swr";
import { useEffect } from "react";

const Search = styled("form")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	height: "80%",
	[theme.breakpoints.up("lg")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const Field = styled(TextField)(({ theme }) => ({
	"& .MuiInputBase-input": {
		padding: theme.spacing(2, 2, 2, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

export default function Navbar() {
	const [anchorEl, setAnchorEl] = useState(null);
	const [sideMenu, setSideMenu] = useState(false);
	const router = useRouter();
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const [searchQuery, setSearchQuery] = useState("");
	const { data } = useSWR(
		searchQuery
			? `/api/search/autoComplete?q=${encodeURIComponent(searchQuery)}`
			: null,
		fetcher
	);	
	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setSideMenu(open);
	};

	const list = (anchor) => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{["HOME"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton href="/">
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{GNB.map((ga) => (
					<ListItem key={ga.path} disablePadding>
						<ListItemButton href={ga.path}>
							<ListItemText primary={ga.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const isMenuOpen = Boolean(anchorEl);
	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar
					elevation={0}
					position="static"
					style={{ alignItems: "center", background: "#fff" }}
				>
					<Container maxWidth="xl">
						<Toolbar
							disableGutters
							variant="dense"
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "100%",
							}}
						>
							<IconButton
								size="large"
								edge="start"
								aria-label="open drawer"
								sx={{ mr: 2 }}
								onClick={toggleDrawer(true)}
							>
								<MenuIcon />
							</IconButton>

							<Avatar
								onClick={() => router.push("/")}
								className="focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer"
								variant="square"
								sx={{
									height: "40px",
									width: "40px",
									backgroundColor: "white",
									display: { xs: "none", md: "flex" },
									mr: 1,
								}}
								src="/assets/images/favicon.png"
							/>

							{/* <Search sx={{ mr: 2 }}>
								<SearchIconWrapper>
									<SearchIcon />
								</SearchIconWrapper>
								<StyledInputBase
									placeholder="Search…"
									inputProps={{ "aria-label": "search" }}
									onChange={(e) => setSearchQuery(e.target.value)}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											if (e.target.value) {
												router.push(
													`/search?q=${encodeURIComponent(e.target.value)}`
												);
											}
										}
									}}
								/>
							</Search> */}
							<Search onSubmit={(e)=>{
								e.preventDefault();
								if(e.nativeEvent.type=="submit") {
									router.push(
										`/search?q=${encodeURIComponent(e.target[0].value)}`
									);
								}
							}}>
							<Autocomplete
								id="free-solo-demo"
								freeSolo
								options={data ? data.default?.topics?.map((option) => option?.title) : []}
								sx={{ width: 300 }}
								onInputChange={(e,v)=> {
									console.log(e)
									setSearchQuery(v)
									if(e.type=="click") {
										router.push(`/search?q=${encodeURIComponent(v)}`);
									}
								}}
								renderInput={(params) => <Field {...params}  label="Search" variant="outlined" fullWidth  />}
							/>
							</Search>
							{/* <Box>
								<Tooltip title="Open settings">
									<IconButton
										size="large"
										edge="end"
										aria-label="account of current user"
										aria-controls={menuId}
										aria-haspopup="true"
										onClick={handleProfileMenuOpen}
										color="inherit"
									>
										<AccountCircle />
									</IconButton>
								</Tooltip>
							</Box> */}
						</Toolbar>
					</Container>
				</AppBar>
				{renderMenu}
			</Box>

			<Drawer anchor="left" open={sideMenu} onClose={toggleDrawer(false)}>
				{list()}
			</Drawer>
		</>
	);
}
