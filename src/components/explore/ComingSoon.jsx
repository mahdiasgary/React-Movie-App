import ComingSoonItem from "./ComingSoonItem";
const ComingSoon = () => {
  let data = [
  ];

  return (
    <div className=" lg:w-[300px] dark:bg-border bg-white   rounded-3xl ">
      <div className="mx-3 pt-3 ">
        {data?.slice(0, 5)?.map((item, index) => (
          <ComingSoonItem movieId={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
