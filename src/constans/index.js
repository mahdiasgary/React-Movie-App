import avatar from '../assets/avatar.png'

import {
  AiOutlineHeart,
  MdOutlineExplore,
  BiGift,
  IoNewspaperOutline,
  GiCeremonialMask,
  MdMonitor,
  BiCameraMovie,
  AiOutlineSchedule,
} from "../common/icons";

export const sidbarItem = [
  { title: "Explore", icon: <MdOutlineExplore /> },
  { title: "Movies", icon: <BiCameraMovie /> },
  { title: "Series", icon: <MdMonitor /> },
  { title: "Anime", icon: <GiCeremonialMask /> },
  { title: "Genres", icon: <BiGift /> },
  { title: "Favourites", icon: <AiOutlineHeart /> },
  // { title: "News", icon: <IoNewspaperOutline /> },
  // { title: "Coming Soon", icon: <AiOutlineSchedule /> },
];

export const genres = [
  { name: "Action", imgUrl: "https://mobomoviez.fun/images/genres/action.jpg" },
  {
    name: "Adventure",
    imgUrl: "https://mobomoviez.fun/images/genres/adventure.jpg",
  },
  {
    name: "Animation",
    imgUrl: "https://mobomoviez.fun/images/genres/animation.jpg",
  },
  { name: "Comedy", imgUrl: "https://mobomoviez.fun/images/genres/comedy.jpg" },
  {
    name: "Mystery",
    imgUrl: "https://mobomoviez.fun/images/genre/mystery.jpg",
  },
  { name: "Sport", imgUrl: "https://mobomoviez.fun/images/genres/sport.jpg" },
  { name: "Horror", imgUrl: "https://mobomoviez.fun/images/genres/horror.jpg" },
  {
    name: "Documentary",
    imgUrl: "https://mobomoviez.fun/images/genres/documentary.jpg",
  },
  { name: "War", imgUrl: "https://mobomoviez.fun/images/genres/war.jpg" },
  { name: "Drama", imgUrl: "https://mobomoviez.fun/images/genres/drama.jpg" },
  { name: "Family", imgUrl: "https://mobomoviez.fun/images/genres/family.jpg" },
  {
    name: "Fantasy",
    imgUrl: "https://mobomoviez.fun/images/genres/fantasy.jpg",
  },
  {
    name: "History",
    imgUrl: "https://mobomoviez.fun/images/genres/history.jpg",
  },
  { name: "Crime", imgUrl: "https://mobomoviez.fun/images/genres/crime.jpg" },
  { name: "Music", imgUrl: "https://mobomoviez.fun/images/genres/music.jpg" },
  {
    name: "Musical",
    imgUrl: "https://mobomoviez.fun/images/genres/musical.jpg",
  },
  {
    name: "Biography",
    imgUrl: "https://mobomoviez.fun/images/genres/biography.jpg",
  },
  {
    name: "Western",
    imgUrl: "https://mobomoviez.fun/images/genres/western.jpg",
  },
  { name: "Sci-fi", imgUrl: "https://mobomoviez.fun/images/genres/sci-fi.jpg" },
];
export const trendingItem = [
  {id:1630029,
    title: "Avatar: The Way of Water",
    titleType: "movie",
    year: 2022,
    genres: ["Action","Adventure", "Fantasy", "Sci-Fi"],
    rating:7.8,
    time:'3h 12m',
    imgUrl:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm",
    imgBachGrand:avatar
  },  {
    id:13833688,
    title: "The Whale ",
    titleType: "movie",
    year: 2022,
    genres: ["Drama"],
    rating:8.0,
    time:'1h 57m',
    imgUrl:"https://filmkio.run/wp-content/uploads/2023/01/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX500.jpg",
    imgBachGrand:'https://filmkio.run/wp-content/uploads/2023/02/the-whale-wallpaper.jpg'
  },
 
  {id:9764362,
    title: "The Menu",
    titleType: "movie",
    year: 2022,
    genres: ["Comedy","Horror"],
    rating:7.2,
    time:'1h 47m',
    imgUrl:"https://filmkio.run/wp-content/uploads/2022/10/MV5BMzdjNjI5MmYtODhiNS00NTcyLWEzZmUtYzVmODM5YzExNDE3XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_SX500.jpg",
    imgBachGrand:'https://filmkio.run/wp-content/uploads/2022/10/the-menu-poster.jpg'
  },  {
    id:10954600,
    title: "Ant-Man and the Wasp",
    titleType: "movie",
    year: 2023,
    genres: ["Action","Adventure", "Fantasy", "Sci-Fi"],
    rating:7.8,
    time:'2h 4m',
    imgUrl:"https://mobomoviez.fun/images/movie/2023/tt10954600/thumbnail/ant-man-and-the-wasp-quantumania-2023.jpg",
    imgBachGrand:'https://mobomoviez.fun/images/movie/2023/tt10954600/cover/ant-man-and-the-wasp-quantumania-2023-cover.jpg'
  }, {
    id:8111088,
    title: "The Mandalorian",
    titleType: "movie",
    year: 2019,
    genres: ["Action","Adventure", "Fantasy", "Sci-Fi"],
    rating:8.7,
    time:'2h 36m',
    imgUrl:"https://filmkio.run/wp-content/uploads/2022/01/the-mandalorian-poster-210x310.jpg",
    imgBachGrand:'https://filmkio.run/wp-content/uploads/2022/01/the-mandalorian-wallpaper.jpg'
  },

];
