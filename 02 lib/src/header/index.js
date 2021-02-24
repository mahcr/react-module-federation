import React from 'react'

const Header = () => {
  return (
    <nav className="flex items-center bg-gray-800 p-3 flex-wrap">
      <a className="p-2 mr-4 inline-flex items-center">
        <span className="mr-5">⚛️</span>
        <span className="text-xl text-white font-bold uppercase tracking-wide">React Costa Rica</span>
      </a>
      <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>Logout</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
