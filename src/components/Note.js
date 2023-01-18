import { useContext } from "react";
import { UserContext } from "../context/user";

const Note = ({ note }) => {
  const { setEditMode, setNoteToEdit } = useContext(UserContext);
  const handleEditMode = () => {
    setEditMode(true);
    setNoteToEdit(note);
  };
  return (
    <li onClick={handleEditMode}>
      <p>{note.title + " " + note.content}</p>
    </li>
  )
}

export default Note;