import { UserContext } from "../context/user";
import { useContext, useState } from "react";
import StudentBoard from "./StudentBoard";
import Modal from "./Modal";
import Menu from "./Menu";
import CreateForm from "./CreateForm";
import { EditNote } from "./EditNote";
import { getCourse } from "../services/courses";

import "../styles/MainPage.css";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseId, setCourseId] = useState("");
  const [isJoinMenuOpen, setIsJoinMenuOpen] = useState(false);
  const { user, setUser, setIsLoggedIn, setCourses, editMode, addCourse } =
    useContext(UserContext);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const handleLogOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setUser({});
    setCourses([]);
  };

  const handleJoin = async () => {
    if (courseId) {
      try {
        const course = await getCourse(courseId);
        addCourse(course.data);
      } catch (error) {
        console.log(error);
      }
    }
    setIsJoinMenuOpen(false);
    setCourseId("");
  };

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
          <button id="create-btn" onClick={toggleModal}>
            Create Course
          </button>
          <button onClick={() => setIsJoinMenuOpen(true)}>Join Course</button>
          {isJoinMenuOpen && (
            <div id="join-menu">
              <input
                type="text"
                placeholder="Course Code"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
              />
              <button onClick={handleJoin}>Join</button>
            </div>
          )}
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      </div>
      {isModalOpen && (
        <Modal>
          <Menu onClose={toggleModal}>
            <CreateForm onCreate={toggleModal} isOpened={isModalOpen} />
          </Menu>
        </Modal>
      )}
      {!editMode ? <StudentBoard /> : <EditNote />}
    </div>
  );
};

export default MainPage;
