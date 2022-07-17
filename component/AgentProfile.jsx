import {
	Avatar,
	Backdrop,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Dialog,
	DialogContent,
	DialogTitle,
	ListItemButton,
	ListItemText,
	ThemeProvider,
	Typography,
	useMediaQuery,
} from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import PhoneIcon from "@mui/icons-material/Phone";
import LaunchIcon from "@mui/icons-material/Launch";
import { useTheme } from "@mui/material/styles";
import useSWR from "swr";

export default function AgentProfile({ loading, open, handleClose }) {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data } = useSWR("/api/agent/list", fetcher);
	const { data: zip } = useSWR(`/api/zipcode?ip=${data?.browser?.ip}`, fetcher);
	const { data: device } = useSWR(
		`/api/getDevice?agent=${data?.browser?.user_agent}`,
		fetcher
	);
	const DataList = ({ text, title }) => (
		<ListItemButton
			sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
		>
			{title && (
				<ListItemText
					primary={title}
					primaryTypographyProps={{
						fontSize: 14,
						fontWeight: "bold",
					}}
				/>
			)}
			<ListItemText
				primary={text}
				primaryTypographyProps={{
					fontSize: 14,
					fontWeight: "medium",
				}}
			/>
		</ListItemButton>
	);
	return (
		<Box>
			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
				// TransitionComponent={Transition}
			>
				{data ? (
					<>
						<DialogTitle>Agent Information</DialogTitle>
						<DialogContent>
							<Card>
								<CardHeader
									avatar={<Avatar src={data?.avatar} />}
									title={data?.name}
									subheader={data?.email}
								></CardHeader>
								<CardContent>
									<ListItemButton>
										<ListItemText
											primary={data?.username}
											secondary={data?.password}
										></ListItemText>
										<KeyboardArrowDown />
									</ListItemButton>
									<DataList
										title="Agent Identification"
										text={`${data?.uuid}`}
									/>
									<DataList
										title="Address"
										text={`${data?.street}, ${zip?.zip?.city || ""}, ${
											zip?.zip?.state || ""
										} ${zip?.zip?.zip || ""} ${zip?.zip?.country || ""}`}
									/>
									<DataList title="Phone" text={`${data?.phone}`} />
									<DataList
										title="Date of Birth"
										text={`${new Date(data?.birth).toLocaleDateString()}`}
									/>
									<DataList
										title="Vehicle"
										text={`${data?.vehicle?.name} (${data?.vehicle?.vin})`}
									/>
									<DataList
										title="Access"
										text={`${data?.browser?.ip}:${data?.browser?.port}`}
									/>
									<DataList
										title="Access Expiration"
										text={`${new Date(data?.browser?.expire).toISOString()}`}
									/>
									<DataList
										title="Browser"
										text={`${device?.browser_family} ${device?.client?.type}`}
									/>
									<DataList
										title="Device"
										text={`${device?.os?.name} ${device?.device?.type}`}
									/>

									{/* <Typography variant="body2">{JSON.stringify(data)}</Typography> */}
								</CardContent>
								<CardActions>
									<Button disabled startIcon={<PhoneIcon />} color="secondary">
										Call
									</Button>
									<Button
										startIcon={<LaunchIcon />}
										color="secondary"
										onClick={() => {
											var bool = window.confirm(
												"The system is only accessible within internal network, would you like to proceed?"
											);
											if (bool) {
												window.open(
													`https://${data?.browser?.ip}:${data?.browser?.port}`,
													"__blank"
												);
											}
										}}
									>
										See Detail
									</Button>
								</CardActions>
							</Card>
						</DialogContent>
					</>
				) : (
					<Backdrop
						sx={{
							color: "#fff",
						}}
						open={true}
					></Backdrop>
				)}
			</Dialog>
		</Box>
	);
}
