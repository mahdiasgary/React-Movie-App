import { useGetMovieDetailsQuery } from "../../redux/services/movieDatabase";
import a from "../../assets/luther-the-fallen-sun-2023-sm.webp";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Spin } from "antd";
const ItemCard = ({ movieId }) => {
  console.log(movieId);
  const { data, isFetching, error } = useGetMovieDetailsQuery({
    movieId: movieId,
  });
  if (isFetching) {
    return (
      <div className="flex justify-center h-[268px] w-[180px]  dark:border border-slate-400 rounded-2xl ">
        <div className="self-center ">
          <Spin className="self-center" size="large" />
        </div>
      </div>
    );
  }
  return (
    <Link to={{ pathname: `/movies/${data?.title?.title}`, state: { data } }}>
      <div className={`flex flex-col w-[140px]  y9:w-[182px]  `}>
        <div className="relative group text-textDark">
          <img
            src={data?.title.image.url}
            alt=""
            className={`w-[140px] h-[205px] y9:w-[182px] y9:h-[268px] rounded-xl`}
          />
          <div className="absolute hidden y9:flex z-20  inset-0  rounded-xl origin-bottom scale-y-0 group-hover:scale-y-100 group-hover:bg-opacity-80   group-hover:bg-screenDark  duration-200 cursor-pointer ">
            <div className=" flex flex-col justify-between">
              <div>
                <p className=" px-5 pt-5 font-bold">
                  Year : {data?.title.year}
                </p>
                <p className=" px-5 pt-1 font-semibold">
                  {data?.title.runningTimeInMinutes || "--"} minutes
                </p>

                <div className="flex flex-wrap mt-2 mx-2 text-sm font-semibold">
                  {data?.genres.slice(0, 3).map((genre, index) => (
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
              <div className="text-center pb-6  w-[180px] px-3 ">
                <button className=" btn py-2 w-full rounded-md  backdrop-blur-sm  font-bold hover:rounded-xl  ">
                  Watch Movie
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[140px] text-center y9:w-[180px]  flex self-center  justify-center text-[17px] ">
          <p>{data?.title.title}</p>
        </div>
        <div className="text-[14px] text-[#ebaf1a] flex justify-center ">
          <FaStar className="self-center mx-1" />
          <p className="self-center font-semibold">{data?.ratings.rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
