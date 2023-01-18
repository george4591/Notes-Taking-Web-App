import { UserContext } from "../context/user";
import { useContext, useState } from "react";
import StudentBoard from "./StudentBoard";
import Modal from "./Modal";
import Menu from "./Menu";
import CreateForm from "./CreateForm";
import { EditNote } from "./EditNote";

import "../styles/MainPage.css";

const MainPage = () => {
  const { user, setUser, setIsLoggedIn, setCourses, editMode } =
    useContext(UserContext);

  const handleLogOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setUser({});
    setCourses([]);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const [name] = user.email.split("@");
  return (
    <div id="main-page">
      <div id="left-panel">
        <div>
          <p id="user-label">Logged in as:</p>
          <p id="username">{name}</p>
        </div>
        <img src={require("./img/logo.png")} alt=""></img>

        <div id="button-wrapper">
          <button onClick={toggleModal}>Create Course</button>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      </div>
      {isModalOpen && (
        <Modal>
          <Menu onClose={toggleModal}>
            <CreateForm
              onCreate={toggleModal}
              isOpened={isModalOpen}
            />
          </Menu>
        </Modal>
      )}
      {!editMode ? <StudentBoard /> : <EditNote />}
    </div>
  );
};

export default MainPage;
