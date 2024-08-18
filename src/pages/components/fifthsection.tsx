import React from "react";
import { Grid, Rating, Stack, Typography, styled } from "@mui/material";
import { GlobalSpacing, SectionContent, SectionHeader } from "../../components/layout/common";
import { userImg } from "../../assets/image";

const FifthSection = () => {
	return (
		<GlobalSpacing>
			<Stack direction="column">
				<CustomHeader>
					<Typography variant="h2">
						Reviews
					</Typography>
				</CustomHeader>

				<CustomContent gap={3}>
					<Grid container spacing={{ xs: 0.8, lg: 3 }}>
						<Grid item xs={12} lg={6}>
							<UserCardContainer>
								<Stack gap={2} direction="row" alignItems="center">
									<Stack className="user-image-container">
										<img alt="" src={userImg} />
									</Stack>

									<Stack direction="column">
										<Typography variant="body2">Erick Presply</Typography>
										<Rating name="read-only" value={5} readOnly />
									</Stack>
								</Stack>

								<Typography variant="h6">
									Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas aliquam commodo faucibus cursus cursus augue. Scelerisque facilisis sit ac enim mauris sed vel ipsum morbi. Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas aliquam commodo faucibus cursus cursus augue. Scelerisque facilisis sit ac enim mauris sed vel ipsum morbi.
								</Typography>
							</UserCardContainer>
						</Grid>

						<Grid item xs={12} lg={6}>
							<UserCardContainer>
								<Stack gap={2} direction="row" alignItems="center">
									<Stack className="user-image-container">
										<img alt="" src={userImg} />
									</Stack>

									<Stack direction="column">
										<Typography variant="body2">Erick Presply</Typography>
										<Rating name="read-only" value={5} readOnly />
									</Stack>
								</Stack>

								<Typography variant="h6">
									Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas aliquam commodo faucibus cursus cursus augue. Scelerisque facilisis sit ac enim mauris sed vel ipsum morbi. Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas aliquam commodo faucibus cursus cursus augue. Scelerisque facilisis sit ac enim mauris sed vel ipsum morbi.
								</Typography>
							</UserCardContainer>
						</Grid>
					</Grid>
				</CustomContent>
			</Stack>
		</GlobalSpacing>
	)
}

const UserCardContainer = styled(Stack)(({ theme }) => ({
	gap: 20,
	display: "flex",
	flexDirection: "column",

	borderRadius: 5,
	backgroundColor: theme.palette.common.mainBg,
	border: `3px solid ${theme.palette.common.secondaryBorder}`,

	height: '100%',
	padding: "15px 20px",

	'.user-image-container': {
		padding: 5,
		borderRadius: '50px',
		border: `1px solid ${theme.palette.common.primaryColor}`,

		img: {
			borderRadius: '50px',
		}
	},

	[theme.breakpoints.down("lg")]: {
		gap: 10,
	}
}))

const CustomHeader = styled(SectionHeader)(({ theme }) => ({
	[theme.breakpoints.down("lg")]: {
		padding: 5,
	}
}))

const CustomContent = styled(SectionContent)(({ theme }) => ({
	[theme.breakpoints.down("lg")]: {
		padding: 5,
	}
}))


export { FifthSection };