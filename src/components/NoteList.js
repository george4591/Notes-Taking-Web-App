import Note from "./Note";


const NoteList = ({ notes }) => {
  return (
    <ul id="list">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default NoteList;
