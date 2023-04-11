import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ItemCard from "../../components/explore/ItemCard";
import { useGetTopMoviesQuery } from "../../redux/services/movieDatabase";

const MoviesPage = () => {
  const { data, isFetching, error } = useGetTopMoviesQuery();
  if (isFetching) {
    return (
      <div className="flex justify-center mt-10 ">
        <div>
          <LoadingOutlined style={{ fontSize: 48 }} />
        </div>
        <p className="text-[26px] self-center mx-1 ">Loading . . . </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full self-center">
      <h7 className="text-[22px] font-semibold mx-8 mt-8"> Popular Movies</h7>
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-2 y9:gap-5 mx-1 md:mx-8 mt-10 self-center ">
          {data?.slice(0, 8)?.map((movieId, index) => (
            <ItemCard movieId={movieId?.match(/\d+/g)[0]} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
