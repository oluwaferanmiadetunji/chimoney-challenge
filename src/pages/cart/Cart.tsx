import { useState } from "react";
import Layout from "components/layout";
import styles from "./styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Cart from "./components/Cart";
import Billing from "./components/Billing";
import Payment from "./components/Payment";

const steps = ["Cart", "Billing & Address", "Payment"];

const CartPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Layout>
      <Typography variant="h1" sx={styles.header} gutterBottom>
        Cart
      </Typography>

      <Box>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <Box sx={styles.content}>
          {activeStep === 0 && <Cart handleNext={handleNext} />}
          {activeStep === 1 && (
            <Billing handleBack={handleBack} handleNext={handleNext} />
          )}
          {activeStep === 2 && <Payment handleBack={handleBack} />}
        </Box>
      </Box>
    </Layout>
  );
};

export default CartPage;
