import { Typography, Box, Link, Container } from "@mui/material";

export default function Footer() {
	return (
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
					THE MOST SECURE WEBSITE
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{"Copyright © "}
					<Link color="inherit" href="/">
						SMARTJINNY
					</Link>{" "}
					{new Date().getFullYear()}
					{"."}
				</Typography>
			</Container>
		</Box>
	);
}
