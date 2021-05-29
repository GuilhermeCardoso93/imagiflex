import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import "./Poster.css";
import Score from "./Score";
import { Movie } from "./../data/mock";

const Poster = ({ cover, title, score }: Movie, index: number) => (
  <article
    className="relative transition-all duration-500 ease-in-out transform hover:scale-110"
    key={index}
  >
    <img src={cover} className="max-w-md max-h-62 px-0.5" alt={title} />
    <div className="poster cursor-pointer absolute inset-0 w-full h-full px-4 py-8 grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
      <FontAwesomeIcon icon={faPlayCircle} size="3x" />
      <h2 className="text-2x1 text-center">{title}</h2>
      <Score value={score} />
    </div>
  </article>
);

export default Poster;
