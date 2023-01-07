import { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LayoutProps } from "types/layout.types";
import { ROUTES } from "utils/constants";

import styles from "./styles";

const settings = ["Products", "Cart", "Logout"];

const Layout = (props: LayoutProps) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={styles.container}>
      <AppBar position="absolute">
        <Toolbar disableGutters sx={styles.toolbar}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={ROUTES.PRODUCTS}
            sx={styles.icon}
          >
            LOGO
          </Typography>

          <Box>
            <IconButton onClick={handleOpenUserMenu}>
              <AccountCircleIcon fontSize="large" color="secondary" />
            </IconButton>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Container>{props.children}</Container>
    </Box>
  );
};

export default Layout;
