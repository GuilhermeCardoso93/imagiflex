import cover1 from "../assets/movie1.jpg";
import cover2 from "../assets/movie2.jpg";
import cover3 from "../assets/movie3.jpg";
import cover4 from "../assets/movie4.jpg";
import cover5 from "../assets/movie5.jpg";
import cover6 from "../assets/movie6.jpg";
import cover7 from "../assets/movie7.jpg";
import cover8 from "../assets/movie8.jpg";
import cover9 from "../assets/movie9.jpg";
import cover10 from "../assets/movie10.jpg";
import cover11 from "../assets/movie11.jpg";
import cover12 from "../assets/movie12.jpg";

export interface Movie  {
  title?: string;
  name?: string;
  cover?: string;
  poster_path?: string;
  vote_average?: number | string;
  id?: number | string;
}

const mockData: Movie[] = [
  {
    title: "X-Men - Days of Future Past",
    cover: cover1,
    vote_average: 10,
  },
  {
    title: "X-Men - Apocalypse ",
    cover: cover2,
    vote_average: 7,
  },
  {
    title: "X-Men - First Class",
    cover: cover3,
    vote_average: 9,
  },
  {
    title: "X-Men - Last Stand",
    cover: cover4,
    vote_average: 5,
  },
  {
    title: "X-Men",
    cover: cover5,
    vote_average: 10,
  },
  {
    title: "Deadpool 2",
    cover: cover6,
    vote_average: 7,
  },
  {
    title: "X-Men - Dark Phoenix",
    cover: cover7,
    vote_average: 6,
  },
  {
    title: "X-Men Origins - Wolverine ",
    cover: cover8,
    vote_average: 4,
  },
  {
    title: "Wolverine - Imortal ",
    cover: cover9,
    vote_average: 6,
  },
  {
    title: "Logan",
    cover: cover10,
    vote_average: 10,
  },
  {
    title: "Deeadpool",
    cover: cover11,
    vote_average: 10,
  },
  {
    title: "New Mutantes",
    cover: cover12,
    vote_average: 7,
  },
];

export default mockData;
