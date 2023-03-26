import { Spin } from "antd";
import { GiPopcorn } from "react-icons/gi";
import ComingSoon from "../components/explore/ComingSoon";
import TopMovie from "../components/explore/TopMovie";
import TopSeries from "../components/explore/TopSeries";
import TrendMovies from "../components/explore/TrendMovies";

const Explore = () => {
  return (
    <div className="mt-8 mx-5 flex xl:flex-row flex-col justify-between ">
      <div className="flex flex-col justify-center">
        <TrendMovies />
        <TopMovie />
        <TopSeries />
      </div>
      <div className="self-center lg:self-center mt-5 w-full lg:-mt-[70px]" >
        <div className="text-[20px] font-semibold flex mt-3 mx-3 ">
          <p className="self-center">Upcoming Movies</p>
          <span>
            <GiPopcorn className="text-[25px] self-center" />
          </span>
        </div>
        <ComingSoon />
      </div>
    </div>
  );
};

export default Explore;
