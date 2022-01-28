import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activationRequest } from "../features/registerSlice";
import { useParams, Link } from "react-router-dom";
import DotsSpinner from "../shared/spinners/DotsSpinner";
import { ReactComponent as Logo } from "../app/assets/icons/logo.svg";
import { ReactComponent as CheckBadge } from "../app/assets/icons/checkBadge.svg";
import { ReactComponent as Sad } from "../app/assets/icons/sad.svg";
const AuthenticationComp = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  const status = useSelector((state) => state.auth.activationMessage);
  useEffect(() => {
    dispatch(activationRequest(token));
  }, [dispatch, token]);

  return (
    <div className="bg-gray-50 flex min-h-screen">
      {!status ? (
        <div className="m-auto">
          <div className="text-center mb-4">
            <Logo className="text-4xl mx-auto text-center" />
          </div>
          <h1 className="text-lg text-center text-gray-500 mb-4 leading-loose">
            We are processing your request
          </h1>
          <DotsSpinner />
        </div>
      ) : (
        <div className="m-auto">
          <div className="flex justify-center item-center mb-4">
            <Logo className="text-4xl" />
            {status.includes("jwt") ? (
              <Sad className=" text-gray-700 text-5xl m-2 ml-4 " />
            ) : (
              <CheckBadge className=" text-green-700 text-5xl m-2 ml-4 " />
            )}
          </div>
          <div className="flex flex-col justify-start items-center">
            {!status.includes("jwt") && (
              <h1 className="text-xl text-center text-gray-600 leading-loose">
                {status}
              </h1>
            )}
            <Link to={`${status.includes("jwt") ? "/signup" : "/"}`}>
              <button className="mt-4 text-gray-100 rounded-md text-xl px-6 hover:bg-blue-700 py-2 bg-blue-500 ml-4 inline">
                {`${
                  status.includes("jwt")
                    ? "Token Expired , Retry Signup Process"
                    : "Login to your Account"
                }`}
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthenticationComp;
