import React from "react";
import background from "../img/148.jpeg";

const CharacterCard = () => {
  return (
    <div className="character__card">
      <div className="character__card__image">
        <img src={background} alt="Avatar" style={{ width: "200px" }} />
      </div>
      <div className="character__information">
        <div className="character__information__title"></div>
        <div className="character__information__location"></div>
      </div>
    </div>
  );
};

export default CharacterCard;
