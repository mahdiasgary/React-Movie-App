import { Link, withRouter } from "react-router-dom";
import { BsPlay } from "react-icons/bs";
import { useGetMovieImgQuery } from "../../redux/services/movieDatabase";
import { Spin } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import { BiLike, BiDislike } from "react-icons/bi";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import MoviePageDtailes from "./MoviePageDtailes";
import Trailer from "./Trailer";
import Comments from "./Comments";
import Download from "./Download";
import Details from "./Details";

const poi = ['Details' , 'Downlaod' ,'Trailer', 'Comments' ]
const MoviePage = ({ history }) => {
  const [query, setQuery] = useState('Details')
 const movieData = history.location.state?.data;
  const { data, fetching, error } = useGetMovieImgQuery({
    movieId: movieData?.id.match(/\d+/g)[0],
  });
  const [windowSize, setWindowSize] = useState(window.innerWidth - 290 + "px");
  const [likedd, setlikedd] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth - 290 + "px");
      console.log(windowSize);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth - 290 + "px");
      console.log(windowSize);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const genres = ["sfsfgg", "srs", "oduw", "wjnkkkkd"];
  return (
    <div>
      {/* <div className="dark:bg-[#101018] h-screen fixed w-full "></div> */}
    <div className="w-full z-0 relative group top-[-84px] dark:bg-[#101018] h-[2000px]  text-screenLight">
      <div className=" absolute z-20 w-full mt-28 px-3 y9:px-7 sm:px-10 md:px-5 lg:px-2 xl:px-10 2xl:px-20  ">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-auto flex justify-center md:justify-start ">
              <div className="flex-col">
                <img
                  src={
                    "https://filmkio.run/wp-content/uploads/2022/01/MV5BOThjODMyM2QtNTNhYi00ZGM4LWIxZTAtMDAyYWNhYzYxMjJiXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX500.jpg"
                  }
                  alt={movieData?.title.image.url}
                  className="min-w-[180px] max-h-[265px] y9:min-w-[240px] y9:max-h-[352px] lg:min-w-[200px] lg:max-h-[351px]  xl:min-w-[240px] xl:max-h-[352px] self-center  rounded-lg  "
                />
                <div className="flex justify-center mt-1 z-10">
                  <button className="w-[44px] h-[44px]  bg-screenDark bg-opacity-80 hover:bg-screenDark duration-300 border border-btn   text-btn flex justify-center rounded-2xl text-[25px] ">
                    <BsPlay className="self-center" />
                  </button>
                  <p className="self-center mx-2 ">View Trailar </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mr-8">
              <div className=" flex flex-col  mx-2 xl:mx-5   md:flex-row md:justify-between ">
                <div>
                  <div>
                    <p className="text-[25px] y9:text-[28px] font-bold text-center md:text-start  ">
                      Last Of Us SRBtr
                    </p>
                    <div className="flex justify-center md:justify-start text-textPlight ">
                      <p>2023</p>
                      <RxDotFilled className="self-center" />
                      <p>movie</p>
                      <RxDotFilled className="self-center" />
                      <p>60 min</p>
                    </div>
                    <div className="flex md:hidden mt-3 justify-center gap-2">
                    <div className="border md:border-0 border-border px-1 rounded-lg w-[100px] h-[76px] self-center text-center  backdrop-blur-sm  bg-screenDark bg-opacity-80  ">
                      <div>
                        <p className="text-[29px] text-yellow-400 inline">
                          8.9
                        </p>
                        /10
                      </div>
                      <p className="text-sm text-textPDark "> 338k votes </p>
                    </div>
                    <div className=" text-[28px] cursor-pointer text-green-700 md:border-0 border border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark ">
                      {likedd ? (
                        <AiFillLike className="self-center" />
                      ) : (
                        <BiLike className="self-center" />
                      )}
                    </div>
                    <div className=" text-[28px] cursor-pointer text-red-700 border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark">
                      {likedd ? (
                        <AiFillDislike className="self-center" />
                      ) : (
                        <BiDislike className="self-center" />
                      )}
                    </div>
                    <div
                      className=" text-[28px] cursor-pointer  border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark"
                      onClick={() => setlikedd(!likedd)}
                    >
                      {likedd ? (
                        <AiFillHeart className="self-center" />
                      ) : (
                        <AiOutlineHeart className="self-center" />
                      )}
                    </div>
                  </div>
                    <div className="flex justify-center md:justify-start mt-5">
                      {genres.slice(0, 5).map((genre, index) => (
                        <Link
                          key={index}
                          to={{
                            pathname: `/genres/${genre?.toLocaleLowerCase()}`,
                            state: { genre },
                          }}
                        >
                          <p className="mr-2 backdrop-blur-sm  bg-gray-200  dark:bg-opacity-10 bg-opacity-20 py-1 px-3 mt-2 rounded-sm hover:bg-screenDark  hover:text-screenLight duration-300 ">
                            {genre}
                          </p>
                        </Link>
                      ))}
                    </div>
                    <p className="my-3 text-sm lg:text-[16px] ">
                      Cast :
                      <p className="inline text-[16px]    text-gray-600  md:text-textPlight">
                        
                        Bryan Cranston , Aaron Paul , Anna Gunn
                      </p>
                    </p>
                    <p className="my-3 text-sm lg:text-[16px]">
                      Country :
                      <p className="inline text-[16px]  text-gray-600 md:text-textPlight">
                        
                        U.S.A , France
                      </p>
                    </p>
                    <p className="my-3 text-sm lg:text-[16px]">
                      Language :
                      <p className="inline text-[16px]  text-gray-600 md:text-textPlight">
                        English
                      </p>
                    </p>
                  </div>
                  <div className="mt-2 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Fuga, ab! A, ratione quia eaque blanditiis esse adipisci
                    eveniet nisi ad facilis aut. Reprehenderit maiores
                    dignissimos a nesciunt harum iste temporibus!
                  </div>
                </div>
                <div className="flex flex-col w-full justify-between mt-4 ">
                  
                  <div className="hidden md:flex md:flex-col md:justify-between self-end ">
                    <div>
                      <div className="flex gap-2 justify-center ">
                        <div className=" text-[28px] cursor-pointer text-green-700 md:border-0 border border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark ">
                          {likedd ? (
                            <AiFillLike className="self-center" />
                          ) : (
                            <BiLike className="self-center" />
                          )}
                        </div>
                        <div className=" text-[28px] cursor-pointer text-red-700 border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark">
                          {likedd ? (
                            <AiFillDislike className="self-center" />
                          ) : (
                            <BiDislike className="self-center" />
                          )}
                        </div>
                        <div
                          title="add to favrite"
                          className=" text-[28px] cursor-pointer   border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark"
                          onClick={() => setlikedd(!likedd)}
                        >
                          {likedd ? (
                            <AiFillHeart className="self-center" />
                          ) : (
                            <AiOutlineHeart className="self-center" />
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2 justify-end ">
                        <div className="border md:border-0 border-border px-1 rounded-lg w-[100px] h-[76px] self-center text-center  backdrop-blur-sm  bg-screenDark bg-opacity-80  hover:bg-screenDark  ">
                          <div>
                            <p className="text-[29px] text-yellow-400 inline">
                              8.9
                            </p>
                            /10
                          </div>
                          <p className="text-sm text-textPDark ">
                            
                            338k votes
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="self-center mt-20">
                      <button className="text-btn text-[20px] font-semibold border md:border-0 border-border px-6 py-4 rounded-lg  self-center text-center  backdrop-blur-sm  bg-screenDark bg-opacity-80 hover:bg-screenDark duration-300    ">
                        DOWNLAOD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28">
        <div className='w-full'>
<ul className='flex justify-between md:mx-8  xl:mx-28 2xl:mx-36 text-[17px]'>
  {poi.map((item , index)=>(
    <Link to={{pathname:'/movies/1',search:item}} key={index}>
    <li
    className={`px-4 py-2  ${query===item && 'bg-[length:100%_2px] font-semibold text-btn'} origin-right bg-left-bottom bg-gradient-to-r from-btn to-btn bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out`} 
    onClick={()=>setQuery(item)}>{item}</li>
    </Link>

  ))}
</ul>
<div className="mx-8">
{query==='Details' && <Details/>}
{query==='Download' && <Download/>}
{query==='Comments' && <Comments/>}
{query==='Trailer' && <Trailer/>}

</div>


    </div>
        </div>

      </div>
      <div className="w-full relative  z-0 group ">
        <div className="w-full absolute gradient-10 h-[50px] z-20 rotate-180 top-0 " />
        <div className="z-0 bg-screenDark  overflow-hidden max-h-[680px]  ">
          <img
            src={
              "https://filmkio.run/wp-content/uploads/2022/01/breaking-bad-second-cover.jpg"
            }
            alt=""
            className={`opacity-30    relative min-w-[700px] md:w-full xl:min-h-[625px] `}
          />
        </div>
        <div className="w-full relative gradient-10   dark:h-[150px] dark:-top-[150px] -top-[100px] h-[100px] " />
      </div>
      <div className="relative -top-28 hidden md:flex">
        {/* <MoviePageDtailes/> */}
         </div>
    </div>
    </div>
  );
};

export default withRouter(MoviePage);
