import React from "react";
import { Grid, Stack, Typography, styled } from "@mui/material";
import { GlobalSpacing, SectionContent, SectionHeader } from "../../components/layout/common";

const FourthSection = () => {
	return (
		<GlobalSpacing>
			<Grid container>
				<Grid item xs={12} lg={9}>
					<Stack height="100%" direction="column">
						<SectionHeader>
							<Typography variant="h2">
								Benefits
							</Typography>
						</SectionHeader>

						<SectionContent>
							<Typography variant="h6">
								At Voiled, we stand out as a community dedicated to nurturing everybody's skill, creativity, and collaboration.
								By joining us, you'll be receiving:
							</Typography>

							<Typography variant="h6">
								- Opportunities & Career boosts: As you master your skills in Voiled while gaining revenue, you'll be getting better job and business opportunities with our vast array of connections.
							</Typography>

							<Typography variant="h6">
								- Portfolio Enhancements & Certificates: You'll be able to show off your works for Voiled in the special parts of your portfolio, signifying how good your performance is at a working organization. You'll be able to nurture your skills and have something to show for it.
							</Typography>

							<Typography variant="h6">
								- You'll be experiencing how it feels exactly to be inside the job / business you want to have.
							</Typography>
						</SectionContent>
					</Stack>
				</Grid>

				<Grid item xs={12} lg={3}>
					<Stack height="100%" direction="column">
						<CustomSectionHeader>
							<Typography variant="h2">
								Experience
							</Typography>
						</CustomSectionHeader>

						<CustomSectionContent>
							<Typography variant="h6">
								ruff grrr arf bark bark barkbark ruff barkbark arf ruff arf barkbark grrr arf barkbark arf arf grrr bark arf woof bark woof barkbark grrrruff grrr arf bark bark barkbark ruff barkbark arf ruff arf barkbark grrr arf barkbark arf arf grrr
							</Typography>
						</CustomSectionContent>
					</Stack>
				</Grid>
			</Grid>
		</GlobalSpacing>
	)
}

const CustomSectionHeader = styled(SectionHeader)(({ theme }) => ({
	[theme.breakpoints.up("lg")]: {
		borderLeft: 0,
	},

	[theme.breakpoints.down("lg")]: {
		borderTop: 0,
	},
}))

const CustomSectionContent = styled(SectionContent)(({ theme }) => ({
	[theme.breakpoints.up("lg")]: {
		borderLeft: 0,
	}
}))

export { FourthSection };