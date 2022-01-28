import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { updatePostRequest, singlePostRequest } from "../features/postSlice";
import { postSchema } from "../shared/validation/validationSchema";
import DotsSpinner from "../shared/spinners/DotsSpinner";
import DisplayMessage from "./DisplayMessage";
import { useParams } from "react-router-dom";

const UpdatePostComp = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const message = useSelector((state) => state.posts.message);
  const loading = useSelector((state) => state.app.isLoading);
  const single = useSelector((state) => state.posts.single);

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(updatePostRequest(values));
    resetForm({ values: "" });
    // location("dashboard");
  };
  useEffect(() => {
    dispatch(singlePostRequest(id));
  }, [dispatch, id]);
  return (
    <>
      {!message ? (
        <div className="mx-16 py-8">
          <Formik
            enableReinitialize
            initialValues={{
              id: id,
              title: single.title,
              body: single.body,
              userId: single.userId,
            }}
            validationSchema={postSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6">
                <div bis_skin_checked="1">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    Заголовок поста
                  </label>
                  <div className="mt-1" bis_skin_checked="1">
                    <Field
                      name="title"
                      placeholder="Заголовок сообщения здесь"
                      className={`block w-full
  px-5
  py-3
  text-base text-neutral-600
  placeholder-gray-300
  transition
  duration-500
  ease-in-out
  transform
  border ${errors.title && touched.title ? "border-red-500" : "border-gray-300"}
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
                    {errors.title && touched.title ? (
                      <div className="mt-2 text-red-500">{errors.title}</div>
                    ) : null}
                  </div>
                </div>
                <div className="space-y-1" bis_skin_checked="1">
                  <label
                    htmlFor="body"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    Описание поста
                  </label>
                  <div className="mt-1" bis_skin_checked="1">
                    <Field
                      name="body"
                      as="textarea"
                      placeholder="Описание поста здесь"
                      className={`block w-full px-5 py-3 h-48 ${
                        errors.body && touched.body
                          ? "border-red-500"
                          : "border-gray-300"
                      } text-base text-neutral-600 placeholder-gray-300
        transition duration-500  ease-in-out  transform  border rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-white focus:ring-offset-1  focus:ring-offset-indigo-300`}
                    />
                    {errors.body && touched.body ? (
                      <div className="mt-2 text-red-500">{errors.body}</div>
                    ) : null}
                  </div>
                </div>

                <div bis_skin_checked="1">
                  {loading ? (
                    <DotsSpinner />
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center justify-center 
px-8
py-3
text-base
font-medium
text-center text-white
transition
duration-500
w-full
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
                      Обновить детали
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <DisplayMessage
          title="Запись обновлена, но не будет обновлена на сервере в соответствии с условиями API. Проверьте вкладку сети на статус 200 OK.
          URL: https://jsonplaceholder.typicode.com/guide/"
          link="/dashboard"
        />
      )}
    </>
  );
};

export default UpdatePostComp;
