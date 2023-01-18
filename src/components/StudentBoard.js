import { useState, useContext } from "react";
import { UserContext } from "../context/user";
import Modal from "./Modal";
import Menu from "./Menu"
import CourseList from "./CourseList";
import CreateForm from "./CreateForm";

import '../styles/StudentBoard.css'

const StudentBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { courses } = useContext(UserContext);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div id='right-panel'>
      <button onClick={toggleModal}>Create Course</button>
      
      <CourseList courses={courses} />
    </div>
  );
};

export default StudentBoard;
