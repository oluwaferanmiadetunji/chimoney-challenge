import AppRoutes from "pages/AppRoutes";
import Box from "@mui/material/Box";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Box>
      <ToastContainer />
      <AppRoutes />
    </Box>
  );
}

export default App;
