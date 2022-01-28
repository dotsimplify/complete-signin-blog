import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { SidebarItems } from "./SidebarItems";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";

const Sidebar = (props) => {
  const location = useLocation();
  // accesing height from use selector
  const height = useSelector((state) => state.app.height);
  const sidebarHeight = height + 46;
  // putting height in useeffect so that it will updating as per change
  useEffect(() => {}, [height]);
  return (
    <aside
      onMouseEnter={() => props.collapse && props.setCollapse(false)}
      style={{ height: sidebarHeight + "px" }}
      className={`min-h-screen 2xl:w-72 ${
        props.collapse ? "lg:w-14" : "lg:w-52"
      } bg-darkBlue transition-all duration-500 pt-2 text-black cursor-pointer`}
    >
      {props.collapse ? (
        <Logo className="text-yellow-600 p-4 pt-2" />
      ) : (
        <Link to="/dashboard">
          <h2 className="mx-auto text-xl my-3 font-bold text-white ml-8">
            Dot Simplify
          </h2>
        </Link>
      )}

      {SidebarItems.map((item) => {
        return (
          <Link key={item.title} to={item.path}>
            <div
              className={`flex justify-between ${
                location.pathname === item.path
                  ? "bg-hoverSideBar border-borderColor"
                  : "bg-transparent border-transparent"
              }  group border-l-4 hover:bg-hoverSideBar items-center p-2 pl-1 pr-4 py-3 border-transparent `}
            >
              <div className="flex items-center">
                <div> {item.icon}</div>
                {!props.collapse && (
                  <div className="flex justify-around items-center">
                    <p
                      className={` lg:text-xs text-sm group-hover:opacity-95 font-semibold pr-4 text-white opacity-60`}
                    >
                      {item.title}
                    </p>
                  </div>
                )}
              </div>
              {location.pathname === item.path && (
                <div className=" h-2 w-2 rounded-full bg-gold mr-2"> </div>
              )}
            </div>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
