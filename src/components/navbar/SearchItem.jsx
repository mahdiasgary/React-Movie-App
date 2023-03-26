import { useEffect } from "react";
import { HiOutlineStar } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../../redux/services/movieDatabase";

const SearchItem = ({result ,search , setSearch }) => {
    const itemId = result?.id?.match(/\d+/g)[0]
    const {data , fetching , error} = useGetMovieDetailsQuery({movieId:itemId})
    console.log(data?.ratings.rating)
    useEffect(()=>{
      
      if(data?.title.title) return setSearch(true)
      
    },[data])
    return ( 
        <Link to={{pathname:`movies/${result?.title}` , state:{data} }} >
        <div className={`${ (!result?.title || !result?.year || !search)&& 'hidden' } `} >
          <div className="flex justify-between mx-2 mt-2 mb-2 py-2 relative group  cursor-pointer hover:dark:bg-[#0d0d14] hover:bg-zinc-600 hover:text-textDark duration-300 rounded-md ">
            <div className="flex mx-2 ">
              <img
                src={result?.image?.url}
                alt=""
                className="w-[70px] h-[98px] rounded-md group-hover:border-2 border-btn  "
              />
              <div className="flex flex-col justify-between mx-3 my-2">
                <p className="text-[18px] font-semibold group-hover:text-btn duration-200 ">
                  {result?.title}
                </p>
                <p>{result?.titleType} </p>
                <p>Year : {result?.year} </p>
              </div>
            </div>
            <div className="flex flex-col justify-center pl-5 pr-5 border-l my-3 ">
              <span className="text-[25px] text-yellow-400  ">
                <HiOutlineStar />
              </span>
              <p>{data?.ratings?.rating}</p>
            </div>
          </div>
        </div>
        </Link>
     );
}
 
export default SearchItem;