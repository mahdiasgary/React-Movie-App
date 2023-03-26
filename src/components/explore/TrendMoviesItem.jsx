import { Link } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../../redux/services/movieDatabase";

const TrendMoviesItem = ({ item }) => {
  const { data, fetching, error } = useGetMovieDetailsQuery({
    movieId: item.id,
  });
  return (
    <Link to={{ pathname: `/movies/${data?.title?.title}`, state: { data } }}>
      <div className="relative h-[250px] md:h-[350px] max-w-[700px] flex dark:bg-transparent  bg-black bg-opacity-70 text-textDark rounded-3xl ">
        <img
          src={item.imgBachGrand}
          alt=""
          className="absolute z-0 h-[250px] md:h-[350px] w-[700px] rounded-3xl   opacity-[65%] "
        />
        <div className="z-20 relative self-center flex mx-3 md:mx-7 w-full ">
          <img
            src={item.imgUrl}
            alt=""
            className="w-[130px] h-[191px] self-center md:w-[190px] md:h-[280px] rounded-2xl mr-5 "
          />
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-col">
              <p className="text-[19px] md:text-[22px] font-semibold ">{item.title}</p>
              <div className="flex text-sm md:text-[16px] mt-3 font-semibold opacity-80 ">
                {item.year} | {item.titleType} | {item.time}
              </div>
              <div className="flex mt-1 flex-wrap opacity-90 text-sm ">
                {item.genres.slice(0,4).map((genre, index) => (
                  <Link
                    key={index}
                    to={{
                      pathname: `/genres/${genre?.toLocaleLowerCase()}`,
                      state: { genre },
                    }}
                  >
                    <p className={`${(index===2 || index===3 || index===1 )&& 'hidden md:flex'} mr-2 backdrop-blur-sm font-semibold  bg-black bg-opacity-25 py-1 px-4 mt-2 rounded-sm hover:bg-screenDark duration-300 `}>
                      {genre}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row pt-5 justify-end  ">
                <button className="hidden sm:inline sm:w-full sm:mr-5 mx-2 y9:mx-8   my-2 sm:my-0 sm:mx-0 py-3 bg-gray-400 rounded-xl backdrop-blur-sm bg-opacity-30 font-semibold ">
                  Trailer
                </button>
                <button className="sm:w-full sm:mr-5 mx-2 y9:mx-8  sm:mx-0 py-3 bg-blue-700 duration-300 rounded-xl backdrop-blur-sm hover:bg-blue-800 font-semibold ">
                  Watch Movie
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendMoviesItem;
