import React, { useState, useEffect } from "react";
import avatar from "../app/assets/img/avatar.png";
import { useSelector } from "react-redux";
const SinglePostComp = () => {
  const single = useSelector((state) => state.posts.single);
  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  const [img, setImage] = useState("");
  const url = "https://source.unsplash.com/random";
  useEffect(() => {
    setNumber(Math.floor(Math.random() * 98));
    setNumber2(Math.floor(Math.random() * 94));
    setNumber3(Math.floor(Math.random() * 97));
    setNumber4(Math.floor(Math.random() * 95));
    setImage(url);
  }, []);
  return (
    <>
      {!single.title ? (
        <div className="max-w-xl my-4 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
          <div className="flex items-center w-full">
            <div className="w-full">
              <div className="flex flex-row mt-2 px-2 py-3 mx-3">
                <div className="w-10 h-10 bg-gray-200  rounded-full animate-pulse "></div>
                <div className="flex flex-col mb-2 ml-4 mt-1">
                  <div className="w-20 h-4 bg-gray-200 rounded-full animate-pulse"></div>

                  <div className="flex w-full">
                    <div className="w-35 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-100"></div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md">
            <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
            <div className="mt-8 h-32 w-full space-y-3">
              <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-1/2 h-4 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex w-4/5 my-4 lg:my-6 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex items-center w-full">
              <div className="w-full">
                <div className="flex flex-row mt-2 px-2 py-3 mx-3">
                  <div className="w-auto h-auto rounded-full border-2 border-pink-500">
                    <img
                      src={avatar}
                      className="h-12 rounded-full p-1 w-12"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col mb-2 ml-4 mt-1">
                    <div className="text-gray-600 text-sm font-semibold">
                      Dot Simplify
                    </div>
                    <div className="flex w-full mt-1">
                      <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                        Fun
                      </div>
                      <div className="text-gray-400 font-thin text-xs">
                        • 2days ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-100"></div>
                <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                  <img
                    style={{ maxHeight: "500px" }}
                    className="rounded w-full"
                    src={img}
                    alt={single.title}
                  />
                </div>
                <h1 className="text-gray-600 font-semibold text-lg mb-2 px-5">
                  {single.title}
                </h1>
                <div
                  dangerouslySetInnerHTML={{ __html: single.body }}
                  className="text-gray-500 font-thin text-sm mb-6 mx-3 px-2"
                />
                <div className="flex justify-start mb-4 border-t border-gray-100">
                  <div className="flex w-full mt-1 pt-2 pl-5">
                    <span className="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width="14px"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </span>
                    {number4 && (
                      <img
                        className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                        src={`https://randomuser.me/api/portraits/thumb/women/${number4}.jpg`}
                        alt="user "
                      />
                    )}
                    {number && (
                      <img
                        className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                        src={`https://randomuser.me/api/portraits/thumb/women/${number}.jpg`}
                        alt="user"
                      />
                    )}
                    {number2 && (
                      <img
                        className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                        src={`https://randomuser.me/api/portraits/thumb/men/${number2}.jpg`}
                        alt="user"
                      />
                    )}
                    {number3 && (
                      <img
                        className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                        src={`https://randomuser.me/api/portraits/thumb/women/${number3}.jpg`}
                        alt="user"
                      />
                    )}
                  </div>
                  <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                    <span className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width="14px"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </span>
                    <span className="transition ease-out duration-300  bg-transparent h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-black transform hover:scale-150 hover:text-red-500 hover:fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="flex w-full border-t border-gray-100">
                  <div className="mt-3 mx-5 flex flex-row">
                    <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                      Comments:
                      <div className="ml-1 text-gray-400 font-thin text-ms">
                        30
                      </div>
                    </div>
                    <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                      Views:
                      <div className="ml-1 text-gray-400 font-thin text-ms">
                        60k
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 mx-5 w-full flex justify-end">
                    <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                      Likes:
                      <div className="ml-1 text-gray-400 font-thin text-ms">
                        120k
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                  <svg
                    className="w-10 h-10 object-cover rounded-full shadow cursor-pointer mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
                  </svg>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
                    >
                      <svg
                        className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                    placeholder="Post a comment..."
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePostComp;
