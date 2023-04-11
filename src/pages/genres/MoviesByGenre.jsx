import { LoadingOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import ItemCard from "../../components/explore/ItemCard";
import { useGetTopMoviesByGenreQuery } from "../../redux/services/movieDatabase";

const MoviesByGenre = ({ history }) => {
  console.log(history.location.state);
  const { data, isFetching, error } = useGetTopMoviesByGenreQuery({
    genre: history.location.state?.genre.toLowerCase(),
  });
  if (isFetching) {
    return (
      <div className="flex justify-center mt-10 ">
        <div>
          <LoadingOutlined style={{ fontSize: 48 }} />
        </div>
        <p className="text-[26px] self-center mx-1 ">Loading . . . </p>
      </div>
    );
  }  return (
    <div className="flex flex-col">
      <p className="text-[22px] font-semibold mx-8 mt-8">
        {history.location.state?.genre} Movies
      </p>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-5 mx-8 mt-10 ">
          {data?.slice(0, 8)?.map((movieId, index) => (
            <ItemCard movieId={movieId?.match(/\d+/g)[0]} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(MoviesByGenre);
