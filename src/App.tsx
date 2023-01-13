import AppRoutes from "pages/AppRoutes";
import Box from "@mui/material/Box";
import { ToastContainer } from "react-toastify";
import GlobalState from "context/GlobalContext";

function App() {
  return (
    <Box>
      <ToastContainer />
      <GlobalState>
        <AppRoutes />
      </GlobalState>
    </Box>
  );
}

export default App;
