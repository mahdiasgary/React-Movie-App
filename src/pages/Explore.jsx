import { Spin } from "antd";
import { GiPopcorn } from "react-icons/gi";
import ComingSoon from "../components/explore/ComingSoon";
import TopMovie from "../components/explore/TopMovie";
import TopSeries from "../components/explore/TopSeries";
import TrendMovies from "../components/explore/TrendMovies";
import { useRlt } from "../contextProvider/ContextProvider";

const Explore = () => {
  const rtl=useRlt()

  return (
    <div className="lg:flex  w-full " >
    <div className="mt-8 lg:w-full  mx-5  flex xs:flex-row flex-col xs:justify-between ">
      <div className="flex w-full flex-col justify-center">
        <TrendMovies />
        <TopMovie /> 
        <TopSeries />
      </div>
      <div className={`mt-5  relative top-0 ${rtl ? 'x:ml-10 2xl:ml-0' :'x:mr-10 2xl:mr-0'}  ` } >
        <div className="text-[20px] font-semibold flex mt-3 mx-3 ">
          <p className="self-center">Upcoming Movies</p>
          <span>
            <GiPopcorn className="text-[25px] self-center" />
          </span>
        </div>
        <ComingSoon />
      </div>
    </div>
    </div>
  );
};

export default Explore;
