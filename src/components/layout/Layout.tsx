import { useContext } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import { ROUTES } from "utils/constants";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { LayoutProps } from "types/layout.types";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import ShopIcon from "@mui/icons-material/Shop";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useLocation } from "react-router-dom";
import ProductContext from "context/ProductContext";
import styles from "./styles";

const notificationsLabel = (count: number) => {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
};

const Layout = (props: LayoutProps) => {
  const location = useLocation();

  const isActive = (route: string): boolean => {
    return location.pathname === route;
  };

  const { cart } = useContext(ProductContext);

  const cartCount = cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);
  return (
    <Box sx={styles.container}>
      <AppBar position="fixed">
        <Toolbar disableGutters sx={styles.toolbar}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={ROUTES.PRODUCTS}
            sx={styles.icon}
          >
            SHOP
          </Typography>

          <Box sx={styles.profile}>
            <Tooltip title="Products">
              <Link href={ROUTES.PRODUCTS} underline="none">
                <IconButton size="large">
                  <ShopIcon
                    fontSize="medium"
                    color={isActive(ROUTES.PRODUCTS) ? "success" : "secondary"}
                  />
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="Cart">
              <Link href={ROUTES.CART} underline="none">
                <IconButton aria-label={notificationsLabel(cartCount)}>
                  <Badge badgeContent={cartCount} color="error" max={99}>
                    <ShoppingCartIcon
                      fontSize="medium"
                      color={isActive(ROUTES.CART) ? "success" : "secondary"}
                    />
                  </Badge>
                </IconButton>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={styles.children}>{props.children}</Container>
    </Box>
  );
};

export default Layout;
