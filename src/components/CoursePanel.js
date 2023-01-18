import { useState, useContext } from "react";
import { UserContext } from "../context/user";
import "../styles/CoursePanel.css";
import { createNote } from "../services/courses.js";
import NoteList from "./NoteList";

const CoursePanel = ({ course }) => {
  const [title, setTitle] = useState("");
  const [showForm, setShowForm] = useState(false);
  const { addNote } = useContext(UserContext);

  const handleCreate = async () => {
    if (title) {
      try {
        const note = await createNote(course.id, title);
        addNote(course, note.data);
        setTitle("");
      } catch (error) {
        console.log("NU A PUTUT FI CREATA NOTITA", error);
      }

      setShowForm(false);
    }
  };

  return (
    <div id="course-panel">
      <div id="course-header">
        <h3>Course Panel</h3>
        <button id="new-note-button" onClick={() => setShowForm(true)}>
          New Note
        </button>
      </div>
      {showForm && (
        <div id="note-form-wrapper">
          <form id="note-form" onSubmit={(e) => e.preventDefault()}>
            <input
              id="title-input"
              type="text"
              placeholder="Note Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div id="button-group">
              <button onClick={handleCreate}>Create</button>
              <button onClick={() => setShowForm(false)}>Close</button>
            </div>
          </form>
        </div>
      )}
      <div id="modified-label">
        <div>
          Title
        </div>
        <div>
          Last Edit
        </div>
      </div>
      {course.notes && course.notes.length > 0 && (
        <NoteList notes={course.notes} />
      )}
    </div>
  );
};

export default CoursePanel;
