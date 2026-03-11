import React from 'react'

const Button = ({
    title,
    type = "submit",
    loading
}) => {
  return (
    <>
      <button
      type={type}
      disabled={loading}
      className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50'
      >{loading ? "Please wait..." : title}</button>
    </>
  )
}

export default Button
