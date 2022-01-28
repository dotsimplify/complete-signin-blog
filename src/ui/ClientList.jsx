import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postsDataRequest, getList, hideMessage } from "../features/postSlice";
import Spinner from "./Spinner";
import Pagination from "./Pagination";
import { readingTime, smallString } from "../shared/helper";
import { getDivHeight } from "../features/appSlice";
import { ReactComponent as EditIcon } from "../app/assets/icons/edit.svg";
import { ReactComponent as TrashIcon } from "../app/assets/icons/trash.svg";

const ClientList = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.posts.posts);
  const search = useSelector((state) => state.app.searchTerm);
  // const audioStream = useSelector((state) => state.calls.stream);
  const divRef = useRef(null);
  //Pagination
  const [currentResults, setCurrentResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(50);
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  // Sorting
  const [order, setOrder] = useState("asc");
  const [old, setOld] = useState(true);

  const sorting = (col) => {
    if (order === "asc") {
      const sorted = [...postsList].sort((a, b) => {
        return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
      });
      dispatch(getList(sorted));
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...postsList].sort((a, b) => {
        return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
      });
      dispatch(getList(sorted));
      setOrder("asc");
    }
  };
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const numberSort = (col) => {
    if (!old) {
      const sorted = [...postsList].sort((a, b) => {
        return parseInt(a[col]) - parseInt(b[col]);
      });
      dispatch(getList(sorted));
      setOld(true);
    } else {
      const sorted = [...postsList].sort((a, b) => {
        return parseInt(b[col]) - parseInt(a[col]);
      });
      dispatch(getList(sorted));
      setOld(false);
    }
  };
  useEffect(() => {
    dispatch(postsDataRequest());
    dispatch(hideMessage());
  }, [dispatch]);
  useEffect(() => {
    setCurrentResults(postsList.slice(indexOfFirstResult, indexOfLastResult));
  }, [indexOfFirstResult, indexOfLastResult, postsList, postsList.length]);
  useEffect(() => {
    if (divRef && divRef.current && divRef.current.offsetHeight) {
      dispatch(getDivHeight(divRef.current.offsetHeight));
    }
  }, [currentResults.length, dispatch]);
  return (
    <div ref={divRef} className="2xl:px-24 px-4 py-4 ">
      <div className="grid grid-cols-7 grid-flow-col items-center border-b border-gray-100 bg-white px-4 py-3 rounded-md">
        <div className="flex justify-around items-center">
          <div
            onClick={() => numberSort("id")}
            className="text-gray-400 hover:text-blue-500 cursor-pointer"
          >
            ID
          </div>
          <div
            onClick={() => numberSort("userId")}
            className=" text-left cursor-pointer hover:text-blue-500 text-gray-400 "
          >
            User ID
          </div>
        </div>
        <div
          onClick={() => sorting("title")}
          className="text-gray-400 hover:text-blue-500 cursor-pointer col-span-2 px-2 text-left pl-4"
        >
          Заголовок
        </div>
        <div
          onClick={() => sorting("body")}
          className="text-gray-400 col-span-2 px-2 hover:text-blue-500 cursor-pointer select-none"
        >
          Описание
        </div>
        <div className="text-gray-400 text-center  select-none">
          Время чтения
        </div>
        <div className="text-gray-400 col-span-2 text-center  select-none">
          Действия
        </div>
      </div>
      {!search ? (
        currentResults.length === 0 ? (
          <Spinner />
        ) : (
          currentResults.length > 0 &&
          currentResults.map((data) => {
            return (
              <div key={data.id} className=" rounded-md">
                <div className="grid grid-cols-7 grid-flow-col  hover:bg-gray-100 cursor-pointer items-center border-b border-gray-100 bg-white px-6 py-2 pt-4">
                  <div className="flex justify-around items-center">
                    <div className=" cursor-pointer mr-4 text-gray-600 ">
                      {data.id}
                    </div>
                    <div className="text-sm text-center text-gray-600 mr-4 ">
                      {data.userId}
                    </div>
                  </div>

                  <Link className="col-span-2" to={`/posts/${data.id}`}>
                    <div className="text-blue-400 text-left hover:underline  px-2">
                      {smallString(data.title, 30)}
                    </div>
                  </Link>
                  <div className="text-gray-600 col-span-2 px-2">
                    {smallString(data.body, 30)}
                  </div>
                  <div className="text-gray-600 text-center">
                    {readingTime(data.body)} min
                  </div>
                  <div className="flex justify-around items-center col-span-2">
                    <Link className="col-span-2" to={`/update-post/${data.id}`}>
                      <div className="group hover:bg-indigo-100 p-1.5 rounded-full text-gray-600">
                        <EditIcon className="group-hover:text-blue-500" />
                      </div>
                    </Link>
                    <Link className="col-span-2" to={`/delete-post/${data.id}`}>
                      <div className="group hover:bg-red-100 p-1.5 rounded-full text-gray-600">
                        <TrashIcon className="group-hover:text-red-500" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        )
      ) : (
        postsList.length > 0 &&
        postsList
          .filter((data) => {
            if (data.title.includes(search)) {
              return data;
            }
            return false;
          })
          .map((data) => {
            return (
              <div key={data.id} className=" rounded-md">
                <div className="grid grid-cols-7 grid-flow-col hover:bg-gray-100 cursor-pointer items-center border-b border-gray-100 bg-white px-6 py-2 pt-4">
                  <div className="flex justify-around items-center">
                    <div className="hover:underline cursor-pointer mr-4 text-gray-600 ">
                      {data.id}
                    </div>
                    <div className="text-sm text-center text-greyText mr-4 ">
                      {data.userId}
                    </div>
                  </div>
                  <div className="text-gray-600 text-left hover:underline col-span-2 px-2">
                    {smallString(data.title, 30)}
                  </div>

                  <div className="text-gray-600 col-span-2 px-2">
                    {smallString(data.body, 30)}
                  </div>
                  <div className="text-gray-600 text-center">
                    {readingTime(data.body)} min
                  </div>
                  <div className="flex justify-around items-center">
                    <div className="group hover:bg-gray-100 p-1.5 rounded-full text-gray-600">
                      <EditIcon className="group-hover:text-blue-500" />
                    </div>
                    <div className="group hover:bg-gray-100 p-1.5 rounded-full text-gray-600">
                      <TrashIcon className="group-hover:text-red-500" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
      )}
      <Pagination
        resultsPerPage={resultsPerPage}
        totalResults={postsList.length}
        paginate={paginate}
        currentResults={currentResults}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ClientList;
