import { Box } from "@mui/system";

export default function Home({}) {
	return (
		<Box
			sx={{
				width: 300,
				height: 300,
				backgroundColor: "primary.dark",
				"&:hover": {
					backgroundColor: "primary.main",
					opacity: [0.9, 0.8, 0.7],
				},
			}}
		>
			<h1>Hello</h1>
		</Box>
	);
}
