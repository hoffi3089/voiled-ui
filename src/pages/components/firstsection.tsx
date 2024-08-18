import React from "react";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { GlobalSpacing } from "../../components/layout/common";
import { heroImg } from "../../assets/image";

const FirstSection = () => {
	return (
		<FirstSectionWrapper>
			<FirstSectionContainer flex={1}>
				<SectionSpacing flex={1}>
					<Typography variant="h1">
						Instantly Hiring Anybody With any Kind of Skill
					</Typography>

					<Typography variant="h6">
						Voiled Organization: A community of freelancers and skilled individuals turning ideas into real-world victories. No heavy responsibilities or scary interviews. Gain experience with your skills comfortably and start working instantly!
					</Typography>

					<Stack gap={3} direction="row" justifyContent="right">
						<JoinUsButton>
							<Typography variant="h5">JOIN US</Typography>
						</JoinUsButton>

						<LearnMoreButton>
							<Typography variant="h5">LEARN MORE</Typography>
						</LearnMoreButton>
					</Stack>
				</SectionSpacing>
			</FirstSectionContainer>
		</FirstSectionWrapper>
	)
}

const FirstSectionWrapper = styled(Stack)(({ theme }) => ({
	paddingTop: 100,
	minHeight: '100vh',
	flexDirection: "column",
	display: "flex",

	[theme.breakpoints.down("lg")]: {
		paddingTop: 90,
	},

	[theme.breakpoints.down("md")]: {
		paddingTop: 80,
	},

	[theme.breakpoints.down("sm")]: {
		paddingTop: 70,
	}
}))

const FirstSectionContainer = styled(GlobalSpacing)(({ theme }) => ({
	background: `url(${heroImg})`,
	backgroundSize: "50% auto",
	backgroundPosition: "right",
	backgroundRepeat: "no-repeat",


	[theme.breakpoints.down('lg')]: {
		backgroundSize: "100% auto",
	}
}))

const SectionSpacing = styled(Stack)(({ theme }) => ({
	gap: 30,
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-evenly",

	maxWidth: 850,
	padding: 80,
	paddingRight: 0,

	[theme.breakpoints.down('lg')]: {
		gap: 20,
		padding: 50,
		paddingRight: 0,
	}
}))

const JoinUsButton = styled(Stack)(({ theme }) => ({
	cursor: "pointer",
	borderRadius: 10,
	padding: "5px 15px",
	backgroundColor: theme.palette.common.primaryColor,
	border: `3px solid ${theme.palette.common.primaryColor}`
}))

const LearnMoreButton = styled(Stack)(({ theme }) => ({
	cursor: "pointer",
	borderRadius: 10,
	padding: "5px 15px",
	border: `3px solid ${theme.palette.common.secondaryColor}`
}))

export { FirstSection };