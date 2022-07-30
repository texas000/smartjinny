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
				<p className="text-white font font-bold tracking-tight">
					THE MOST SECURE WEBSITE, SMARTJINNY
				</p>
				
				<Typography variant="body2" color="text.secondary" className="text-white font font-thin">
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
