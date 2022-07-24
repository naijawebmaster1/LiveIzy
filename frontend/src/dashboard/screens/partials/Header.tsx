import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom"
import { routesConstants } from "../../../utility/routesConstants";
import { notification, Space } from 'antd';
import { useNavigate } from "react-router-dom";


export const Header = () => {

  const navigate = useNavigate();

  const Logout = () => {

    localStorage.removeItem("User");
    localStorage.removeItem("token");

    notification.success({
      message: 'Success',
      description:
        'You have logged out successfully',
    });
    //@ts-ignore
    setTimeout(function () { navigate("/") }, 1000);
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" hidden md:flex justify-between items-center flex-shrink-0 h-16 px-8 border-b border-gray-100">
        <div>
          <div className="pt-2 relative mx-auto text-gray-600 flex">
            <span className="font-medium flex items-center justify-center">
              <div className="">
                <Link to={""}>
                  <img
                    className=" w-auto inline cursor-pointer"
                    src="./img/dashboard-icons/Vector-(8).png"
                    alt="Workflow"
                  />
                </Link></div>                </span>

            <p className="inline ml-6 text-blue-900" >Dashboard</p>
          </div>
        </div>
        <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-100">



          <span className="font-medium flex items-center justify-center">
            <div className="">
              <Link to={""}>
                <img
                  className=" w-auto inline w-4/6"
                  src="./img/dashboard-icons/clarity_notification-outline-badged.png"
                  alt="Workflow"
                />
              </Link></div>               
               </span>


          <span className="font-medium flex items-center justify-center">
            <div className="" onClick={() => Logout()}>
              <span >
                <img
                  className=" w-auto inline w-4/6"
                  src="./img/dashboard-icons/fluent_power-24-filled.png"
                  alt="Workflow"
                />
              </span></div>                </span>

        </div>
      </div>
      <div className="md:hidden">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="pt-2 relative mx-auto text-gray-600 flex">
                    <span className="font-medium flex items-center justify-center">
                      <div className="">
                        <Link to={""}>
                          <img
                            onClick={() => setIsOpen(!isOpen)}

                            className=" w-auto inline"
                            src="./img/dashboard-icons/Vector-(8).png"
                            alt="Workflow"
                          />
                        </Link></div>                </span>

                    <p className="inline ml-6 text-blue-900" >Dashboard</p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="#"
                      className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Dashboard
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Team
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Calendar
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Reports
                    </a>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">

                {/* <button className="flex items-center justify-center h-10 px-0 ml-2 text-sm font-medium rounded">
                  <img
                    className=" h-12 w-auto "
                    src="./assets/dashboard-icons/Artboards_Diversity_Avatars_by_Netguru-05-1.svg"
                    alt="Workflow"
                  />
                </button>
                <button className="mr-6 relative ml-0 text-sm focus:outline-none group">
                  <div className="flex items-center justify-between w-5 h-10 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute right-0 flex-col items-start hidden w-40 pb-1 bg-white border border-gray-300 shadow-lg group-focus:flex">
                    <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                    <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                    <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                  </div>
                </button> */}
              </div>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link to="/dashboard"> <a

                    className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Dashboard
                  </a> </Link>
                  <Link to="/sellgiftcards">   <a
                    href="#"
                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Listing
                  </a> </Link>
                  <Link to="/paybills">   <a
                    href="#"
                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                   Property
                  </a> </Link>

                  <Link to="/wallet">    <a
                    href="#"
                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                   Wallet
                  </a> </Link>
                  <Link to="/settings">    <a
                    href="#"
                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                  IzyMart
                  </a> </Link>
                  <Link to="/settings">    <a
                    href="#"
                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                 Association
                  </a> </Link>
                  <Link to="/settings">    <a
                    href="#"
                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                   Estate
                  </a> </Link>
                  <Link to="/settings">    <a
                    href="#"
                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                   Logout
                  </a> </Link>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </>
  )
}
