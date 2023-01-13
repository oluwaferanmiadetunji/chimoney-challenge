import { useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import OrderSummary from "./OrderSummary";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import styles from "./styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ProductContext from "context/ProductContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "utils/constants";
import { toast } from "react-toastify";

const Payment = ({ handleBack }: { handleBack: () => void }) => {
  const { clearCart } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleFinish = () => {
    toast.success("Order is being processed");
    clearCart();
    setTimeout(() => {
      navigate(ROUTES.PRODUCTS);
    }, 500);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={8}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Payment method
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardName"
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardNumber"
                label="Card number"
                fullWidth
                autoComplete="cc-number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="expDate"
                label="Expiry date"
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cvv"
                label="CVV"
                helperText="Last three digits on signature strip"
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
              />
            </Grid>
          </Grid>
        </Box>

        <Button
          startIcon={<KeyboardArrowLeftIcon />}
          sx={styles.backToShopping}
          onClick={handleBack}
        >
          Back
        </Button>
      </Grid>

      <Grid item xs={4}>
        <OrderSummary />

        <Button
          variant="contained"
          size="large"
          sx={styles.checkout}
          onClick={handleFinish}
        >
          Complete Order
        </Button>
      </Grid>
    </Grid>
  );
};

export default Payment;
