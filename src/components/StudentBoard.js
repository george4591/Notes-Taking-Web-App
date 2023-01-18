import { useState, useContext } from "react";
import { UserContext } from "../context/user";
import Modal from "./Modal";
import Menu from "./Menu"
import CourseList from "./CourseList";
import CreateForm from "./CreateForm";

const StudentBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { courses } = useContext(UserContext);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div>
      <button onClick={toggleModal}>Create Course</button>
      {isModalOpen && (
        <Modal>
          <Menu onClose={toggleModal}>
            <CreateForm onCreate={toggleModal} />
          </Menu>
        </Modal>
      )}
      <CourseList courses={courses} />
    </div>
  );
};

export default StudentBoard;
