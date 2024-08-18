import React from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { GlobalSpacing } from "../../components/layout/common";

const SeventhSection = () => {
	return (
		<GlobalSpacing>
			<SectionSpacing>
				<Stack direction="row" justifyContent="center">
					<PrimaryBtn>
						<Typography variant="h5">JOIN US</Typography>
					</PrimaryBtn>
				</Stack>

				<Typography variant="h1">
					Sign up to the newsletter!
				</Typography>

				<Stack gap={1} direction="row">
					<CustomTextField placeholder="Email Address" defaultValue="" />

					<PrimaryBtn>
						<Typography variant="h5">Contact Us</Typography>
					</PrimaryBtn>
				</Stack>
			</SectionSpacing>
		</GlobalSpacing>
	)
}

const SectionSpacing = styled(Stack)(({ theme }) => ({
	gap: 30,
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-evenly",

	padding: 80,
	paddingRight: 0,
	marginBottom: 40,

	[theme.breakpoints.down('lg')]: {
		gap: 20,
		padding: 50,
		paddingRight: 0,
	},

	[theme.breakpoints.down('md')]: {
		padding: 25,
		paddingRight: 0,
	},

	[theme.breakpoints.down('sm')]: {
		h1: {
			fontSize: 28,
		}
	},
}))

const PrimaryBtn = styled(Stack)(({ theme }) => ({
	cursor: "pointer",
	borderRadius: 10,
	padding: "5px 15px",
	backgroundColor: theme.palette.common.primaryColor,
	border: `3px solid ${theme.palette.common.primaryColor}`,

	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
}))

const CustomTextField = styled(TextField)(({ theme }) => ({
	flex: 1,
	maxWidth: 500,

	'.MuiInputBase-root': {
		backgroundColor: theme.palette.common.white,
	},

	input: {
		color: theme.palette.common.black
	}
}))

export { SeventhSection };