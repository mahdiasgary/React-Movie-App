import { Link, withRouter } from "react-router-dom";
import { BsPlay } from "react-icons/bs";
import { useGetMovieImgQuery } from "../../redux/services/movieDatabase";
import { Spin } from "antd";
const MoviePage = ({ history }) => {
  const movieData = history.location.state?.data;
  const { data, fetching, error } = useGetMovieImgQuery({
    movieId: movieData?.id.match(/\d+/g)[0],
  });
  return (
    <div className="text-textDark">
      <Spin/>
      <div className="bg-black bg-opacity-80 absolute top-0 right-0 z-10 w-full h-[625px]   "></div>
      <div className="absolute top-0 z-0  ">
        <img
          src={data?.images[1]?.url}
          alt=""
          className="w-[1100px] h-[625px] overflow-hidden "
        />
      </div>
      <div className="ml-12 mt-10 relative z-20">
        <div className="flex mt-8 relative z-10">
          <div className="z-10">
            <img
              src={movieData?.title.image.url}
              alt={movieData?.title.image.url}
              className="w-[236px] h-[348px] rounded-lg "
            />
            <div className="flex justify-center mt-1 z-10">
              <button className="w-[44px] h-[44px] bg-textPDark flex justify-center rounded-2xl text-[25px] ">
                <BsPlay className="self-center" />
              </button>
              <p className="self-center mx-2 ">View Trailar </p>
            </div>
          </div>
          <div className="flex flex-col mx-4 mt-3 z-10">
            <div className="text-[28px] font-bold ">
              {movieData?.title.title}
            </div>
            <p className="font-semibold text-textPlight">
              {movieData?.title.titleType}
            </p>
            <div className="flex mt-5">
              {movieData?.genres.slice(0, 5).map((genre, index) => (
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
            <div className="flex mt-4">
              <img
                src="https://mobomoviez.fun/img/imdb.png"
                alt=""
                className="rounded-xl"
              />
              <span className="self-center mx-1 font-bold">
                {movieData?.ratings.rating}
                <span className="text-textPDark">
                  ( {movieData?.ratings.ratingCount} votes )
                </span>
              </span>
            </div>
            <div className="flex mt-1 flex-col w-[680px]">
              <p className="  font-semibold">
                <span className="font-semibold text-textPDark "> Year :</span>
                {movieData?.title.year}
              </p>
              <div className="font-semibold">
                <span className="font-semibold text-textPDark "> Time : </span>
                {movieData?.title.runningTimeInMinutes || "--"} minutes
              </div>
              <div className="font-semibold">
                <span className="font-semibold text-textPDark ">
                  
                  Country :
                </span>
                {movieData?.certificates.US[0].country}
              </div>
              <div className="font-semibold">
                <span className="font-semibold text-textPDark ">
                  
                  Author :
                </span>
                {movieData?.plotSummary?.author}
              </div>
              <div className="font-semibold text-textPlight ">
                <span className="font-semibold text-textPDark ">
                  
                  summery :
                </span>
                {movieData?.plotOutline.text}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-16">cast</div>
        <div>j</div>
        <div>relate</div> */}
      </div>
    </div>
  );
};

export default withRouter(MoviePage);
