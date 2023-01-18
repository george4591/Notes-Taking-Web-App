import "../styles/Course.css";
import { useState } from "react";
import Modal from "./Modal";
import Menu from "./Menu";
import CoursePanel from "./CoursePanel";

const Course = ({ course }) => {
  const createdDate = new Date(course.createdAt).toLocaleDateString("en-US");
  const createdTime = new Date(course.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div>
      <div id="course-wrapper" onClick={toggleModal}>
        <h4>{course.name}</h4>
        <p>{course.description}</p>
        <p>
          Created: {createdDate} at {createdTime}
        </p>
        <div id="course-id">{`code: ${course.id}`}</div>
      </div>
      {isModalOpen && (
        <Modal>
          <Menu onClose={toggleModal}>
            <CoursePanel course={course}/>
          </Menu>
        </Modal>
      )}
    </div>
  );
};

export default Course;
