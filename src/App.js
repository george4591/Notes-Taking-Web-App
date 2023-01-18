import { useContext } from "react";
import { UserContext } from "./context/user";
import "./App.css";
import LoginForm from "./components/LoginForm";
import MainPage from "./components/MainPage";

function App() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? <MainPage /> : <LoginForm />}
      </header>
    </div>
  );
}

export default App;
