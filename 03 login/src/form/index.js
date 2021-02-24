import React from 'react'

const Form = ({ onLogin = () => ({}) }) => {  
  return (
    <div className="w-10/12 m-auto my-10 bg-white shadow-md lg:w-4/12 md:6/12">
      <div className="px-8 py-8 rounded-xl">
        <h1 className="mt-3 text-2xl font-medium text-center">Login</h1>
        <form action="" className="mt-6">
          <div className="my-5 text-sm">
            <label htmlFor="username" className="block text-black">
              Username
            </label>
            <input
              type="text"
              autoFocus
              id="username"
              className="w-full px-4 py-3 mt-3 bg-gray-100 rounded-sm focus:outline-none"
              placeholder="Username"
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 mt-3 bg-gray-100 rounded-sm focus:outline-none"
              placeholder="Password"
            />
            <div className="flex justify-end mt-2 text-xs text-gray-600">
              <a href="../../pages/auth/forget_password.html hover:text-black">Forget Password?</a>
            </div>
          </div>
          
            <button onClick={onLogin} className="block w-full p-3 text-center text-white duration-300 bg-gray-800 rounded-sm hover:bg-black">
              Login
            </button>          


          {/* <Link to="/dashboard">
            <button className="block w-full p-3 text-center text-white duration-300 bg-gray-800 rounded-sm hover:bg-black">
              Login
            </button>
          </Link> */}
        </form>
        <p className="mt-12 text-xs font-light text-center text-gray-400">
          {' '}
          Don't have an account?{' '}
          <a href="../auth/register.html" className="font-medium text-black">
            {' '}
            Create One{' '}
          </a>{' '}
        </p>
      </div>
    </div>
  )
}

export default Form
