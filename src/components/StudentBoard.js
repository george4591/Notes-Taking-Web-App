import { useContext } from "react";
import { UserContext } from "../context/user";
import CourseList from "./CourseList";
import "../styles/StudentBoard.css";

const StudentBoard = () => {
  const { courses } = useContext(UserContext);

  return (
    <div id="right-panel">
      <h1>Your Courses</h1>
      {courses.length === 0 ? (
        <p>You are not enrolled in any courses. Join one or create one.</p>
      ) : (
        <CourseList courses={courses} />
      )}
    </div>
  );
};

export default StudentBoard;
