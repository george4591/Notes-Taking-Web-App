import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  }

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn, courses, addCourse, setCourses }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;