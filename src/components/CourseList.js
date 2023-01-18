import Course from "./Course";
import "../styles/CourseList.css";

const CourseList = ({ courses }) => {
  return (
    <div id="courses">
      {courses.map((course) => (
        <Course course={course} key={course.id} />
      ))}
    </div>
  );
};
export default CourseList;
