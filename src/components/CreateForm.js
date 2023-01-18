import { useState, useContext, useEffect } from "react";
import { createCourse } from "../services/courses";
import { UserContext } from "../context/user";
import { Icon } from "@iconify/react";

import "../styles/CreateForm.css";

const generateID = () => Math.floor(Math.random() * 10000);

const defaultFields = {
  name: "",
  description: "",
  id: generateID(),
};

const CreateForm = ({ onCreate, isOpened }) => {
  const { user, addCourse } = useContext(UserContext);
  const [fields, setFields] = useState(defaultFields);

  const regenerateID = () => {
    setFields({ ...fields, id: generateID() });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  useEffect(() => {
    if (isOpened) regenerateID();
  }, [isOpened]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fields.name && fields.description) {
      try {
        const course = await createCourse(user.email, fields);
        addCourse(course.data);
        onCreate();
      } catch (error) {
        console.log("EROARE NU S A CREAT CURS");
      }
    }
  };
  return (
    <div>
      <h3>Create Menu</h3>
      <form onSubmit={handleSubmit} id="create-form">
        <input
          type="text"
          className="course-input"
          name="name"
          placeholder="Course Name"
          onChange={handleChange}
          value={fields.name}
        />
        <textarea
          type="text"
          className="course-input"
          name="description"
          placeholder="Course Description"
          rows={5}
          onChange={handleChange}
          value={fields.description}
        />
        <p id="id-label">Code</p>
        <div id="id-generator">
          {fields.id}
          <Icon icon="pajamas:repeat" onClick={regenerateID} id="x-icon" />
        </div>
        <button id="create-button">Create Course</button>
      </form>
    </div>
  );
};

export default CreateForm;
