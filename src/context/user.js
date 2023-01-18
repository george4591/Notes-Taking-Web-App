import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const addNote = (course, note) => {
    const newNotes = course.notes ? [...course.notes, note] : [note];
    const newCourse = { ...course, notes: newNotes };
    const newCourses = courses.filter((c) => c.id !== newCourse.id);
    newCourses.push(newCourse);
    
    setCourses([...newCourses]);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        courses,
        addCourse,
        setCourses,
        addNote,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
