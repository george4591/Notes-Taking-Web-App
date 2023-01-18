import { useContext } from "react";
import { UserContext } from "../context/user";
import "../styles/EditNote.css";

export const EditNote = () => {
  const { setEditMode, noteToEdit, setNoteToEdit } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteToEdit({ ...noteToEdit, [name]: value });
  };


  const handleEditMode = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  return (
    <div id="edit-wrapper">
      <input
        type="text"
        className="course-input"
        name="title"
        placeholder="Note Title"
        onChange={handleChange}
        value={noteToEdit.title}
      />
      <textarea
        type="text"
        className="course-input"
        name="content"
        placeholder="Note Content"
        rows={20}
        onChange={handleChange}
        value={noteToEdit.content}
      />
      <button onClick={handleEditMode}>Save</button>
      <button onClick={handleEditMode}>Cancel</button>
    </div>
  );
};
