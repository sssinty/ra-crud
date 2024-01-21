import { MouseEventHandler } from "react";

interface ICard {
  text: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  id: number
}
const Cards = ({text, onClick, id} : ICard) => {
  return (
    <div className="cards-note">
      <p className="text">{text}</p>
      <button className="btn-delite" onClick={() => onClick(id)}>X</button>
    </div>
  )
}

export default Cards;