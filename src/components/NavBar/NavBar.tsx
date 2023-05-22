import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { NextLinkComposed } from "@src/components/Link/Link";

import Image from "next/image";

import { useSession, signIn, signOut } from "next-auth/react";

const pages = ["About", "Privacy"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const session = useSession();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <Image
            src="/concierge.png"
            alt="Picture of the logo"
            width={30}
            height={30}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  key={"homemobile"}
                  component={NextLinkComposed}
                  to={{
                    pathname: `/`,
                  }}
                  sx={{ color: "white", display: "block" }}
                >
                  Home
                </Button>
              </MenuItem>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                    key={page}
                    component={NextLinkComposed}
                    to={{
                      pathname: `/${page.toLowerCase()}`,
                    }}
                    sx={{ color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              marginLeft: "20px",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              key={"home"}
              component={NextLinkComposed}
              to={{
                pathname: `/`,
              }}
              sx={{ color: "white", display: "block" }}
            >
              Home
            </Button>
            {pages.map((page) => (
              <Button
                key={page}
                component={NextLinkComposed}
                to={{
                  pathname: `/${page.toLowerCase()}`,
                }}
                sx={{ color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {session.status === "authenticated" ? (
              <Button
                color="secondary"
                variant="contained"
                onClick={() => signOut()}
              >
                Log out
              </Button>
            ) : (
              <Button
                color="secondary"
                variant="contained"
                onClick={() => signIn("spotify")}
              >
                Login with Spotify
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
