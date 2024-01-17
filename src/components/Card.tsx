import { MouseEventHandler } from "react";

interface ICard {
  text: string,
  onClick: MouseEventHandler<HTMLButtonElement>
}
const Cards = ({text, onClick} : ICard) => {
  return (
    <div className="cards-note">
      <p className="text">{text}</p>
      <button className="btn-delite" onClick={onClick}>X</button>
    </div>
  )
}

export default Cards;