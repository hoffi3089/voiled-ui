import React from "react";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Header } from "./header";
import { Footer } from "./footer";

const Layout = ({ children }: React.PropsWithChildren) => {
	const [sticky, setSticky] = useState<boolean>(false);

	useEffect(() => {
		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
		}

		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [])

	const onScroll = () => {
		setSticky(document.documentElement.scrollTop > 50);
	}

	return (
		<LayoutWrapper>
			<Header sticky={sticky} />
			{children}
			<Footer />
		</LayoutWrapper>
	)
}

const LayoutWrapper = styled('div')(({ theme }) => ({
	overflowX: "hidden",
	backgroundColor: theme.palette.common.mainBg,
}))

export { Layout }