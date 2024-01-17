import { ChangeEventHandler, MouseEvent } from "react";

interface INotesInput {
  type: string,
  onChange:ChangeEventHandler<HTMLInputElement>,
  onClick: MouseEvent
  // value: string,
}

const NotesInput = ({type = 'text', onChange, onClick} : INotesInput) => {
  return (
    <div className="inputNotes">
      <input type={type} onChange={onChange}/>
      <button className="btn-send" onClick={onClick}></button>
    </div>
  )
}

export default NotesInput;