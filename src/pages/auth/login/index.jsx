import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import postData from "../../../services/post/postData";
import { ToastContainer, toast } from "react-toastify";
import { setToken } from "../../../services/secure-storage";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is a required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        regex,
        "Password must have an uppercase, an lowercase, a digit, and spacial character "
      )
      .required("Password is required")
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "Qwer1234@"
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            const loginResponse = await postData("auth/login", values);

            loginResponse.error
              ? toast.error(loginResponse.error.description)
              : (setToken(loginResponse.accessToken), navigate("/"));

            console.log(loginResponse.accessToken);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {() => (
          <Form className="max-w-sm mx-auto bg-slate-200 p-5 rounded-md mt-10">
            <h1 className="text-center mb-10 text-2xl text-blue-900 font-bold">
              Login Form
            </h1>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
              <ErrorMessage
                component={"div"}
                className="text-red-600 text-sm"
                name="email"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <ErrorMessage
                name="password"
                className="text-sm text-red-600"
                component={"div"}
              />
            </div>
            {/* <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div> */}
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
}
