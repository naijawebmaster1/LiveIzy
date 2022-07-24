import { useState } from 'react';
import { Button } from "../../partials/Button";
import { Header } from "../partials/Header";
import { Sidebar } from "../partials/Sidebar";
import { PaymentMadeData, NextPaymentData } from "../../../data/Data"
export const DashboardContent = ({ image, tag }: any) => {
  return <>
    <div className="flex-grow p-0 overflow-auto bg-white mb-6">
      <div className="grid grid-cols-6 gap-0 px-10 py-6">
        <div className=" col-span-6 bg-white " >
          <div className="md:grid grid-cols-2 gap-8">
            <div className="col-span-1 bg-white mb-2" >
              <div className="grid grid-cols-2 gap-0">
                <div className="col-span-1 bg-white mb-2" >
                  <Button onClick={null} text={"PROPERTY DASHBOARD"} btnType={"secondary"} btnSize={"sm"} />
                </div>
                <div className="col-span-1 bg-white mb-2" >
                  <Button onClick={null} text={"TENANT DASHBOARD"} btnType={"primary"} btnSize={"sm"} />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex justify-between">
            <div className="col-span-1 bg-white mb-2" >
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 bg-white mb-2" >
                  <p className=' mt-10'>You can calculate your monthly rent payment easily.
                  </p>
                  <Button onClick={null} text={"CALCULATE MONTHLY RENT"} btnType={"secondary"} btnSize={"sm"} />
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-white mb-2" >
              <div className="grid grid-cols-1 gap-2">
                <div className="col-span-1 bg-white mb-2" >
                  <Button onClick={null} text={"CREATE RENT SAVINGS"} btnType={"primary"} btnSize={"sm"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-2 gap-8 md:px-10 px-6 py-0">
        <div className=" col-span-1 bg-white md:p-6 " >
          <div className="bg-white  flex justify-center items-center">
            <div className="space-y-16">
            </div>
          </div>
          <div className='md:border border-t border-gray-100 p-6 transition-transform transform hover:scale-105 cursor-pointer box'>
            <h2 className='font-semibold text-xl text-blue-900  mt-6 '> LAID 68979- 909568 - KJ </h2>
            <p className="text-tiny text-blue-900  mt-4">12, Prince street, Allen Avenue,
              Ikeja, Lagos </p>
            <p className="text-tiny text-blue-900  mt-2">Rent Value </p>
            <h2 className='font-semibold text-xl mt-6 text-blue-900 '>N850,000 </h2>
          </div>
        </div>
        <div className=" col-span-1 bg-white md:p-6 " >
          <div className="bg-white  flex justify-center items-center">
            <div className="space-y-16">
            </div>
          </div>
          <div className='md:border border-t border-gray-100 p-6 transition-transform transform hover:scale-105 cursor-pointer box mt-10 md:mt-0'>
            <div className=" bg-white mb-2 w-max " >
              <div className="my-2 flex ">
                <label htmlFor="toogleA" className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input id="toogleA" type="checkbox" className="sr-only bg-blue-900" />
                    <div className="w-10 h-4 bg-red-200 rounded-full shadow-inner" />
                    <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition" />
                  </div>
                </label>
                <p className='inline text-sm mr-6 text-red-200 font-semibold ml-4 '>Activate Monthly Rent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-2 gap-8 px-10 py-0">
        <div className=" col-span-2 bg-white mt-8 " >
          <div className="md:flex justify-between p-2 border-b border-black mb-10">
            <h1 className="text-xl font-semibold">Payments Made</h1>
          </div>
          <div className='border-b border-gray-100 p-0'>
            <div className=" mx-auto md:w-5/6">
              <div className="flex flex-col">
                <div className="w-full">
                  <div className="p-12 border-b border-gray-200 shadow datatable-bg">
                    <table className="divide-y divide-gray-300 m-auto w-full text-left overflow-x-scroll md:overscroll-none md:table block" id="dataTable">
                      <thead className="">
                        <tr>
                          <th className="px-0 py-2 text-xs text-gray-500">
                            Last Payment
                          </th>
                          <th className="px-0 py-2 text-xs text-gray-500">
                            Paid
                          </th>
                          <th className="px-0 py-2 text-xs text-gray-500">
                            Date
                          </th>
                          <th className="px-0 py-2 text-xs text-gray-500">
                            Balance
                          </th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {PaymentMadeData.map((value: any, key: any) => (
                          <tr key={key} className="whitespace-nowrap">
                            <td className="px-0 py-4 text-sm text-gray-500">
                              {value.lastPayment}
                            </td>
                            <td className="px-0 py-4">
                              <div className="text-sm text-gray-900">
                                {value.paid}
                              </div>
                            </td>
                            <td className="px-0 py-4">
                              <div className="text-sm text-gray-500">                        {value.date}
                              </div>
                            </td>
                            <td className="px-0 py-4 text-sm text-gray-500">
                              {value.balance}
                            </td>
                          </tr>
                        )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 px-10 py-0">
        <div className=" col-span-2 bg-white mt-8 " >
          <div className="md:flex justify-between p-2 border-b border-black mb-10">
            <h1 className="text-xl font-semibold">Next Payments</h1>
          </div>
          <div className='border-b border-gray-100 p-0'>
            <div className=" mx-auto md:w-5/6">
              <div className="flex flex-col">
                <div className="w-full">
                  <div className="p-12 border-b border-gray-200 shadow datatable-bg">
                    <table className="divide-y divide-gray-300 m-auto w-full text-left                      overflow-x-scroll md:overscroll-none md:table block
" id="dataTable">
                      <thead className="">
                        <tr>
                          <th className="px-0 py-2 text-xs text-gray-500">
                            Last Payment
                          </th>
                          <th className="px-0 py-2 text-xs text-gray-500">
                            Paid
                          </th>
                          <th className="px-0 py-2 text-xs text-gray-500">
                            Date
                          </th>
                          <th className="px-0 py-2 text-xs text-gray-500">
                            -
                          </th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {NextPaymentData.map((value: any, key: any) => (
                          <tr key={key} className="whitespace-nowrap">
                            <td className="px-0 py-4 text-sm text-gray-500">
                              {value.lastPayment}
                            </td>
                            <td className="px-0 py-4">
                              <div className="text-sm text-gray-900">
                                {value.paid}
                              </div>
                            </td>
                            <td className="px-0 py-4">
                              <div className="text-sm text-gray-500">                        {value.date}
                              </div>
                            </td>
                            <td className="px-0 py-4">
                              <div className="text-sm text-gray-500">      -
                              </div>
                            </td>
                          </tr>
                        )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>
}
function Dashboard() {
  const [screen, setScreen] = useState("dashboard")
  const [active, setActive] = useState("dashboard")
  const toggleScreen = (route: string) => {
    setScreen(route)
    setActive(route)
  }
  return (<div>
    <div>
      <div className="flex w-screen h-screen text-gray-700">
        <Sidebar toggleScreen={toggleScreen} active={active} />
        <div className="flex flex-col flex-grow">
          <Header />
          <DashboardContent />
        </div>
      </div>
    </div>
  </div>
  )
}
export default Dashboard;
