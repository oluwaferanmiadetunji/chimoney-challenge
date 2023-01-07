import { toast } from 'react-toastify'

export const saveItem = (key: string, payload: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(payload))
  } catch (error) {
    toast.error('Error saving item')
  }
}

export const removeItem = (key: string): void => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    toast.error('Error deleting item')
  }
}

export const getItem = (key: string): void => {
  try {
    localStorage.getItem(key)
  } catch (error) {
    toast.error('Error getting item')
  }
}
