import { useState } from 'react'

import { useFormik } from 'formik';
import { Button } from '../../partials/Button'
import { forgotPasswordSchema } from "../../../validations"
import { useNavigate } from "react-router-dom";
import { notification } from 'antd';
import axios from "axios";
export const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {

      setLoading(!loading);
      console.log(values);
      const fetchProducts = async (values: any) => {
        const article = { title: 'React POST Request Example' };
        const headers = {
          'Authorization': 'Bearer my-token',
          'My-Custom-Header': 'foobar'
        };
        const response = await axios.post('http://127.0.0.1:5000/api/users/login', values, { headers })
          .then((response: any) => {
            setLoading(false);
            console.log(response);
            console.log("Data Loaded", response.data);
            var { email } = values;
            var name = email.substring(0, email.lastIndexOf("@"));
            response.data.profile = {
              name,
              email
            }
            // dispatch(RegisterUser(response.data));
            localStorage.setItem("User", JSON.stringify(response.data));
            localStorage.setItem("Token", JSON.stringify(response.data.token));
            console.log(response.data.token)
            const message = values.email; setLoading(false);
            notification.success({
              message: 'Success',
              description:
                'You have logged in successfully',
            });
            //@ts-ignore
            setTimeout(function () { navigate("/dashboard") }, 1000);
          })
          .catch(({ err, response }: any) => {
            setLoading(false);
            console.log("Err: ", err);
            console.log("Err: ", response);
            const message = values.email; setLoading(false);
            notification.error({
              message: "Error",
              description: response?.data?.message,
            });
          });
      };
      fetchProducts(values);
      setLoading(!loading);
      console.log(values);
      //@ts-ignore
      setTimeout(function () {
      }, 2000);
    },
    validationSchema: forgotPasswordSchema,
    validateOnChange: false,
  });
  return (
    <div className=''>
      {formik?.errors?.email ? (
        <div className="bg-red-100 border border-gold text-gold px-4 py-2 rounded relative mt-0" role="alert" style={{ marginTop: '10px' }}>
          <span className="block sm:inline text-sm">{formik?.errors?.email} {`, ${formik?.errors?.password}`}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          </span>
        </div>
      ) : null}
      <form onSubmit={formik.handleSubmit} className="mt-50 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md -space-y-px">
          <div className=" flex justify-end items-center relative">
            <input
              placeholder="E-Mail Address"
              id="email-address"
              name="email"
              onChange={formik.handleChange}
              type="email"
              autoComplete="email"
              required
              className="border border-gray-400 rounded-lg p-4 w-full mt-2 appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pl-8"
            />
            <img src="./img/dashboard-icons/Message.png" className="absolute mr-96 mt-1 left-2 z-50 w-4" alt="Search Icon" />
          </div>
          <br />
          <div className=" flex justify-end items-center relative">
            <input
              placeholder="Password"
              id="password"
              onChange={formik.handleChange}
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="border border-gray-400 rounded-lg p-4 w-full mt-2 appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pl-8"
            />
            <img src="./img/dashboard-icons/Password.png" className="absolute mr-96 mt-1 left-2 z-50 w-4" alt="Search Icon" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-900">
              Remember Password
            </label>
          </div>
        </div>
        <div className='w-3/6 m-auto'>
          <Button
            loadingText={"Authenticating"}
            loading={loading}
            text={"Sign In"}
            btnType={"primary"}
          />              </div>
      </form>
    </div>
  )
}
