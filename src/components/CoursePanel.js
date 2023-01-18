import Course from "./Course";
import '../styles/CoursePanel.css';

const CoursePanel = ({ courses }) => {
  return (
    <div id="courses">
      {courses.map((course) => (
        <Course course={course} key={course.id}/>
      ))}
    </div>
  );
};
export default CoursePanel;
