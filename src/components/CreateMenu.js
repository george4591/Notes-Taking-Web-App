import '../styles/CreateMenu.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const defaultFields = {
  name: "",
  description: "",
  id: 0
}

const CreateMenu = ({closeModal}) => {
  const [fields, setFields] = useState(defaultFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  }
  return (
    <div id="menu-wrapper">
      <Icon icon="bi:x" id='close-button' onClick={closeModal}/>
      <h3>Create Menu</h3>
      <form onSubmit={handleSubmit} id='create-form'>
        <input type="text" className='course-input' placeholder="Course Name" />
        <textarea type="text" className='course-input' placeholder="Course Description" rows={5} />
        <div id='id-generator'>
          {fields.id}
          <Icon icon="pajamas:repeat"/>
        </div>
        <button id="create-button">Create Course</button>
      </form>
    </div>
  );
}

export default CreateMenu;