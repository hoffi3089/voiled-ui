import React, { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

const ScrollWrapper = ({ className, children, ...props }: any) => {
  return (
    <ScrollContainer>
      <Stack className={`scrollContainer ${className}`} {...props}>
        {children}
      </Stack>
    </ScrollContainer>
  )
}

const GlobalSpacing = styled(Stack)(({ theme }) => ({
  '@media (min-width: 1800px)': {
    padding: `0px calc((100vw - 1600px)/2)`
  },

  padding: `0px 100px`,

  [theme.breakpoints.down("xl2")]: {
    padding: `0px 85px`,
  },

  [theme.breakpoints.down("xl")]: {
    padding: `0px 60px`,
  },

  [theme.breakpoints.down("lg")]: {
    padding: `0px 45px`,
  },

  [theme.breakpoints.down('md')]: {
    padding: `0px 25px`,
  },

  [theme.breakpoints.down('sm')]: {
    padding: `0px 20px`,
  }
}))

const ScrollContainer = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  '.scrollContainer': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
})

const SectionHeader = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  padding: "15px 30px",
  borderRadius: "5px 5px 0px 0px",
  backgroundColor: theme.palette.common.secondaryBg,
  border: `3px solid ${theme.palette.common.secondaryBorder}`,
  borderBottom: "0px",

  [theme.breakpoints.down("xl2")]: {
    padding: "10px 25px",
  },

  [theme.breakpoints.down("lg")]: {
    padding: "5px 15px",
  }
}))

const SectionContent = styled(Stack)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",

  padding: '25px 30px',
  borderRadius: "0px 0px 5px 5px",
  backgroundColor: theme.palette.common.thirdBg,
  border: `3px solid ${theme.palette.common.secondaryBorder}`,

  img: {
    maxWidth: 1084,
    width: "100%",
  },

  [theme.breakpoints.down("xl2")]: {
    padding: "20px 25px",
  },

  [theme.breakpoints.down("lg")]: {
    padding: "10px 15px",
  }
}))

export { GlobalSpacing, SectionHeader, SectionContent, ScrollWrapper }