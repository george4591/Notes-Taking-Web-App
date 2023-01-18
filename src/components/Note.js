import { useContext } from "react";
import { UserContext } from "../context/user";
import "../styles/Note.css";

const Note = ({ note }) => {
  const { setEditMode, setNoteToEdit } = useContext(UserContext);
  const handleEditMode = () => {
    setEditMode(true);
    setNoteToEdit(note);
  };
  const createdDate = new Date(note.updatedAt).toLocaleDateString("en-US");
  const createdTime = new Date(note.updatedAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <li onClick={handleEditMode}>
      <p>{note.title}</p>
      <div id="date">
        <div>
          {createdTime}
        </div>
        <div>
          {createdDate}
        </div>
      </div>
    </li>
  )
}

export default Note;