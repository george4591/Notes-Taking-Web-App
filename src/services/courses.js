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

export const updateNote = async (note) => {
  try {
    return await axios.put(`${baseUrl}/notes/${note.id}`, note);
  } catch (error) {
    console.log(error);
  }
}

export const deleteNote = async (id) => {
  try {
    await axios.delete(`${baseUrl}/notes/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export const getCourse = async (id) => {
  try {
    return await axios.get(`${baseUrl}/courses/${id}`);
  } catch (error) {
    console.log(error);
  }
}