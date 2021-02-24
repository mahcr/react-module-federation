import React from 'react'
import { useSession } from 'login/session'

const Header = ({ onLogout = () => ({}) }) => {

  const { isSessionActive } = useSession()

  return (
    <nav className="flex flex-wrap items-center p-3 bg-gray-800">
      <a className="inline-flex items-center p-2 mr-4">
        <span className="mr-5">⚛️</span>
        <span className="text-xl font-bold tracking-wide text-white uppercase">
          React Costa Rica
        </span>
      </a>
      <div className="hidden w-full top-navbar lg:inline-flex lg:flex-grow lg:w-auto">
        <div className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
          {isSessionActive ? (
            <button
              onClick={onLogout}
              className="items-center justify-center w-full px-3 py-2 text-gray-400 rounded lg:inline-flex lg:w-auto hover:bg-gray-900 hover:text-white">
              <span>Logout</span>
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

export default Header
