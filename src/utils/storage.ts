import { toast } from "react-toastify";

export const saveItem = (key: string, payload: any) => {
  try {
    return localStorage.setItem(key, JSON.stringify(payload));
  } catch (error) {
    toast.error("Error saving item");
  }
};

export const removeItem = (key: string) => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    toast.error("Error deleting item");
  }
};

export const getItem = (key: string) => {
  try {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : [];
  } catch (error) {
    toast.error("Error getting item");
  }
};
