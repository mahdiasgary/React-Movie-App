import { Link } from "react-router-dom";
import { trendingItem } from "../../constans";
import { ImFire } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import ExploreItemCard from "./ExploreItemCard";
import {
  useGetTopSeriesQuery,
} from "../../redux/services/movieDatabase";
import { LoadingOutlined } from "@ant-design/icons";

const TopSeries = () => {
  const { data, isFetching, error } = useGetTopSeriesQuery();
  if (isFetching) {
    return ('');
  }
  return (
    <div className="mt-6 max-w-[700px] md:self-center">
      <div className="flex justify-between mb-1 ">
        <p className="text-[20px] font-semibold mx-3 ">Popular Series </p>
        <Link to={"/movies"}>
          <p className="text-btn font-semibold text-sm self-center mt-1 ">
            View All
          </p>
        </Link>
      </div>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 6 },
          570: { slidesPerView: 4, spaceBetween: 10 },
     
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "30px",
          "--swiper-pagination-color": "#fff",
        }}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="relative h-[200px] md:h-[270px] max-w-[700px] flex   "
      >
        {data?.slice(0, 8)?.map((movieId, index) => (
          <SwiperSlide  key={index}>
            <ExploreItemCard
              movieId={movieId?.id?.match(/\d+/g)[0]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSeries;
