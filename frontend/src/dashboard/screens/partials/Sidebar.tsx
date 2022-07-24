import { Link } from "react-router-dom";
import { routesConstants } from '../../../utility/routesConstants';

export const Sidebar = ({ active, toggleScreen }: any) => {
  return (
    <>
      <div className="hidden  md:flex flex-col w-60 border-r border-gray-300 bg-offblack">
        <div className=" w-full h-16 px-4  border-gray-300  mt-10">
          <span className="font-medium flex items-center justify-center">
            <div className="">
              <Link to={routesConstants.Home}>
                <img
                  className=" h-12 w-auto "
                  src="./img/icons/WhatsApp-Image-2022-03-02-at-3.30.png"
                  alt="Workflow"
                />
              </Link></div>                </span>



          <span className="font-medium flex items-center justify-center">
            <div className="">
              <Link to={""}>
                <img
                  className=" h-24 w-auto rounded-full"
                  src="./img/icons/AyOC81h1CGw.png"
                  alt="Workflow"
                />
              </Link>
            </div>
          </span>
        </div>
        <div className="flex flex-col flex-grow p-4 overflow-auto mt-20">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border-gray-200">
            </div>
          </div>
          <Link to={routesConstants.Dashboard}>  <span onClick={() => {
            toggleScreen("wallet")
          }}
            className={` ml-10 flex   items-center justify-left flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300 cursor-pointer ${(active === "wallet") ? `text-blue-900 cursor-pointer` : "text-gray-600"} `}
          >
            <img
              className=""
              src="./img/dashboard-icons/Vector.png"
              alt="Workflow"
            />
            <span className="leading-none  ml-4 font-semibold text-red-200 text-gray-600 text-md"> DASHBOARD</span>
          </span> </Link>


          <Link to={routesConstants.Dashboard}>
            <span onClick={() => {
              toggleScreen("settings")
            }}
              className={` ml-10 flex   items-center justify-left flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300 cursor-pointer ${(active === "settings") ? `text-blue-900 cursor-pointer` : "text-gray-600"} `}
            >
              <img
                className=" "
                src="./img/dashboard-icons/Vector-(1).png"
                alt="Workflow"
              />
              <span className="leading-none  ml-4 font-semibold text-gray-600 text-md"> LISTING</span>
            </span> </Link>
          <Link to={routesConstants.Dashboard}>
            <span onClick={() => {
              toggleScreen("settings")
            }}
              className={` ml-10 flex   items-center justify-left flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300 cursor-pointer ${(active === "settings") ? `text-blue-900 cursor-pointer` : "text-gray-600"} `}
            >
              <img
                className=" "
                src="./img/dashboard-icons/Vector-(2).png"
                alt="Workflow"
              />
              <span className="leading-none  ml-4 font-semibold text-gray-600 text-md"> PROPERTY</span>
            </span> </Link>
          <Link to={routesConstants.Dashboard}>
            <span onClick={() => {
              toggleScreen("settings")
            }}
              className={` ml-10 flex   items-center justify-left flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300 cursor-pointer ${(active === "settings") ? `text-blue-900 cursor-pointer` : "text-gray-600"} `}
            >
              <img
                className=" "
                src="./img/dashboard-icons/Vector-(3).png"
                alt="Workflow"
              />
              <span className="leading-none  ml-4 font-semibold text-gray-600 text-md"> WALLET</span>
            </span> </Link>
          <Link to={routesConstants.Dashboard}>
            <span onClick={() => {
              toggleScreen("settings")
            }}
              className={` ml-10 flex   items-center justify-left flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300 cursor-pointer ${(active === "settings") ? `text-blue-900 cursor-pointer` : "text-gray-600"} `}
            >
              <img
                className=" "
                src="./img/dashboard-icons/Group.png"
                alt="Workflow"
              />
              <span className="leading-none  ml-4 font-semibold  text-gray-600"> IZYMART</span>
            </span> </Link>
          <Link to={routesConstants.Dashboard}>
            <span onClick={() => {
              toggleScreen("settings")
            }}
              className={` ml-10 flex   items-center justify-left flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300 cursor-pointer ${(active === "settings") ? `text-blue-900 cursor-pointer` : "text-gray-600"} `}
            >
              <img
                className=" "
                src="./img/dashboard-icons/Vector-(4).png"
                alt="Workflow"
              />
              <span className="leading-none  ml-4 font-semibold text-gray-600"> ASSOCIATION</span>
            </span> </Link>
          <Link to={routesConstants.Dashboard}>
            <span onClick={() => {
              toggleScreen("settings")
            }}
              className={` ml-10 flex   items-center justify-left flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300 cursor-pointer ${(active === "settings") ? `text-blue-900 cursor-pointer` : "text-gray-600"} `}
            >
              <img
                className=" "
                src="./img/dashboard-icons/Vector-(5).png"
                alt="Workflow"
              />
              <span className="leading-none  ml-4 font-semibold text-gray-600"> ESTATE</span>
            </span> </Link>
          <Link to={routesConstants.Dashboard}>
            <span onClick={() => {
              toggleScreen("settings")
            }}
              className={` ml-10 flex   items-center justify-left flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300 cursor-pointer ${(active === "settings") ? `text-blue-900 cursor-pointer` : "text-gray-600"} `}
            >
              <img
                className=""
                src="./img/dashboard-icons/carbon_settings.png"
                alt="Workflow"
              />
              <span className="leading-none  ml-4 font-semibold text-gray-600"> SETTINGS</span>
            </span> </Link>
          <Link to={""}>
            <span onClick={() => {
              toggleScreen("settings")
            }}
              className={` ml-10 flex   items-center justify-left flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300 cursor-pointer ${(active === "settings") ? `text-blue-900 cursor-pointer` : "text-gray-600"} `}
            >
              <img
                className=" "
                src="./img/dashboard-icons/Vector-(6).png"
                alt="Workflow"
              />
              <span className="leading-none  ml-4 font-semibold text-gray-600"> REFERRALS</span>
            </span> </Link>
        </div>
      </div>
    </>
  )
}
