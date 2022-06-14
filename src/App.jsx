import React from "react";
import background from "./img/background.jpg";
import { CharacterCard, SearchEl } from "./components";
import { useGetCharactersQuery } from "./services/service";
import { useSelector } from "react-redux";

function App() {
  const { data = [] } = useGetCharactersQuery();
  const { results: searchCharacters } = useSelector(
    (state) => state.character.currentCharacters
  );
  const renderCharacters = searchCharacters ?? data;

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
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="" className="nav__link">
                    Locations
                  </a>
                </li>
                <li className="nav__item">
                  <a href="" className="nav__link">
                    Episodes
                  </a>
                </li>
              </ul>
            </nav>
            <div className="cards-container">
              {renderCharacters.map((character) => {
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
