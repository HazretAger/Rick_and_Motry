import React from "react";
import logo from "./img/logo.png";
import background from "./img/background.jpg";
import CharacterCard from "./components/CharacterCard";

function App() {
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
                <div className="search">
                  <input
                    type="text"
                    className="searchTerm"
                    placeholder="Search..."
                  />
                  <button type="submit" className="searchButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="character-block__cards">
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
