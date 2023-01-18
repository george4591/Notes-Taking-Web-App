import { useContext } from "react";
import { UserContext } from "./context/user";
import "./App.css";
import LoginForm from "./components/LoginForm";
import MainPage from "./components/MainPage";

function App() {
  const { isLoggedIn } = useContext(UserContext);

  return <div className="App">{isLoggedIn ? <MainPage /> : <LoginForm />}</div>;
}

export default App;
