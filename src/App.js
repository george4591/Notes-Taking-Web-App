import { useContext } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { UserContext } from "./context/user";

function App() {
  const { isLoggedIn } = useContext(UserContext);
  console.log(isLoggedIn);
  return (
    <div className="App">
      <header className="App-header">
        {!isLoggedIn ? <LoginForm /> : "Loged In"}
      </header>
    </div>
  );
}

export default App;
