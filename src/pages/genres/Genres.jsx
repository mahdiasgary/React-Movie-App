import GenreCard from "../../components/genre/GenreCard";
import { genres } from "../../constans";

const Genres = () => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-8 justify-center mx-5 mt-16">
        {genres.map((genre, index) => (
          <GenreCard genre={genre} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Genres;
