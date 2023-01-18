const Note = ({ note }) => {
  return (
    <li>
      <p>{note.title + " " + note.content}</p>
    </li>
  )
}

export default Note;