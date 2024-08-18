import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sx: true
    sm: true
    md: true
    lg: true
    xl: true
    xl2: true
  }

  interface CommonColors {
    mainBg: string
    menuBg: string
    menuItemBg: string

    thirdBg: string
    secondaryBg: string
    secondaryBorder: string

    primaryColor: string
    secondaryColor: string

    typograph1: string
    typograph2: string
    typograph3: string
    typograph4: string
    typograph5: string
    typograph6: string
  }

  // interface Palette {
  //   mainBg: PaletteColor;
  // }

  // interface PaletteOptions {
  //   mainBg: PaletteColorOptions;
  // }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    // mainBg: true;
  }
}

const MuiThemeProvider = ({ children }: any) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sx: 450,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xl2: 1536,
      }
    },
    palette: {
      mode: "dark",
      common: {
        black: '#000',
        white: '#fff',

        mainBg: '#171717',
        menuBg: '#1C1C1C',
        menuItemBg: '#212121',

        thirdBg: '#1C1C1C',
        secondaryBg: '#191919',
        secondaryBorder: '#212121',

        primaryColor: '#1B1DCD',
        secondaryColor: '#ACACAC',

        typograph1: '#EDEDED',
        typograph2: '#D1D1D1',
        typograph3: '#939393',
        typograph4: '#ACACAC',
        typograph5: '#54545499',
      },
    },
    typography: {
      allVariants: {
        color: "#FFF",
        fontWeight: 500,
      },
      htmlFontSize: 16,
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 800,

      fontFamily: "Poppins"
    },
  })

  theme.typography.h1 = {
    ...theme.typography.h1,

    fontSize: 65,
    fontWeight: 700,
    lineHeight: '124%',
    color: theme.palette.common.typograph1,

    [theme.breakpoints.down('lg')]: {
      fontSize: 50,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 35,
    }
  }

  theme.typography.h2 = {
    ...theme.typography.h2,

    fontSize: 40,
    fontWeight: 700,
    color: theme.palette.common.typograph2,

    [theme.breakpoints.down('lg')]: {
      fontSize: 30,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    }
  }

  theme.typography.h4 = {
    ...theme.typography.h3,

    fontSize: 28,
    fontWeight: 700,
    color: theme.palette.common.white,

    [theme.breakpoints.down('lg')]: {
      fontSize: 23,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    }
  }

  theme.typography.h5 = {
    ...theme.typography.h5,

    fontSize: 25,
    color: theme.palette.common.typograph4,

    [theme.breakpoints.down('lg')]: {
      fontSize: 20,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 15,
    }
  }

  theme.typography.h6 = {
    ...theme.typography.h6,

    fontSize: 21,
    color: theme.palette.common.typograph5,

    [theme.breakpoints.down('lg')]: {
      fontSize: 17,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 13,
    }
  }

  theme.typography.body2 = {
    ...theme.typography.body2,

    fontSize: 20,
    color: theme.palette.common.typograph2,

    [theme.breakpoints.down('lg')]: {
      fontSize: 17,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    }
  }

  theme.typography.body1 = {
    ...theme.typography.body1,

    fontSize: 16,
    color: theme.palette.common.white,

    [theme.breakpoints.down('lg')]: {
      fontSize: 14,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 12,
    }
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export { MuiThemeProvider };