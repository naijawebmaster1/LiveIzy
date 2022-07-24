import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
// import { LoginForm } from "../auth/partials/AuthForms"
export const Header = ({ setIsOpen }: any) => {
  return (
    <header className="flex justify-between p-4">
      <h1 className="font-medium">Example of a drawer</h1>
      <button
        className="bg-blue-900 text-white rounded px-4 py-1"
        onClick={() => setIsOpen(true)}
      >
        open
      </button>
    </header>
  );
}
// export const  Card = () => {
//   return (
//     <div className="border border-gray-100 shadow rounded-md p-4 max-w-sm w-full mx-auto">
//       <div className="animate-pulse flex space-x-4">
//         <div className="rounded-full bg-gray-300 h-12 w-12"></div>
//         <div className="flex-1 space-y-4 py-1">
//           <div className="h-4 bg-gray-300 rounded w-3/4"></div>
//           <div className="space-y-2">
//             <div className="h-4 bg-gray-300 rounded"></div>
//             <div className="h-4 bg-gray-300 rounded w-5/6"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export const DrawerContent = ({ children, isOpen, setIsOpen }: any) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 md:duration-500 duration-500 translate-x-0  "
          : " transition-all md:delay-1000 opacity-0 translate-x-full  ")
      }
    >
      
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-default"
        onClick={() => {
          setIsOpen(false);
        }}
      >

      </section>
    </main>
  );
}
export const SidebarDrawer = ({ isOpen, setIsOpen, modalContent }: any) => {
  return (
    <main className="">
      {/* <Header setIsOpen={setIsOpen} /> */}
      {/* <section className="flex space-x-6 m-4">
        <div className="text-6xl">{"🦙"}</div>
        <div className="text-6xl">{"🐝"}</div>
        <div className="text-6xl">{"🦄"}</div>
        <div className="text-6xl">{"🐌"}</div>
      </section>
      <p className="m-4">
        This is an implementation of a drawer using tailwindcss.
      </p>
      <p className="m-4 bg-yellow-100 p-6 text-yellow-900 border border-dashed border-yellow-400">
        Follow me at Twitter{" "}
        <a className="text-blue-600" href="https://twitter.com/@Cuadraman">
          @Cuadraman
        </a>{" "}
        for more tips
      </p> */}
      <DrawerContent isOpen={isOpen} setIsOpen={setIsOpen}>
        {modalContent}
      </DrawerContent>
    </main>
  );
}