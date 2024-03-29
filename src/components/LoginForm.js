import { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { auth } from "../services/students";

import '../styles/LoginForm.css'

const formFields = {
  // username: "",
  email: "",
};

const LoginForm = () => {
  const [fields, setFields] = useState(formFields);
  const { setUser, setIsLoggedIn, setCourses } = useContext(UserContext);

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
        setCourses([...student.data.courses]);
      } catch (error) {
        
      }
      
      setUser({ email });
      setIsLoggedIn(true);
    }
  };

  return (
    <div id="bg">
      <div id='login-wrapper'>
      Login
      <form id="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          pattern="^\S+@stud\.ase\.ro$"
          value={fields.email}
          onChange={handleChange}
          required
        />
        <button>Log In</button>
      </form>
    </div>

      </div>
    
  );
};

export default LoginForm;
