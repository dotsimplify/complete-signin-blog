import React from "react";
import { Link } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";

function DisplayMessage(props) {
  return (
    <div className="flex justify-center items-center min-h-full ">
      <div className="dark:bg-gray-300 bg-gray-300 py-8 px-12 mx-24 rounded-lg">
        <div className="flex justify-center items-center ">
          <MdCheckCircle className="text-5xl dark:text-green-700 text-green-700" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 my-4 mb-8 p-4 pb-0 text-center">
          {props.title}
        </h2>
        <div className="flex justify-around items-center">
          <div>
            <Link to={props.link}>
              <button className="bg-green-700 hover:bg-green-900 p-2 px-4 transform hover:scale-110 font-semibold rounded-md text-white">
                Back to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayMessage;
