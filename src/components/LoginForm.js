import { useState, useContext } from "react";

const formFields = {
  username: "",
  email: "",
};

const LoginForm = () => {
  const [fields, setFields] = useState(formFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  }

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
