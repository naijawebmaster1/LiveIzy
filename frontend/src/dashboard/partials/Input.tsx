import React from 'react'
function Input() {
  return (
    <div>    <div className="w-96">
      <label htmlFor="email" className="">
        Email
      </label>
      <input
        id="email-address"
        name="email"
        // onChange={formik.handleChange}
        type="email"
        autoComplete="email"
        required
        className=" mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Email address"
      />
    </div></div>
  )
}
export default Input