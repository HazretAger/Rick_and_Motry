import React from "react";
import background from "./img/background.jpg";
import { CharacterCard, SearchEl } from "./components";
import { useGetCharactersQuery } from "./services/service";
import { useSelector } from "react-redux";

function App() {
  const searchValue = useSelector((state) => state.character.searchValue);
  const response = useGetCharactersQuery(searchValue);
  const renderCharacter =
    searchValue.length === 0 ? response.data : response.data.results;

  return (
    <div className="wrapper">
      <main className="main">
        <div className="main__main-block">
          <div className="main-block__container _container">
            <div className="main-block__body">
              <h1 className="main-block__title">The Rick and Morty</h1>
            </div>
            <div className="main-block__image _ibg">
              <img src={background} alt="cover" />
            </div>
          </div>
        </div>
        <div className="main__character-block">
          <div className="character-block__container _container">
            <div className="search-container">
              <SearchEl />
            </div>
            <div className="cards-container">
              {renderCharacter &&
                renderCharacter.map((character) => {
                  return (
                    <CharacterCard character={character} key={character.id} />
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
