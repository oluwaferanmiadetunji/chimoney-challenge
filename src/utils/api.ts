import axios from "axios";
import { toast } from "react-toastify";

const API_KEY = process.env.REACT_APP_API_KEY;

const URL = "https://api.chimoney.io/v0.2/info/assets";

export const getProducts = async () => {
  try {
    const response = await axios.get(URL, {
      headers: {
        accept: "application/json",
        "X-API-KEY": API_KEY,
      },
    });

    return response?.data?.data?.ecommerce;
  } catch (error) {
    toast.error("Error fetching products");
    return null;
  }
};
