import React, { useState } from "react";
import Cookie from "js-cookie";
// Use Dispatch hook import
import { useDispatch, useSelector } from "react-redux";
//Search icon for Input tag
import { SearchIcon } from "../../app/assets/icons/icons";
//Chevron down icon with profile
import arrow from "../../app/assets/icons/key-down.svg";
import { FcBusinessman } from "react-icons/fc";
import arrowUp from "../../app/assets/icons/keyup.svg";
// import reducer to set serach tag to centerakl state
import { setSearchTerm } from "../../features/appSlice";
import { LogOutIcon, CloseIcon, Tenth } from "../assets/icons/icons";
import { ReactComponent as MenuLeftIcon } from "../assets/icons/menu-left.svg";
import { ReactComponent as SandClock } from "../assets/icons/sandclock.svg";
import { ReactComponent as UkFlag } from "../assets/icons/uk-flag.svg";
import { ReactComponent as FeatureIcon } from "../assets/icons/feature.svg";
import { ReactComponent as BellIcon } from "../assets/icons/bell.svg";
import { ReactComponent as LockIcon } from "../assets/icons/lock.svg";
import { ReactComponent as MenuRightIcon } from "../assets/icons/menu-right.svg";
import { logoutUser } from "../../features/loginSlice";
import { setAuthorizationToken } from "../../utils/setAuthorization";

const Header = (props) => {
  const dispatch = useDispatch();
  // for border around input even while blur out
  const [focus, setFocus] = useState(false);
  const [searchTag, setSearchTag] = useState("");
  const [userHover, setUser] = useState(false);
  const user = useSelector((state) => state.user.user);
  const handleClick = (e) => {
    setFocus(true);
  };
  const handleBlur = () => {
    setFocus(false);
  };
  const handleSearch = () => {
    dispatch(setSearchTerm(searchTag));
  };
  const clearValue = () => {
    setSearchTag("");
    dispatch(setSearchTerm(""));
  };
  const logout = () => {
    setAuthorizationToken(false);
    Cookie.remove("entryToken");
    dispatch(logoutUser());
  };

  return (
    <nav className="grid grid-flow-col grid-cols-7 bg-white px-4 py-1 ">
      <div className="flex justify-between items-center col-span-5">
        <div
          onClick={() => props.setCollapse((prev) => !prev)}
          className="p-1.5 group hover:bg-gray-100 rounded-full cursor-pointer"
        >
          {props.collapse ? (
            <MenuRightIcon className="text-blue-600 hover:text-blue-700" />
          ) : (
            <MenuLeftIcon className="text-blue-600 hover:text-blue-700" />
          )}
        </div>
        <div
          className={`flex items-center ${
            focus ? "border-blue-600" : "border-gray-200"
          } group w-full hover:border-blue-600 mx-1 px-3 py-1 border rounded-md`}
        >
          <input
            type="text"
            value={searchTag}
            onClick={handleClick}
            placeholder="Поиск по названию"
            onBlur={handleBlur}
            onChange={(e) => setSearchTag(e.target.value)}
            className="outline-none border w-full group border-transparent"
          />
          {searchTag && (
            <div className="bg-transparent rounded-full hover:bg-gray-200 mr-1">
              <CloseIcon
                onClick={clearValue}
                className="text-blue-600 hover:text-blue-500 "
              />
            </div>
          )}
          <SearchIcon
            onClick={handleSearch}
            className="text-blue-600 cursor-pointer transform hover:scale-125 active:text-blue-600 hover:text-yellow-600"
          />
        </div>
      </div>
      <div className="flex justify-around items-center col-span-2 ">
        <div className="p-2  rounded-md group hover:bg-gray-100 cursor-pointer">
          <FeatureIcon className="group-hover:text-blue-700" />
        </div>
        <div className="p-2  rounded-md group hover:bg-gray-100 cursor-pointer">
          <SandClock className="group-hover:text-blue-700" />
        </div>

        <div className="p-2  rounded-md group hover:bg-gray-100 cursor-pointer">
          <BellIcon className="group-hover:text-blue-700" />
        </div>

        <div className="px-2 py-1  rounded-md group hover:bg-gray-100 cursor-pointer">
          <UkFlag className="group-hover:text-blue-700" />
        </div>

        <div
          onMouseEnter={() => setUser(true)}
          onMouseLeave={() => setUser(false)}
          className="flex items-center relative z-40 mr-4 cursor-pointer"
        >
          {user._id ? (
            <img
              src={user.profilePic.url}
              className="h-6 w-6 rounded-full mr-2"
              alt="user face"
            />
          ) : (
            <FcBusinessman className="rounded-full text-3xl" />
          )}
          {!userHover ? (
            <img src={arrow} alt="" />
          ) : (
            <img src={arrowUp} alt="" />
          )}
          <div
            className={`origin-top-right top-8 lg:top-6 -right-5  absolute ${
              !userHover ? "hidden" : ""
            }  right-0 lg:w-56 2xl:w-64 rounded-md cursor-pointer border border-gray-200 bg-white shadow-xl focus:outline-none`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-3">
              <div className="flex justify-between items-center  px-4">
                <div className="text-gray-600 leading-relaxed font-medium lg:text-sm">
                  {user.name && user.name}
                </div>
                <LogOutIcon
                  onClick={() => logout()}
                  className="text-xl text-gray-500 hover:text-sideBarBtn"
                />
              </div>
              <div className="flex justify-start items-center py-1  px-4">
                <div className="text-gray-600 text-sm">Создатель</div>
                <div className="h-2 w-2 rounded-full bg-green-500 mx-2"></div>
                <div className="text-gray-600 text-sm">Россия</div>
              </div>
              <div className="flex justify-start items-center py-2 hover:bg-gray-100 group px-4">
                <LockIcon className="text-gray-400 group-hover:text-blue-400 text-lg mr-2" />
                <div className="text-gray-500 text-sm">Изменить пароль</div>
              </div>
              <div className="flex justify-start items-center py-2 hover:bg-gray-100 group px-4">
                <Tenth className="text-gray-400 group-hover:text-blue-400 text-lg ml-0.5 mr-3" />
                <div className="text-gray-500 text-sm">
                  Редактировать профиль
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
