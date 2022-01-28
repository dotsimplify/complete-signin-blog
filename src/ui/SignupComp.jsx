import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendMailRequest, usernameAvailable } from "../features/registerSlice";
import { Formik, Form, Field } from "formik";
import { signupSchema } from "../shared/validation/validationSchema";
import { ReactComponent as Logo } from "../app/assets/icons/logo.svg";
import DotsSpinner from "../shared/spinners/DotsSpinner";

const SignupComp = () => {
  const dispatch = useDispatch();
  const [sub, setSub] = useState(false);
  const mailStatus = useSelector((state) => state.auth.mailSent);
  const userAvailablityStatus = useSelector(
    (state) => state.auth.userAvailablity
  );
  const onSubmit = (values, { resetForm }) => {
    const { confirmPassword, ...data } = values;
    dispatch(sendMailRequest(data));
    resetForm({ values: "" });
    setSub(true);
  };
  const onBlurUsername = (e) => {
    if (e.target.value === "") return;
    else {
      const userdetails = e.target.value;
      dispatch(usernameAvailable(userdetails));
    }
  };
  return (
    <section className="text-gray-700 bg-gray-100">
      <div
        className="container items-center px-3 py-12 lg:px-20"
        bis_skin_checked="1"
      >
        <div
          className="flex flex-col w-full max-w-md shadow-xl p-10 mx-auto my-1 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0 "
          bis_skin_checked="1"
        >
          <div className="flex">
            <div className="mx-auto">
              <Logo className="ml-6" />
              <h2 className="text-lg font-bold text-blue-600 text-center mt-3">
                Форма регистрации
              </h2>
            </div>
          </div>
          <div className="mt-1" bis_skin_checked="1">
            {mailStatus && (
              <div className="text-center text-xs font-semibold text-green-700 py-2.5 bg-green-100 p-2 rounded-md">
                Письмо отправлено !! Пожалуйста, проверьте свою почту
              </div>
            )}
            <div className="mt-2" bis_skin_checked="1">
              <Formik
                initialValues={{
                  name: "",
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={signupSchema}
                onSubmit={onSubmit}
              >
                {({ errors, touched }) => (
                  <Form className="space-y-6">
                    <div bis_skin_checked="1">
                      <label
                        htmlFor="Name"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        Полное имя
                      </label>
                      <div className="mt-1" bis_skin_checked="1">
                        <Field
                          name="name"
                          type="text"
                          autoComplete="email"
                          required=""
                          placeholder="ваше полное имя здесь"
                          className={`
                block
                w-full
                px-5
                py-3
                text-base text-neutral-600
                placeholder-gray-300
                transition
                duration-500
                ease-in-out
                transform
                border ${
                  errors.name && touched.name
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
                        {errors.name && touched.name ? (
                          <div className="mt-2 text-red-500">{errors.name}</div>
                        ) : null}
                      </div>
                    </div>
                    <div bis_skin_checked="1">
                      <label
                        htmlFor="userid"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        имя пользователя
                      </label>
                      <div className="mt-1" bis_skin_checked="1">
                        <Field
                          name="username"
                          type="text"
                          onBlur={onBlurUsername}
                          required=""
                          placeholder="Выберите свой идентификатор пользователя"
                          className={`
                block
                w-full
                px-5
                py-3
                text-base text-neutral-600
                placeholder-gray-300
                transition
                duration-500
                ease-in-out
                transform
                border ${
                  errors.username && touched.username
                    ? "border-red-500"
                    : userAvailablityStatus
                    ? "border-green-400"
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
                        {errors.username && touched.username ? (
                          <div className="mt-4 text-red-500">
                            {errors.username}
                          </div>
                        ) : null}
                        {userAvailablityStatus && (
                          <div className="mt-3 ml-2 text-green-500">
                            Доступный !!
                          </div>
                        )}
                      </div>
                    </div>
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
                          type="email"
                          autoComplete="email"
                          required=""
                          placeholder="Ваш адрес электронной почты здесь"
                          className={`
                block
                w-full
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
                    <div bis_skin_checked="1">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        Пароль
                      </label>
                      <div className="mt-1" bis_skin_checked="1">
                        <Field
                          name="password"
                          type="password"
                          required=""
                          placeholder="ваш пароль здесь"
                          className={`
                block
                w-full
                px-5
                py-3
                text-base text-neutral-600
                placeholder-gray-300
                transition
                duration-500
                ease-in-out
                transform
                border ${
                  errors.password && touched.password
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
                        {errors.password && touched.password ? (
                          <div className="mt-2 text-red-500">
                            {errors.password}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="space-y-1" bis_skin_checked="1">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        Подтвердите пароль
                      </label>
                      <div className="mt-1" bis_skin_checked="1">
                        <Field
                          name="confirmPassword"
                          type="password"
                          required=""
                          placeholder="Подтвердите пароль здесь"
                          className={`
                      block
                      w-full
                      px-5
                      py-3
                      text-base text-neutral-600
                      placeholder-gray-300
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border ${
                        errors.confirmPassword && touched.confirmPassword
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
                        {errors.confirmPassword && touched.confirmPassword ? (
                          <div className="mt-2 text-red-500">
                            {errors.confirmPassword}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div bis_skin_checked="1">
                      {sub && !mailStatus ? (
                        <DotsSpinner />
                      ) : (
                        <button
                          type="submit"
                          className="flex items-center  justify-center  w-full  px-10 py-4 text-base
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
                          {sub && mailStatus
                            ? "Почта отправлена"
                            : "Зарегистрироваться"}
                        </button>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div
            className="flex items-center justify-center mt-6"
            bis_skin_checked="1"
          >
            <div className="flex items-center" bis_skin_checked="1">
              <div
                htmlFor="remember-me"
                className="block ml-2 text-sm text-neutral-600 mr-5"
              >
                Уже зарегистрирован ?
              </div>
            </div>
            <div className="text-sm" bis_skin_checked="1">
              <Link
                to="/"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Войти
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupComp;
