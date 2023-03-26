import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { styles } from "../../styles/styles";
import logoImage from "../../assets/logoImage.png";
import logoImageDark from "../../assets/logoImageDark.png";
import Search from "./Search";
const Navbar = ({
  isSearch,
  setIsSearch,
  mode,
  setMode,
  openMenu,
  setOpenMenu,
}) => {
  return (
    <div className="flex justify-between pt-3 mx-3 md:mx-7 ">
      <div className="flex self-center justify-center ">
        <div
          className="self-center lg:hidden "
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <MdMenuOpen className="text-[27px] mt-4 sm:mx-3 cursor-pointer text-btn  " />
          ) : (
            <MdMenu className="text-[27px] mt-4 sm:mx-3 cursor-pointer hover:text-btn duration-200 " />
          )}
        </div>
        <div className="self-center font-extrabold sm:mx-3 mt-4 flex min-w-[145px] sm:min-w-[150px] ">
          <img
            src={mode === "dark" ? logoImage : logoImageDark}
            alt="logoImage"
            className="w-[25px] h-[31.6px]  sm:w-[30px] sm:h-[38px] mx-1"
          />
          <p className="self-center text-[18px] sm:text-[21px]">
            MOVIE <span className="text-btn">MAN</span>{" "}
          </p>
        </div>
      </div>
      <Search isSearch={isSearch} setIsSearch={setIsSearch} />
      <div className="self-center  z-20 hidden lg:flex ">
        <div className="self-center mx-2  ">
          <DarkModeToggle
            mode={mode}
            dark="dark"
            light="light"
            size="sm"
            inactiveTrackColor="#e2e8f0"
            inactiveTrackColorOnHover="#f8fafc"
            inactiveTrackColorOnActive="#cbd5e1"
            activeTrackColor="#334155"
            activeTrackColorOnHover="#1e293b"
            activeTrackColorOnActive="#0f172a"
            inactiveThumbColor="#1e293b"
            activeThumbColor="#e2e8f0"
            onChange={(mode) => {
              setMode(mode);
            }}
          />
        </div>
        <button className={`${styles.loginBtn}`}>LOG IN</button>
      </div>
    </div>
  );
};

export default Navbar;
