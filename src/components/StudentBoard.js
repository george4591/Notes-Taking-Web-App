import { useState } from "react";
import Modal from "./Modal";
import CreateMenu from "./CreateMenu";

const StudentBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  
  return (
    <div>
        <button onClick={() => setIsModalOpen(true)}>Create Course</button>
        {isModalOpen && <Modal> <CreateMenu closeModal={() => setIsModalOpen(false)}/> </Modal>}
    </div>
  )
}

export default StudentBoard;