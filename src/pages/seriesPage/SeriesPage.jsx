import { useGetTopSeriesQuery } from "../../redux/services/movieDatabase";
import ItemCard from "../../components/explore/ItemCard";
import { LoadingOutlined } from "@ant-design/icons";
const SeriesPage = () => {
  const { data, isFetching, error } = useGetTopSeriesQuery();
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
    <div className="flex flex-col">
      <h7 className="text-[22px] font-semibold mx-8 mt-8"> Popular Series</h7>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-5 mx-8 mt-10 ">
          {data?.slice(0, 8)?.map((movieId, index) => (
            <ItemCard movieId={movieId?.id?.match(/\d+/g)[0]} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesPage;
