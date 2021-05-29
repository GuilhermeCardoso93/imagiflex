import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/imagiflix.png";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import user from "../assets/user.jpg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 grid grid-cols-2 items-center w-full p-8 ">
      <div className="justify-self-start grid grid-cols-2  items-center gap-4">
        <h1 className="hidden">Imagiflix</h1>
        <img src={logo} alt="Imagiflix" />
        <ul className="grid grid-flow-col gap-4">
          <li className="font-bold">Início</li>
          <li>
            <a href="#series">Séries</a>
          </li>
          <li>
            <a href="#movies">Filmes</a>
          </li>
        </ul>
      </div>
      <div className="justify-self-end flex  items-center justify-items-end">
        <form className="relative w-64">
          <input
            className="w-full bg-black rounded border border-white  px-3 py-1 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100"
            type="text"
            placeholder="Títulos, gente e gêneros"
          />
          <button className="absolute right-0 px-2 py-1">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <div className="relative flex ml-4">
          <img
            src={user}
            width="26"
            alt="Foto do Usuário"
            onClick={handleClick}
          />
          <button onClick={handleClick}>
            <FontAwesomeIcon className="ml-3" icon={faCaretDown} />
          </button>
          <ul
            className={`absolute mt-10 top-0 right-0 w-32 bg-black rounded p-4 transition-all duration-400 ease-in-out ${
              !isMenuOpen && "invisible opacity-0"
            }`}
          >
            <li>
              <a href="#account" onClick={handleClick}>
                Minha Conta
              </a>
            </li>
            <li>
              <a href="#logout" onClick={handleClick}>
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
