import React from "react";
import { Grid, Stack, Typography, styled } from "@mui/material";
import { GlobalSpacing, SectionContent, SectionHeader } from "../../components/layout/common";

const ThirdSection = () => {
	return (
		<GlobalSpacing>
			<Stack height="100%" direction="column">
				<SectionHeader>
					<Typography variant="h2">
						About Us
					</Typography>
				</SectionHeader>

				<SectionContent gap={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} lg={4}>
							<Stack gap={1} direction="column" textAlign="center">
								<Typography variant="h5">
									VOILED ORGANIZATION
								</Typography>

								<Typography variant="h6">
									We're a dynamic community dedicated to transforming ideas into triumphs. Our platform is a creative haven, uniting diverse minds for innovation and collaboration.
								</Typography>
							</Stack>
						</Grid>

						<Grid item xs={12} lg={4}>
							<Stack gap={1} direction="column" textAlign="center">
								<Typography variant="h5">
									YOUR JOB INSIDE VOILED
								</Typography>

								<Typography variant="h6">
									Your job will be an Idea Creator for professionals to build. Revenue will be shared between you Idea Creators, and the professionals, where you'll mingle with them.
								</Typography>
							</Stack>
						</Grid>

						<Grid item xs={12} lg={4}>
							<Stack gap={1} direction="column" textAlign="center">
								<Typography variant="h5">
									OUR MISSION
								</Typography>

								<Typography variant="h6">
									Our goal is to empower individuals to bring ideas to life. Through collaboration and recognition, we aim to create a thriving space where innovative concepts flourish into impactful realities.
								</Typography>
							</Stack>
						</Grid>
					</Grid>

					<Stack gap={2} direction="column" alignItems="center">
						<Typography variant="h4" textAlign="center">
							Looking to become a professional?
						</Typography>

						<Typography variant="body1" textAlign="center" maxWidth={780}>
							Skills we're looking for: Web Developing, Web Designing, Marketing (All Types), SEO Optimizing, Photo & Video Editing, Content writing, App developing, AI Experts, and UI/UX Designers. If you're looking to master your skills here, Join us and get hired instantly!
						</Typography>
					</Stack>
				</SectionContent>
			</Stack>
		</GlobalSpacing>
	)
}

export { ThirdSection };