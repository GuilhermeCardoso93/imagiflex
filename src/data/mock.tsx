import cover1 from "../assets/movie1.jpg";
import cover2 from "../assets/movie2.jpg";
import cover3 from "../assets/movie3.jpg";
import cover4 from "../assets/movie4.jpg";
import cover5 from "../assets/movie5.jpg";
import cover6 from "../assets/movie6.jpg";
import cover7 from "../assets/movie7.png";
import cover8 from "../assets/movie8.jpg";
import cover9 from "../assets/movie9.jpg";
import cover10 from "../assets/movie10.jpg";
import cover11 from "../assets/movie11.jpg";
import cover12 from "../assets/movie12.png";
import cover13 from "../assets/movie13.jpg";

export interface Movie  {
  title: string;
  cover: string;
  score?:number| string;
}

const mockData: Movie[] = [
  {
    title: "X-Men - Days of Future Past",
    cover: cover1,
  },
  {
    title: "X-Men - Apocalypse ",
    cover: cover2,
  },
  {
    title: "X-Men - First Class",
    cover: cover3,
  },
  {
    title: "X-Men - Last Stand",
    cover: cover4,
  },
  {
    title: "X-Men",
    cover: cover5,
  },
  {
    title: "Deadpool 2",
    cover: cover6,
  },
  {
    title: "X-Men - Dark Phoenix",
    cover: cover7,
  },
  {
    title: "X-Men Origins - Wolverine ",
    cover: cover8,
  },
  {
    title: "Wolverine - Imortal ",
    cover: cover9,
  },
  {
    title: "Logan",
    cover: cover10,
  },
  {
    title: "Deeadpool",
    cover: cover11,
  },
  {
    title: "New Mutantes",
    cover: cover12,
  },
  {
    title: "X-men 2",
    cover: cover13,
  },
];

export default mockData;
