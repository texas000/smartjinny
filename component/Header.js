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
} from "@mui/material";
import { useState } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
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

export default function Header() {
	const [anchorEl, setAnchorEl] = useState(null);
	const [sideMenu, setSideMenu] = useState(false);

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
				{["blog", "contact", "sign", "file"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton href={`/${text}`}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} className="uppercase" />
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
				<AppBar position="static">
					<Container maxWidth="xl">
						<Toolbar disableGutters>
							<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="open drawer"
								sx={{ mr: 2 }}
								onClick={toggleDrawer(true)}
							>
								<MenuIcon />
							</IconButton>
							<Typography
								variant="h6"
								noWrap
								component="a"
								href="/"
								sx={{
									mr: 2,
									display: { xs: "none", md: "flex" },
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: ".3rem",
									color: "inherit",
									textDecoration: "none",
								}}
							>
								<img
									src="/assets/images/logo/logo.svg"
									alt="logo"
									className="w-full header-logo"
								/>
							</Typography>

							<Search>
								<SearchIconWrapper>
									<SearchIcon />
								</SearchIconWrapper>
								<StyledInputBase
									placeholder="Search…"
									inputProps={{ "aria-label": "search" }}
								/>
							</Search>

							<Box sx={{ flexGrow: 0 }}>
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
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
				{renderMenu}
			</Box>

			<Drawer anchor="left" open={sideMenu} onClose={toggleDrawer(false)}>
				{list()}
			</Drawer>
			{/* <div className="ud-header sticky bg-transparent top-0 left-0 z-40 w-full flex items-center">
				<div className="container">
					<div className="flex -mx-4 items-center justify-between relative">
						<div className="px-4 w-60 max-w-full">
							<a href="/" className="navbar-logo w-full block py-5">
								<img
									src="/assets/images/logo/logo.svg"
									alt="logo"
									className="w-full header-logo"
								/>
							</a>
						</div>
						<div className="flex px-4 justify-between items-center w-full">
							<div>
								<button
									id="navbarToggler"
									className="
                  block
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  focus:ring-2
                  ring-primary
                  px-3
                  py-[6px]
                  rounded-lg
				  lg:hidden
                "
								>
									<span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
									<span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
									<span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
								</button>
								<nav
									id="navbarCollapse"
									className="
                  absolute
                  py-5
                  lg:py-0 lg:px-4
                  xl:px-6
                  bg-white
                  lg:bg-transparent
                  shadow-lg
                  rounded-lg
                  max-w-[250px]
                  w-full
                  lg:max-w-full lg:w-full
                  right-4
                  top-full
                  hidden
                  lg:block lg:static lg:shadow-none
                "
								>
									<ul className="blcok lg:flex">
										<li className="relative group">
											<a
												href="#home"
												className="
                        ud-menu-scroll
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0
                      "
											>
												Home
											</a>
										</li>
										<li className="relative group">
											<a
												href="#about"
												className="
                        ud-menu-scroll
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0 lg:ml-7
                        xl:ml-12
                      "
											>
												About
											</a>
										</li>
										<li className="relative group">
											<a
												href="#pricing"
												className="
                        ud-menu-scroll
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0 lg:ml-7
                        xl:ml-12
                      "
											>
												Pricing
											</a>
										</li>
										<li className="relative group">
											<a
												href="#team"
												className="
                        ud-menu-scroll
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0 lg:ml-7
                        xl:ml-12
                      "
											>
												Team
											</a>
										</li>
										<li className="relative group">
											<a
												href="#contact"
												className="
                        ud-menu-scroll
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0 lg:ml-7
                        xl:ml-12
                      "
											>
												Contact
											</a>
										</li>
										<li className="relative group submenu-item">
											<a
												href="#"
												className="
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4
                        flex
                        mx-8
                        lg:mr-0 lg:ml-8
                        xl:ml-12
                        relative
                        after:absolute
                        after:w-2
                        after:h-2
                        after:border-b-2
                        after:border-r-2
                        after:border-current
                        after:rotate-45
                        lg:after:right-0
                        after:right-1
                        after:top-1/2
                        after:-translate-y-1/2
                        after:mt-[-2px]
                      "
											>
												Pages
											</a>
											<div
												className="
                        submenu
                        hidden
                        relative
                        lg:absolute
                        w-[250px]
                        top-full
                        lg:top-[110%]
                        left-0
                        rounded-sm
                        lg:shadow-lg
                        p-4
                        lg:block lg:opacity-0 lg:invisible
                        group-hover:opacity-100
                        lg:group-hover:visible lg:group-hover:top-full
                        bg-white
                        transition-[top]
                        duration-300
                      "
											>
												<a
													href="about.html"
													className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
												>
													About Page
												</a>
												<a
													href="pricing.html"
													className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
												>
													Pricing Page
												</a>
												<a
													href="contact.html"
													className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
												>
													Contact Page
												</a>
												<a
													href="blog-grids.html"
													className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
												>
													Blog Grid Page
												</a>
												<a
													href="blog-details.html"
													className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
												>
													Blog Details Page
												</a>
												<a
													href="signup.html"
													className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
												>
													Sign Up Page
												</a>
												<a
													href="signin.html"
													className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
												>
													Sign In Page
												</a>
												<a
													href="404.html"
													className="
                          block
                          text-sm text-body-color
                          rounded
                          hover:text-primary
                          py-[10px]
                          px-4
                        "
												>
													404 Page
												</a>
											</div>
										</li>
									</ul>
								</nav>
							</div>
							<div className="sm:flex justify-end pr-16 lg:pr-0 my-1">
								<a
									href="/blog"
									className="
                  text-base
                  font-medium
                  text-white
                  bg-white bg-opacity-20
                  rounded-lg
                  py-3
                  lg:py-2
                  px-6
                  hover:bg-opacity-100 hover:text-dark
                  signUpBtn
                  duration-300
                  ease-in-out
                "
								>
									Blog
								</a>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</>
	);
}
