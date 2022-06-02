import React from "react";

const CharacterCard = ({ character }) => {
  const {
    name: characterName,
    status,
    species,
    image,
    location: { name: locationName },
    origin: { name: originName },
  } = character;

  return (
    <div className="character__card">
      <div className="character__card__image">
        <img src={image} alt="Avatar" />
      </div>
      <div className="character__info">
        <div className="character__info__section">
          <h2 className="character__name">{characterName}</h2>
          <span className="character__status">
            {status} - {species}
          </span>
        </div>
        <div className="character__info__section">
          <span className="info__addition">Last known location:</span>
          <a href="" className="character__info__link">
            {locationName}
          </a>
        </div>
        <div className="character__info__section">
          <span className="info__addition">First seen in:</span>
          <a href="" className="character__info__link">
            {originName}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
