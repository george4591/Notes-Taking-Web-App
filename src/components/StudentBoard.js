import { useState, useContext } from "react";
import { UserContext } from "../context/user";
import Modal from "./Modal";
import CreateMenu from "./CreateMenu";
import CoursePanel from "./CoursePanel";

const StudentBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {courses} = useContext(UserContext);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div>
        <button onClick={toggleModal}>Create Course</button>
        {isModalOpen && <Modal> <CreateMenu closeModal={toggleModal}/> </Modal>}
        <CoursePanel courses={courses}/>
    </div>
  )
}

export default StudentBoard;