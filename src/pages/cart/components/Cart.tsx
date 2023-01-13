import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import styles from "./styles";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import ProductContext from "context/ProductContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { ROUTES } from "utils/constants";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import OrderSummary from "./OrderSummary";

const Cart = ({ handleNext }: { handleNext: () => void }) => {
  const { cart, addProductToCart, removeProductFromCart, deleteItemFromCart } =
    useContext(ProductContext);

  const cartCount = cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);

  return (
    <Grid container spacing={4}>
      <Grid item xs={8}>
        <Paper elevation={1} sx={styles.container}>
          <Box sx={styles.cartItemsHeader}>
            <Typography sx={styles.headerText}>Cart</Typography>
            <Typography sx={styles.headerSubText} variant="caption">
              ({cartCount} items)
            </Typography>
          </Box>

          <TableContainer component={Paper}>
            <Table aria-label="Cart Items">
              <TableHead sx={styles.tableHeader}>
                <TableRow>
                  <TableCell sx={styles.tableCell}>Product</TableCell>
                  <TableCell sx={styles.tableCell} align="center">
                    Price
                  </TableCell>
                  <TableCell sx={styles.tableCell} align="center">
                    Quantity
                  </TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>

              <TableBody>
                {cart.map((item) => (
                  <TableRow
                    key={item.productId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={styles.tableCellWithImage}
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="img"
                      />
                      <Typography sx={styles.tableCellWithImagetext}>
                        {item.productName}
                      </Typography>
                    </TableCell>

                    <TableCell align="center">
                      {item.currency} {item.price}
                    </TableCell>

                    <TableCell align="center">
                      <ButtonGroup size="small" disableElevation>
                        <Button
                          onClick={() => removeProductFromCart(item.productId)}
                        >
                          <RemoveIcon fontSize="small" sx={styles.icons} />
                        </Button>

                        <Button>{item.quantity}</Button>

                        <Button onClick={() => addProductToCart(item)}>
                          <AddIcon fontSize="small" sx={styles.icons} />
                        </Button>
                      </ButtonGroup>
                    </TableCell>

                    <TableCell align="center">
                      <Tooltip title="Delete item">
                        <IconButton
                          onClick={() => deleteItemFromCart(item.productId)}
                        >
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Button
          component={Link}
          to={ROUTES.PRODUCTS}
          startIcon={<KeyboardArrowLeftIcon />}
          sx={styles.backToShopping}
        >
          Continue Shopping
        </Button>
      </Grid>

      <Grid item xs={4}>
        <OrderSummary />

        <Button
          variant="contained"
          size="large"
          sx={styles.checkout}
          onClick={handleNext}
        >
          Checkout
        </Button>
      </Grid>
    </Grid>
  );
};

export default Cart;
