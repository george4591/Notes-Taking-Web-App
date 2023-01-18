import { useState } from "react";
import Modal from "./Modal";
import CreateMenu from "./CreateMenu";

const StudentBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div>
        <button onClick={toggleModal}>Create Course</button>
        {isModalOpen && <Modal> <CreateMenu closeModal={toggleModal}/> </Modal>}
    </div>
  )
}

export default StudentBoard;