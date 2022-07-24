import {useState } from 'react'

import { Link } from "react-router-dom";
import { LoginForm} from "./partials/AuthForms";
import AuthUILayout from "./partials/AuthUILayout";
function Login() {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  return (
    <div className="App">
      <AuthUILayout>
        <div className="max-w-md w-full space-y-8">
          <div className='text-center'>
            <Link to={"/"}>            <img
              className=" w-auto m-auto mb-8 "
              src="./img/dashboard-icons/WhatsApp-Image-2022-03-02-at-3.30-(1).png"
              alt="Workflow"
            /> </Link>
            <h2 className='text-xl font-bold text-black m-auto' >Login To Your Account</h2>
            <p className="mt-0  text-sm text-gray-600">
              <a href="#" className="font-semibold  text-black hover:text-indigo-500 m-auto ">
                Input your login details to access your account
              </a>
            </p>
          </div>
          <LoginForm />
                    <div>
            <p className="mt-2 text-center text-sm text-gray-600">
              <a href="#" className="font-medium text-black">
              </a> <Link to="/register">  <span className='text-red-200 font-semibold text-sm'>Forgot Password</span> </Link>
            </p>
          </div>

          <div>
            <p className="mt-2 text-center text-sm text-gray-600">
              <a href="#" className="font-medium text-black">
                Dont have an account ?
              </a> <Link to="/register">  <span className='text-blue-900 font-semibold text-sm'>Sign Up for free</span> </Link>
            </p>
          </div>

        </div>
      </AuthUILayout>
    </div>
  )
}
export default Login