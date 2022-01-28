import * as yup from "yup";

/* The loginSchema is a yup object that has a shape property that is an object. The shape property is
an object that has an email property that is a string. The email property is a string that has a
required property that is a string. The required property is a string that has a required property
that is a string. The required property is a string that has a required property that is a string.
The required property is a string that has a required property that is a string. The required
property is a string that has a required property that is a string. The required property is a */
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("электронная почта должна быть действительной электронной почтой")
    .required("адрес электронной почты не может быть пустым"),
  password: yup.string().required("пароль не может быть пустым"),
});

export const signupSchema = yup.object().shape({
  username: yup
    .string()
    .required("имя пользователя не может быть пустым")
    .min(3, "не менее 3 символов")
    .max(30, "максимум 30 символов"),
  name: yup
    .string()
    .required("имя не может быть пустым")
    .min(3, "не менее 3 символов")
    .max(20, "максимум 20 символов"),
  email: yup
    .string()
    .email("электронная почта должна быть действительной электронной почтой")
    .required("адрес электронной почты не может быть пустым"),
  password: yup.string().required("пароль не может быть пустым"),
  confirmPassword: yup
    .string()
    .when("password", (password, schema) => {
      if (password) return schema.required("Требуется подтверждение пароля");
    })
    .oneOf([yup.ref("password")], "Пароли должны совпадать"),
});

export const postSchema = yup.object().shape({
  title: yup
    .string()
    .required("заголовок сообщения не может быть пустым")
    .min(3, "не менее 3 символов"),
  body: yup
    .string()
    .required("тело сообщения не может быть пустым")
    .min(3, "не менее 3 символов"),
  userId: yup.string().required("Укажите идентификатор пользователя."),
});
