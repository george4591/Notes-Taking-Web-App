import { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { updateNote, deleteNote } from "../services/courses";
import "../styles/EditNote.css";

export const EditNote = () => {
  const { setEditMode, noteToEdit, editNote, removeNote } =
    useContext(UserContext);
  const [note, setNote] = useState(noteToEdit);
  const [hasModified, setHasModified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
    setHasModified(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (hasModified) {
      try {
        const updatedNote = await updateNote(note);
        editNote(updatedNote.data);
      } catch (error) {
        console.log(error);
      }
    }
    setEditMode(false);
  };

  const handleDelete = async (e) => {
    try {
      await deleteNote(note.id);
      removeNote(note);
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="edit-wrapper">
      <input
        type="text"
        className="course-input"
        name="title"
        placeholder="Note Title"
        onChange={handleChange}
        value={note.title}
      />
      <textarea
        type="text"
        className="course-input"
        id="note-content"
        name="content"
        placeholder="Note Content"
        onChange={handleChange}
        value={note.content}
      />
      <div id="note-buttons">
        <button onClick={handleEdit}>Save</button>
        <button onClick={() => setEditMode(false)}>Cancel</button>
        <button onClick={handleDelete}>Delete Note</button>
      </div>
    </div>
  );
};
