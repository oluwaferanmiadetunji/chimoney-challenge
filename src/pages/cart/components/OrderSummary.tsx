import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import styles from "./styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import ProductContext from "context/ProductContext";
import { formatPrice } from "utils/helpers";

const OrderSummary = () => {
  const { cart } = useContext(ProductContext);

  const totalPrice = formatPrice(
    cart.reduce((price, curItem) => {
      return price + curItem.quantity * curItem.price;
    }, 0)
  );

  return (
    <Paper elevation={1} sx={styles.container}>
      <Box sx={styles.cartItemsHeader}>
        <Typography sx={styles.headerText}>Order Summary</Typography>
      </Box>

      <Box sx={styles.summary}>
        <Box sx={styles.summaryItem}>
          <Typography sx={styles.summaryItemLabel}>Sub Total</Typography>
          <Typography sx={styles.summaryItemValue}>$ {totalPrice}</Typography>
        </Box>

        <Box sx={styles.summaryItem}>
          <Typography sx={styles.summaryItemLabel}>Discount</Typography>
          <Typography sx={styles.summaryItemValue}>-</Typography>
        </Box>

        <Box sx={styles.summaryItem}>
          <Typography sx={styles.summaryItemLabel}>Shipping</Typography>
          <Typography sx={styles.summaryItemValue}>Free</Typography>
        </Box>

        <Divider />

        <Box sx={styles.total}>
          <Typography sx={styles.headerText}>Total</Typography>
          <Typography sx={styles.totalValue}>$ {totalPrice}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default OrderSummary;
