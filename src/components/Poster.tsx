import React from "react";

import CONST from '../data/contants';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import "./Poster.css";
import Score from "./Score";
import { Movie } from "./../data/mock";

const Poster = ({ cover, poster_path, title, name, vote_average }: Movie, index: number) => {
  const { IMAGEURL } = CONST;
  return (
  <article
    className="relative transition-all duration-500 ease-in-out transform hover:scale-110"
    key={index}
  >
    <img src={poster_path ? `${IMAGEURL}/w200/${poster_path}`: cover} className="max-w-md max-h-62 px-0.5" alt={title ? title : name} />
    <div className="poster cursor-pointer absolute inset-0 w-full h-full px-4 py-8 grid place-items-center text-center bg-black leading-6 bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
    <h2 className="text-2xl">{title ? title : name }</h2>
          <FontAwesomeIcon icon={faPlayCircle} size="5x" />
          <Score value={vote_average} />
    </div>
  </article>
)
};

export default Poster;
