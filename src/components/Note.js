const Note = ({ note }) => {
  return (
    <li>
      {note.title + " " + note.content}
    </li>
  )
}

export default Note;