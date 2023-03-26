import { useEffect } from "react";
import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { styles } from "../../styles/styles";

const SideBarList = ({ subTitle, items, history, menu }) => {
  const [selected, setSelected] = useState("explore");
  const [hovered, setHovered] = useState();
  const pathname = history.location.pathname.split("/")[1];
  useEffect(() => {
    if (pathname === "") return setSelected("explore");
    setSelected(pathname);
  }, [pathname]);
  return (
    <div>
      <div
        className={` flex flex-col mt-2 border-r-2 dark:border-border h-[500px]  `}
      >
        <p
          className={`${
            !menu && "hidden"
          } hidden lg:flex mx-5 mb-2 text-[16px] text-textPDark font-bold `}
        >
          {subTitle}
        </p>
        <ul
          className={`w-full
`}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              to={`/${
                item.title === "Explore" ? "" : item.title.toLowerCase()
              }`}
            >
              <li
                className={`
                ${!menu && "pl-2 mx-0"}
                ${styles.sideBarItem} 
            ${selected === item.title.toLowerCase() && "border-l-[3px]"}

            `}
                onMouseEnter={() => setHovered(item.title.toLowerCase())}
                onMouseLeave={() => setHovered()}
              >
                <span
                  className={`
                ${
                  (hovered === item.title.toLowerCase() ||
                    selected === item.title.toLowerCase()) &&
                  "text-btn "
                }
                self-center px-2 mr-2 text-[24px]  `}
                >
                  {item.icon}
                </span>
                <p
                  className={`origin-left `}
                >
                  {item.title}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(SideBarList);
