import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Menu, Stack, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { GlobalSpacing } from "./common";
import { logoImg } from "../../assets/image";

interface HeaderProps {
  sticky: boolean
}

const Header = ({ sticky }: HeaderProps) => {
  const [menuEL, setMenuEL] = useState<null | HTMLElement>(null);

  const onOpenMunu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuEL(event.currentTarget);
  }

  const onCloseMenu = () => {
    setMenuEL(null);
  }

  return (
    <HeaderWrapper sticky={sticky}>
      <HeaderContainer>
        <LogoWrapper to='/'>
          <img alt="" src={logoImg} />
        </LogoWrapper>

        <DesktopMenuContainer>
          <Typography variant="h5">Welcome</Typography>
          <Typography variant="h5">Home</Typography>
          <Typography variant="h5">News</Typography>
          <Typography variant="h5">Our Team</Typography>
          <Typography variant="h5">About Us</Typography>

          <SignInButton>
            <Typography variant="h5">SIGN IN</Typography>
          </SignInButton>
        </DesktopMenuContainer>

        <ResponsiveMenu>
          <Stack onClick={onOpenMunu}>
            <MenuIcon fontSize="large" sx={{ cursor: "pointer" }} />
          </Stack>

          <Menu anchorEl={menuEL}
            open={Boolean(menuEL)} onClose={onCloseMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
            transformOrigin={{ vertical: 'top', horizontal: 'right', }}
          >
            <ResponsiveMenuContainer onClick={onCloseMenu}>
              <MobileMenuContainer>
                <Typography variant="h5">Welcome</Typography>
                <Typography variant="h5">Home</Typography>
                <Typography variant="h5">News</Typography>
                <Typography variant="h5">Our Team</Typography>
                <Typography variant="h5">About Us</Typography>

                <SignInButton>
                  <Typography variant="h5">SIGN IN</Typography>
                </SignInButton>
              </MobileMenuContainer>
            </ResponsiveMenuContainer>
          </Menu>
        </ResponsiveMenu>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled('div')<{ sticky: boolean }>(({ sticky }) => ({
  zIndex: 10,
  top: 0, left: 0,
  position: 'fixed',

  width: "100vw",
  transition: sticky ? 'box-shadow 0.6s ease-out 0s' : 'box-shadow 0.6s ease-in 0s',
  boxShadow: sticky ? '#ffffff1a 0px 10px 15px -3px, #ffffff1a 0px 4px 6px -4px' : 'none',
  backdropFilter: sticky ? 'blur(20px)' : 'none',
}))

const HeaderContainer = styled(GlobalSpacing)(({ theme }) => ({
  height: "100px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: '30px !important',

  [theme.breakpoints.down("lg")]: {
    height: 90,
  },

  [theme.breakpoints.down("md")]: {
    height: 80,
  },

  [theme.breakpoints.down("sm")]: {
    height: 70,
  }
}))

const LogoWrapper = styled(Link)({
  height: '100%',
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  img: {
    height: 30,
    width: 'auto',
  }
})

const SignInButton = styled(Stack)(({ theme }) => ({
  borderRadius: 5,
  border: `2.3px solid ${theme.palette.common.secondaryColor}`,

  h5: {
    padding: '0px 10px',
  }
}))

const MenuWrapper = styled(Stack)(({ theme }) => ({
  gap: 30,

  [theme.breakpoints.down("lg")]: {
    gap: 20,
  },

  [theme.breakpoints.down("md")]: {
    gap: 10,
  }
}))

const DesktopMenuContainer = styled(MenuWrapper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.down("md")]: {
    display: "none",
  }
}))

const MobileMenuContainer = styled(MenuWrapper)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("md")]: {
    gap: 5,
    display: "flex",
    flexDirection: "column",
  },

  h5: {
    cursor: 'pointer',
    padding: '10px 15px',
    backgroundColor: theme.palette.common.menuItemBg,

    '&:hover': {
      backgroundColor: theme.palette.common.menuBg,
    }
  }
}))

const ResponsiveMenu = styled(Stack)(({ theme }) => ({
  display: "none",
  color: theme.palette.common.white,

  [theme.breakpoints.down("md")]: {
    display: "block"
  },

  "&:hover": {
    opacity: 0.75,
  }
}))

const ResponsiveMenuContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  gap: 10,
  minWidth: 200,
  backgroundColor: theme.palette.common.menuBg,
}))

export { Header };