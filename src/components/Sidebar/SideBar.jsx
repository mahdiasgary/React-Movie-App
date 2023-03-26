import { sidbarItem } from "../../constans";
import SideBarList from "./SideBarList";
import { styles } from "../../styles/styles";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { useEffect, useState } from "react";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
const SideBar = ({ openMenu, setOpenMenu,mode,setMode }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  useEffect(() => {
    if (windowSize[0] >= 1024) {
      return setOpenMenu(true);
    }else {
      return setOpenMenu(false);
    }
  }, [windowSize]);
  return (
    <div
      className={`${styles.sideBar} origin-left ${!openMenu && 'scale-x-0 fixed ' } ${openMenu && 'fixed lg:sticky  dark:bg-[#07070a] lg:dark:bg-transparent bg-screenLight'}  duration-300 z-[52]`}>
      <div className=" lg:hidden " onClick={() => setOpenMenu(!openMenu)}>
        {openMenu && (
          <MdMenuOpen className="text-[27px] mt-10 mx-10 cursor-pointer text-btn  " />
        )}
      </div>
      <div className={` lg:hidden flex ${!openMenu && 'hidden'} flex-col `}>
        <button className={`${styles.loginBtn2} mx-5 my-5 `}>LOG IN</button>
        <div className="mx-2  ">
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
      </div>
      <div >
        <SideBarList subTitle="MENU" items={sidbarItem} menu={openMenu} />
      </div>
    </div>
  );
};

export default SideBar;
