import { Link } from "react-router-dom";

const GenreCard = ({ genre }) => {
  return (
    <div className="w-[213px] h-[120px] rounded-md text-textDark ">
           <Link to={{pathname:`/genres/${genre.name.toLowerCase()}`,state:{genre : genre.name} } }>
      <div className="relative group cursor-pointer">
        <img src={genre.imgUrl} alt="" className="rounded-lg" />
        <div className="absolute inset-y-[40px] rounded-b-md gradient-08  w-[213px] h-[80px] group-hover:inset-y-0 group-hover:h-[120px] group-hover:bg-black group-hover:bg-opacity-90 group-hover:rounded-md  duration-300 ">
          <p className="pt-11 px-3 text-[18px] font-semibold group-hover:text-[22px] duration-300 ">
            {genre.name}
          </p>
        </div>
      </div>
        </Link>
    </div>
  );
};

export default GenreCard;
