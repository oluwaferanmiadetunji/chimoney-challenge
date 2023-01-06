import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRoutes from "src/pages/AppRoutes";
import Box from "@mui/material/Box";

const theme = createTheme();

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppRoutes />
      </Box>
    </ThemeProvider>
  );
}

export default App;
