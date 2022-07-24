import { Fragment, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Formik, Field, Form, useFormik } from 'formik';
import * as Yup from "yup"
// import {showToast} from "../../../utility"
export const ToastContent = ({ type, message }: any) => {
  return (
    <div>
      {toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-yellow shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-yellow ring-opacity-5`}>
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-black">
                  {`${message}`}
                </p>
                <p className="mt-1 text-sm text-black">
                  Sure! 8:30pm works great!
                </p>
              </div>
            </div>
          </div>
          <div className="flex ">
            <button
              onClick={() => { toast.dismiss(t.id) }}
              className="text-white w-full border-l border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
export const showToast = (message: string, type?: string) => {
  if (type) type = type.toLowerCase();
  switch (type) {
    case "error":
      <ToastContent type={"success"} message={"message"} />
      break;
    case "info":
      <ToastContent type={type} message={message} />
      break;
    case "loading":
      <ToastContent type={type} message={message} />
      break;
    case "warn":
      toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-yellow shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-yellow ring-opacity-5`}>
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-black">
                  {`${message}`}
                </p>
                <p className="mt-1 text-sm text-black">
                  Sure! 8:30pm works great!
                </p>
              </div>
            </div>
          </div>
          <div className="flex ">
            <button
              onClick={() => { toast.dismiss(t.id) }}
              className="text-white w-full border-l border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
      break;
    case "success":
      <ToastContent type={type} message={message} />
      break;
    default:
      <ToastContent type={type} message={message} />
      break;
  }
  //@ts-ignore
  function error() {
    return (
      <div>
        {toast.custom((t) => (
          <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-yellow shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-yellow ring-opacity-5`}>
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-black">
                    {`${message}`}
                  </p>
                  <p className="mt-1 text-sm text-black">
                    Sure! 8:30pm works great!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex ">
              <button
                onClick={() => { toast.dismiss(t.id) }}
                className="text-white w-full border-l border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}


export const myObj = {

  myMethod(params:any) {
    // ...do something here
  },
  myOtherMethod(params:any) {
    // ...do something here
  },
  nestedObj: {
    myNestedMethod(params:any) {
      // ...do something here
    }
  }
};