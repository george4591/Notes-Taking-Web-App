import { UserContext } from "../context/user";
import { useContext } from "react";

const MainPage = () => {
  const { user, setUser, setIsLoggedIn, isLoggedIn } = useContext(UserContext);

  const handleLogOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setUser({});
  };

  

  return (
    <div>
      <h1>Hello {user.username}</h1>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default MainPage;
