import { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { auth } from "../services/students";

const formFields = {
  // username: "",
  email: "",
};

const LoginForm = () => {
  const [fields, setFields] = useState(formFields);
  const { setUser, setIsLoggedIn } = useContext(UserContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fields.email) {
      const { email } = fields;

      try {
        const student = await auth(email);
      } catch (error) {
        
      }
      
      setUser({ email });
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          name="username"
          value={fields.username}
          onChange={handleChange}
          required
        /> */}
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
