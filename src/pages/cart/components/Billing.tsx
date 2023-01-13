import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import OrderSummary from "./OrderSummary";
import Button from "@mui/material/Button";
import { DummyBillingData } from "utils/constants";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import styles from "./styles";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const Billing = ({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={8}>
        {DummyBillingData.map((data) => (
          <Paper elevation={1} sx={styles.card}>
            <Box sx={styles.billingCard}>
              <Box sx={styles.billingDetails}>
                <Box sx={styles.billingName}>
                  <Typography sx={styles.name}>{data.name}</Typography>
                  <Typography sx={styles.location} variant="caption">
                    ({data.location})
                  </Typography>
                  {data.isDefault && <Chip label="Default" sx={styles.chip} />}
                </Box>

                <Typography sx={styles.address}>{data.address}</Typography>

                <Typography sx={styles.phone}>{data.phone}</Typography>
              </Box>

              <Button
                sx={styles.deliverButton}
                onClick={handleNext}
                variant="outlined"
              >
                Deliver to this address
              </Button>
            </Box>
          </Paper>
        ))}

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
      </Grid>
    </Grid>
  );
};

export default Billing;
