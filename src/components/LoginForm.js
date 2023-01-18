import { useState, useContext } from "react";
import { UserContext } from "../context/user";

const formFields = {
  username: "",
  email: "",
};

const LoginForm = () => {
  const [fields, setFields] = useState(formFields);
  const { user, setUser, setIsLoggedIn } = useContext(UserContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fields.username && fields.email) {
      setUser({ fields });
      setIsLoggedIn(true);
      console.log(user);
    }
  };

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          required
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
