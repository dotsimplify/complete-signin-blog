import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../features/loginSlice";
import { Formik, Form, Field } from "formik";
import { loginSchema } from "../shared/validation/validationSchema";
import { ReactComponent as Logo } from "../app/assets/icons/logo.svg";
const LoginComp = () => {
  const dispatch = useDispatch();
  const loginMessage = useSelector((state) => state.user.message);
  const authUser = useSelector((state) => state.user.isAuthenticated);

  if (authUser) {
    return <Navigate to="/dashboard" />;
  }
  const onSubmit = (values) => {
    dispatch(loginRequest(values));
    // location("dashboard");
  };
  return (
    <section className="text-gray-700 bg-gray-100">
      <div
        className="container items-center px-3 py-12 lg:px-20"
        bis_skin_checked="1"
      >
        <div
          className="flex flex-col w-full max-w-md shadow-xl p-10 mx-auto my-1 transition duration-500 ease-in-out
    transform bg-white rounded-lg md:mt-0 "
          bis_skin_checked="1"
        >
          <div className="flex">
            <div className="mx-auto">
              <Logo className="ml-2" />
              <h2 className="text-lg font-bold text-blue-600 text-center mt-3">
                Войти
              </h2>
            </div>
          </div>
          <div className="mt-2" bis_skin_checked="1">
            {loginMessage && (
              <div className="text-center text-xs font-semibold leading-loose text-red-700 py-2 bg-red-100 p-2 rounded-md">
                {loginMessage}
              </div>
            )}
            <div className="mt-2" bis_skin_checked="1">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={loginSchema}
                onSubmit={onSubmit}
              >
                {({ errors, touched }) => (
                  <Form className="space-y-6">
                    <div bis_skin_checked="1">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        Адрес электронной почты
                      </label>
                      <div className="mt-1" bis_skin_checked="1">
                        <Field
                          name="email"
                          placeholder="Ваш адрес электронной почты здесь"
                          className={`block w-full
                px-5
                py-3
                text-base text-neutral-600
                placeholder-gray-300
                transition
                duration-500
                ease-in-out
                transform
                border ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                }
                rounded-lg
                bg-gray-50
                focus:outline-none
                focus:border-transparent
                focus:ring-1
                focus:ring-white
                focus:ring-offset-1
                focus:ring-offset-indigo-300
              `}
                        />
                        {errors.email && touched.email ? (
                          <div className="mt-2 text-red-500">
                            {errors.email}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="space-y-1" bis_skin_checked="1">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        Пароль
                      </label>
                      <div className="mt-1" bis_skin_checked="1">
                        <Field
                          name="password"
                          type="password"
                          placeholder="Ваш пароль здесь"
                          className={`block w-full px-5 py-3 ${
                            errors.password && touched.password
                              ? "border-red-500"
                              : "border-gray-300"
                          } text-base text-neutral-600 placeholder-gray-300
                      transition duration-500  ease-in-out  transform  border rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-white focus:ring-offset-1  focus:ring-offset-indigo-300`}
                        />
                        {errors.password && touched.password ? (
                          <div className="mt-2 text-red-500">
                            {errors.password}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div
                      className="flex items-center justify-between"
                      bis_skin_checked="1"
                    >
                      <div className="flex items-center" bis_skin_checked="1">
                        <Field
                          name="remember-me"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor="remember-me"
                          className="block ml-2 text-sm text-neutral-600"
                        >
                          Запомните меня
                        </label>
                      </div>
                      <div className="text-sm" bis_skin_checked="1">
                        <Link
                          to="/forgot-password"
                          className="font-medium text-blue-600 hover:text-blue-500"
                        >
                          Забыли Ваш пароль?
                        </Link>
                      </div>
                    </div>
                    <div bis_skin_checked="1">
                      <button
                        type="submit"
                        className="
              flex
              items-center
              justify-center
              w-full
              px-10
              py-4
              text-base
              font-medium
              text-center text-white
              transition
              duration-500
              ease-in-out
              transform
              bg-blue-600
              rounded-xl
              hover:bg-blue-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-blue-500
            "
                      >
                        Войти
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <div className="relative my-4" bis_skin_checked="1">
                <div
                  className="absolute inset-0 flex items-center"
                  bis_skin_checked="1"
                >
                  <div
                    className="w-full border-t border-gray-300"
                    bis_skin_checked="1"
                  ></div>
                </div>
                <div
                  className="relative flex justify-center text-sm"
                  bis_skin_checked="1"
                >
                  <span className="px-2 text-neutral-600 bg-white">
                    Или продолжить с
                  </span>
                </div>
              </div>
              <div bis_skin_checked="1">
                <button
                  type="submit"
                  className="
            w-full
            items-center
            block
            px-10
            py-3.5
            text-base
            font-medium
            text-center text-blue-600
            transition
            duration-500
            ease-in-out
            transform
            border-2 border-white
            shadow-md
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-gray-500
          "
                >
                  <div
                    className="flex items-center justify-center"
                    bis_skin_checked="1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="w-6 h-6"
                      viewBox="0 0 48 48"
                    >
                      <defs>
                        <path
                          id="a"
                          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                        ></path>
                      </defs>
                      <clipPath id="b">
                        <use xlinkHref="#a" overflow="visible"></use>
                      </clipPath>
                      <path
                        clipPath="url(#b)"
                        fill="#FBBC05"
                        d="M0 37V11l17 13z"
                      ></path>
                      <path
                        clipPath="url(#b)"
                        fill="#EA4335"
                        d="M0 11l17 13 7-6.1L48 14V0H0z"
                      ></path>
                      <path
                        clipPath="url(#b)"
                        fill="#34A853"
                        d="M0 37l30-23 7.9 1L48 0v48H0z"
                      ></path>
                      <path
                        clipPath="url(#b)"
                        fill="#4285F4"
                        d="M48 48L17 24l-4-3 35-10z"
                      ></path>
                    </svg>
                    <span className="ml-4"> Google</span>
                  </div>
                </button>
                <div
                  className="flex items-center justify-center mt-6"
                  bis_skin_checked="1"
                >
                  <div className="flex items-center" bis_skin_checked="1">
                    <div className="block ml-2 text-sm text-neutral-600 mr-5">
                      Нет учетной записи ?
                    </div>
                  </div>
                  <div className="text-sm" bis_skin_checked="1">
                    <Link
                      to="/signup"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      зарегистрироваться здесь
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <main className="flex">

    //   <div className="w-1/2 flex flex-col justify-between items-center mt-8">
    //     <div className="">
    //       <img src={logo} className="" alt="" />
    //     </div>
    //     <h3 className="text-doc text-2xl mt-12">
    //       Content Relationship Management
    //     </h3>
    //     <div className="flex flex-col items-center">
    //       <Formik
    //         initialValues={{
    //           username: "",
    //           password: "",
    //         }}
    //         onSubmit={onSubmit}
    //       >
    //         {({ errors, touched }) => (
    //           <Form>
    //             <div className="mb-2">
    //               <label htmlhtmlFor="username" className="text-doc text-sm ">
    //                 имя пользователя
    //               </label>
    //             </div>
    //             <div>
    //               <Field
    //                 name="username"
    //                 className="w-72 outline-none border border-gray-200 focus:border-gray-400 placeholder-gray-400 placeholder-opacity-50 px-4 py-2.5"
    //                 placeholder="Введите имя пользователя"
    //               ></Field>
    //             </div>
    //             <div className="mt-3 mb-2">
    //               <label htmlhtmlFor="Пароль" className="text-doc text-sm">
    //                 Пароль
    //               </label>
    //             </div>
    //             <Field
    //               name="password"
    //               type="password"
    //               className="w-72 outline-none border border-gray-200 focus:border-gray-400 placeholder-gray-400 placeholder-opacity-50  px-4 py-2.5"
    //               placeholder="Введите пароль"
    //             ></Field>
    //             <div className="mt-12">
    //               <button
    //                 className="bg-gold rounded-normal text-white font-medium w-full py-2"
    //                 type="submit"
    //               >
    //                 Нажмите, чтобы войти
    //               </button>
    //             </div>
    //           </Form>
    //         )}
    //       </Formik>
    //     </div>
    //     <p className="">
    //       Не можете войти в систему?
    //       <a href="https://github.com/dotsimplify">
    //         <span className="text-doc font-medium ml-2">Contact Admin</span>
    //       </a>
    //     </p>
    //   </div>
    //   <div className="w-1/2">
    //     <img src={book} className="h-screen w-full" alt="" />
    //   </div>
    // </main>
  );
};

export default LoginComp;
