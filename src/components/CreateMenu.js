import '../styles/CreateMenu.css';
import { Icon } from '@iconify/react';

const defaultFields = {
  name: "",
  description: "",
}

const CreateMenu = ({closeModal}) => {

  return (
    <div id="menu-wrapper">
      <Icon icon="bi:x" id='close-button' onClick={closeModal}/>
      <h3>Create Menu</h3>
      <form id='create-form'>
        <input type="text" className='course-input' placeholder="Course Name" />
        <textarea type="text" className='course-input' placeholder="Course Description" rows={5} />
        <button id="create-button">Create Course</button>
      </form>
    </div>
  );
}

export default CreateMenu;