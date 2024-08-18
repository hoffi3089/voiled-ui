import React from "react";
import { Stack, Typography } from "@mui/material";

import { howtoworkImg } from "../../assets/image";
import { GlobalSpacing, SectionContent, SectionHeader } from "../../components/layout/common";

const SecondSection = () => {
	return (
		<GlobalSpacing>
			<Stack direction="column">
				<SectionHeader>
					<Typography variant="h2">
						How We Work
					</Typography>
				</SectionHeader>

				<SectionContent>
					<img alt="" src={howtoworkImg} />
				</SectionContent>
			</Stack>
		</GlobalSpacing>
	)
}

export { SecondSection };