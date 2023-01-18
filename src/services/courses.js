import axios from "axios";

const baseUrl = "http://localhost:3001/api";

export const createCourse = async (email, course) => {
  try {
    return await axios.post(`${baseUrl}/students/${email}/courses`, course);
  } catch (error) {
    console.log(error);
  }
}

export const createNote = async (id, title) => {
  try {
    return await axios.post(`${baseUrl}/courses/${id}/notes`, {title});
  } catch (error) {
    console.log(error);
  }
}