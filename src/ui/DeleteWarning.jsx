import React from "react";
import { Link } from "react-router-dom";
import { MdError, MdCheckCircle } from "react-icons/md";

function DeleteWarning(props) {
  return (
    <div className="flex justify-center items-center min-h-full ">
      <div
        className={` dark:bg-gray-300 bg-gray-300 py-8 ${
          props.message ? "px-12" : "px-16"
        } rounded-lg`}
      >
        <div className="flex justify-center items-center ">
          {!props.message ? (
            <MdError className="text-5xl dark:text-red-700 text-red-500" />
          ) : (
            <MdCheckCircle className="text-5xl dark:text-green-700 text-green-500" />
          )}
        </div>
        <h2
          className={`text-xl font-semibold text-gray-800 ${
            props.message ? "my-4 mb-8 " : ""
          } p-4 pb-0 text-center`}
        >
          {!props.message ? "Уверены ли вы ?" : props.message}
        </h2>
        {!props.message ? (
          <p className="text-md text-gray-800 font-semibold p-4 mb-4">
            Этот файл будет удален навсегда
          </p>
        ) : null}
        <div className="flex justify-around items-center">
          {!props.message ? (
            <div>
              <button
                onClick={() => props.onDelete(props.id)}
                className="bg-red-700 hover:bg-red-900 p-2 px-4 transform hover:scale-110 font-semibold rounded-md text-white"
              >
                Да, удалить
              </button>
            </div>
          ) : null}
          <div>
            <Link to={props.link}>
              <button className="bg-green-700 hover:bg-green-900 p-2 px-4 transform hover:scale-110 font-semibold rounded-md text-white">
                {!props.message ? "Отмена" : "Назад"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteWarning;
