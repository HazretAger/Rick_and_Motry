import React from "react";
import background from "./img/background.jpg";
import { CharacterCard, test, PaginationEl, SearchEl } from "./components";
import { useGetRandomCharactersQuery } from "./services/service";
import { useSelector } from "react-redux";

function App() {
  const currentCharacters = useSelector((state) => state.character.characters);
  const { data: randomCharacters } = useGetRandomCharactersQuery([
    1, 2, 3, 4, 5, 6,
  ]);

  const renderCharacters =
    currentCharacters === null ? randomCharacters : currentCharacters;

  const countPages =
    currentCharacters && Math.ceil(currentCharacters.length / 4);

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
              {renderCharacters &&
                renderCharacters.map((character) => {
                  return (
                    <CharacterCard character={character} key={character.id} />
                  );
                })}
            </div>
            {/* <div className="pagination-container">
              <PaginationEl />
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
