import axios from "axios";

const baseUrl = "http://localhost:3001/api";

export const auth = async (email) => {
  try {
    return await axios.post(`${baseUrl}/auth`, { email });
  } catch (error) {
    console.log(error);
  }
};