import { Spin } from "antd";
import { Link } from "react-router-dom";
import a from "../../assets/8.gif";
import { useGetMovieDetailsQuery } from "../../redux/services/movieDatabase";
const ExploreItemCard = ({ movieId }) => {
  const { data, isFetching, error } = useGetMovieDetailsQuery({
    movieId: movieId,
  });
  if (isFetching) {
    return (
      <div className="flex justify-center h-full  dark:border border-slate-400 rounded-2xl ">
        <div className="self-center ">
          <Spin className="self-center" size="large" />
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center h-full  dark:border border-slate-400 rounded-2xl ">
        <div className="self-center ">
          <Spin className="self-center" size="large" />
        </div>
      </div>
    );
  }
  return (
    <Link to={{ pathname: `/movies/${data?.title.title}`, state: { data } }}>
      <div className={`flex flex-col text-textDark `}>
        <div className="relative group">
          <img
            src={data?.title.image.url}
            alt=""
            className={`w-[130px] h-[191px] md:w-[170px] md:h-[250px] rounded-xl`}
          />
          <div className=" z-20 hidden md:flex absolute md:w-[170px] md:h-[250px] inset-0  rounded-xl origin-bottom scale-y-0 group-hover:scale-y-100 group-hover:bg-opacity-80   group-hover:bg-screenDark  duration-200 cursor-pointer ">
            <div className=" flex flex-col justify-between">
              <div>
                <p className="text-[17px] mt-2 mx-1 font-semibold ">
                  {data?.title.title}
                </p>
                <div className="flex mt-2 mx-3">
                  <img
                    src="https://mobomoviez.fun/img/imdb.png"
                    alt=""
                    className="rounded-xl w-[27px] h-[27px] "
                  />
                  <span className="self-center mx-1 font-bold">
                    {data?.ratings.rating}{" "}
                  </span>
                </div>

                <div className="flex flex-wrap mt-1 mx-2 text-sm font-semibold">
                  {data?.genres.slice(0, 2).map((genre, index) => (
                    <Link
                      key={index}
                      to={{
                        pathname: `/genres/${genre?.toLocaleLowerCase()}`,
                        state: { genre },
                      }}
                    >
                      <p className="mr-2 backdrop-blur-sm  bg-gray-200 bg-opacity-10 py-1 px-3 mt-2 rounded-sm hover:bg-screenDark ">
                        {genre}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="text-center pb-6  w-[169px] px-3 ">
                <button className=" btn py-2 w-full rounded-md  backdrop-blur-sm  font-bold hover:rounded-xl  ">
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

export default ExploreItemCard;
