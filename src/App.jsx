import React, { useEffect } from "react";
import logo from "./img/logo.png";
import background from "./img/background.jpg";
import { CharacterCard, SearchEl, PaginationEl } from "./components";
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
      <header className="header">
        <div className="header__container _container">
          <a href="" className="header__logo">
            <img src={logo} alt="" />
          </a>
          <nav className="header__menu menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Home
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Alive
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Dead
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Locations
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="page">
        <div className="page__main-block main-block">
          <div className="main-block__container _container">
            <div className="main-block__body">
              <h1 className="main-block__title">The Rick and Morty</h1>
            </div>
            <div className="main-block__image _ibg">
              <img src={background} alt="cover" />
            </div>
          </div>
        </div>
        <div className="character__block">
          <div className="page__character-block character-block">
            <div className="character-block__container _container">
              <div className="character-block__search">
                <SearchEl />
              </div>
              <div className="character-block__cards">
                {renderCharacters &&
                  renderCharacters.map((character) => {
                    return (
                      <CharacterCard character={character} key={character.id} />
                    );
                  })}
              </div>
              <div className="pagination__block">
                {currentCharacters && <PaginationEl countPages={countPages} />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
