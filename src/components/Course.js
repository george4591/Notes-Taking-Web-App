import '../styles/Course.css'

const Course = ({course}) => {
  const createdDate = new Date(course.createdAt).toLocaleDateString("en-US");
  const createdTime = new Date(course.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  return (
    <div id="course-wrapper">
      <h4>{course.name}</h4>
      <p>{course.description}</p>
      <p>Created: {createdDate} at {createdTime}</p>
      <div id="course-id">{`code: ${course.id}`}</div>
    </div>
  )
}

export default Course;