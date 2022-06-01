import React from "react";
import background from "../img/148.jpeg";

const CharacterCard = () => {
  return (
    <div className="character__card">
      <div className="character__card__image">
        <img src={background} alt="Avatar" style={{ width: "200px" }} />
      </div>
      <div className="character__info">
        <div className="character__info__section">
          <h2 className="character__name">Rick Sunchez</h2>
          <span className="character__status">Dead - Human</span>
        </div>
        <div className="character__info__section">
          <span class="info__addition">Last known location:</span>
          <a href="" className="character__info__link">
            Citadel of Ricks
          </a>
        </div>
        <div className="character__info__section">
          <span class="info__addition">First seen in:</span>
          <a href="" className="character__info__link">
            Citadel of Ricks
          </a>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
