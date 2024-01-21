import { ChangeEventHandler, MouseEventHandler } from "react";

interface INotesInput {
  type: string,
  onChange:ChangeEventHandler<HTMLInputElement>,
  onClick?: MouseEventHandler<HTMLButtonElement>
  // value: string,
}

const NotesInput = ({type = 'text', onChange, onClick} : INotesInput) => {
  return (
    <div className="inputNotes">
      <input type={type} onChange={onChange}/>
      <button className="btn-send" onClick={onClick}>Ok</button>
    </div>
  )
}

export default NotesInput;