import { UserContext } from "../context/user";
import { useContext, useState } from "react";
import StudentBoard from "./StudentBoard";
import Modal from "./Modal";
import Menu from "./Menu"
import CreateForm from "./CreateForm";

import "../styles/MainPage.css";

const MainPage = () => {
  const { user, setUser, setIsLoggedIn, setCourses } = useContext(UserContext);

  const handleLogOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setUser({});
    setCourses([]);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { courses } = useContext(UserContext);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div id="main-page">
      <div id="left-panel">
        <p>{user.email}</p>
        <div id="button-wrapper">
          <button onClick={toggleModal}>Create Course</button>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      </div>
      {isModalOpen && (
        <Modal>
          <Menu onClose={toggleModal}>
            <CreateForm onCreate={toggleModal} />
          </Menu>
        </Modal>
      )}
      <StudentBoard />
    </div>
  );
};

export default MainPage;
