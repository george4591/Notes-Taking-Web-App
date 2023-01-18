import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [courses, setCourses] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState({});

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

  const editNote = (note) => {
    const newCourses = courses.map((course) => {
      if (course.id === Number(note.courseId)) {
        const newNotes = course.notes.map((n) => (n.id === note.id ? note : n));
        return { ...course, notes: newNotes };
      }
      return course;
    });
    setCourses([...newCourses]);
  };

  const removeNote = (note) => {
    
    const newCourses = courses.map(course => {
      if (course.id === Number(note.courseId)) {
        const newNotes = course.notes.filter(n => n.id !== note.id);
        return { ...course, notes: newNotes };
      }
    })
    setCourses([...newCourses]);
  }

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
        editMode,
        setEditMode,
        noteToEdit,
        setNoteToEdit,
        editNote,
        removeNote,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
