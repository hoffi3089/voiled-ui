import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { GlobalSpacing } from "./common";

const Footer = () => {
	return (
		<FooterWrapper>
			<SectionSpacing>
				<Grid container spacing={2}>
					<Grid item xs={6} sm={6} md={4} xl={2.4}>
						<Typography variant="body2" className="header-title">
							Quick Link
						</Typography>

						<Typography variant="body1">Home</Typography>
						<Typography variant="body1">News</Typography>
						<Typography variant="body1">Our Team</Typography>
						<Typography variant="body1">About Us</Typography>
					</Grid>

					<Grid item xs={6} sm={6} md={4} xl={2.4}>
						<Typography variant="body2" className="header-title">
							Help
						</Typography>

						<Typography variant="body1">How to work</Typography>
						<Typography variant="body1">Lost Account</Typography>
						<Typography variant="body1">Change password</Typography>
						<Typography variant="body1">Report</Typography>
					</Grid>

					<Grid item xs={6} sm={6} md={4} xl={2.4}>
						<Typography variant="body2" className="header-title">
							Account
						</Typography>

						<Typography variant="body1">Settings</Typography>
						<Typography variant="body1">Profile</Typography>
						<Typography variant="body1">Upgrade</Typography>
					</Grid>

					<Grid item xs={6} sm={6} md={4} xl={2.4}>
						<Typography variant="body2" className="header-title">
							Contributors
						</Typography>

						<Typography variant="body1">Home</Typography>
						<Typography variant="body1">News</Typography>
						<Typography variant="body1">Our Team</Typography>
						<Typography variant="body1">About Us</Typography>
					</Grid>

					<Grid item xs={6} sm={6} md={4} xl={2.4}>
						<Typography variant="body2" className="header-title">
							Help
						</Typography>

						<Typography variant="body1">How to work</Typography>
						<Typography variant="body1">Lost Account</Typography>
						<Typography variant="body1">Change password</Typography>
						<Typography variant="body1">Report</Typography>
					</Grid>
				</Grid>

				<Typography variant="body1">
					© 2023 Voiled - All Rights Reserved.
				</Typography>
			</SectionSpacing>
		</FooterWrapper>
	)
}

const FooterWrapper = styled(GlobalSpacing)(({ theme }) => ({
	backgroundColor: theme.palette.common.thirdBg,
	border: `3px solid ${theme.palette.common.secondaryBorder}`,
	borderRadius: 5,

	'.header-title': {
		marginBottom: 10,
		color: theme.palette.common.primaryColor,
	},

	p: {
		marginBottom: 5,
		color: theme.palette.common.secondaryColor,
	},
}))

const SectionSpacing = styled(Stack)(({ theme }) => ({
	gap: 40,
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-evenly",

	padding: 80,
	paddingRight: 0,

	[theme.breakpoints.down('lg')]: {
		gap: 30,
		padding: 50,
		paddingRight: 0,
	},

	[theme.breakpoints.down('md')]: {
		gap: 20,
		padding: 25,
		paddingRight: 0,
	},
}))

export { Footer };