import { UserContext } from "../context/user";
import { useContext } from "react";
import StudentBoard from "./StudentBoard";

const MainPage = () => {
  const { user, setUser, setIsLoggedIn, isLoggedIn } = useContext(UserContext);

  const handleLogOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setUser({});
  };

  return (
    <div>
      <StudentBoard/>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default MainPage;
