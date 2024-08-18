import React, { useState } from "react";
import { Grid, Stack, Typography, styled } from "@mui/material";
import { GlobalSpacing, SectionContent, SectionHeader } from "../../components/layout/common";
import { arrowBottomImg, arrowTopImg } from "../../assets/image";

interface QuestionItemProps {
	expanded: boolean
	onChange: any
}

const SixthSection = () => {
	const [expanded, setExpanded] = useState<string | boolean>(false);

	const handleChange = (panel: string) => (isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
		console.log(isExpanded, panel)
	};

	return (
		<GlobalSpacing>
			<Stack direction="column">
				<CustomHeader>
					<Typography variant="h2">
						Questions..? We have some answers.
					</Typography>
				</CustomHeader>

				<CustomContent gap={3}>
					<Grid container spacing={{ xs: 0.8, lg: 3 }}>
						<Grid item xs={12} lg={6}>
							{(Array(5).fill(0)).map((i: number, key: number) => (
								<QuestionItem key={key}
									expanded={expanded === `question1-${key}`}
									onChange={handleChange(`question1-${key}`)}
								/>
							))}
						</Grid>

						<Grid item xs={12} lg={6}>
							{(Array(5).fill(0)).map((i: number, key: number) => (
								<QuestionItem key={key}
									expanded={expanded === `question2-${key}`}
									onChange={handleChange(`question2-${key}`)}
								/>
							))}
						</Grid>
					</Grid>
				</CustomContent>
			</Stack>
		</GlobalSpacing>
	)
}

const QuestionItem = ({ expanded, onChange }: QuestionItemProps) => {
	const onClick = () => {
		onChange(!expanded)
	}

	return (
		<QuestionItemContainer>
			<Stack className="question-item-header" onClick={onClick}>
				<Typography variant="h5">Headline</Typography>

				{!expanded && (
					<img alt="" src={arrowBottomImg} />
				)}

				{expanded && (
					<img alt="" src={arrowTopImg} />
				)}
			</Stack>

			{expanded && (
				<Typography variant="h6">
					Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas aliquam commodo faucibus cursus cursus augue. Scelerisque facilisis sit ac enim mauris sed vel ipsum morbi. Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas aliquam commodo faucibus cursus cursus augue. Scelerisque facilisis sit ac enim mauris sed vel ipsum morbi.
				</Typography>
			)}
		</QuestionItemContainer>
	)
}

const QuestionItemContainer = styled(Stack)(({ theme }) => ({
	gap: 10,
	display: "flex",
	flexDirection: "column",

	borderRadius: 5,
	backgroundColor: theme.palette.common.mainBg,

	marginTop: 8,
	padding: '10px 15px',

	'.question-item-header': {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		cursor: "pointer",

		img: {
			width: 35,
			height: 35,
		}
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


export { SixthSection };