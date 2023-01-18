import { useContext } from "react";
import { UserContext } from "../context/user";
import CourseList from "./CourseList";
import '../styles/StudentBoard.css'

const StudentBoard = () => {
  const { courses } = useContext(UserContext);

  return (
    <div id='right-panel'>
      <h1>Your Courses</h1>      
      <CourseList courses={courses} />
    </div>
  );
};

export default StudentBoard;
