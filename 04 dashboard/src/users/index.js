import React from 'react'
import { useSession } from 'login/session'

const Dashboard = () => {
  const { isSessionActive } = useSession()
  
  return (
    <div className="px-32 mt-32">
      <h1 className="text-4xl">Users</h1>
      <h2 className="text-gray-400">Session {isSessionActive ? <span className="text-green-400">Active</span> : <span className="text-red-400">Inactive</span>}</h2>

      <table className="min-w-full table-auto">
        <thead className="justify-between">
          <tr>
            <th className="px-16 py-2">
              <span className="text-gray-800"></span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-800">Name</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-800">Invitation</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-800">Date</span>
            </th>

            <th className="px-16 py-2">
              <span className="text-gray-800">Time</span>
            </th>

            <th className="px-16 py-2">
              <span className="text-gray-800">Status</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          <tr className="bg-white border-4 border-gray-200">
            <td className="flex flex-row items-center px-16 py-2">
              <img
                className="object-cover w-8 h-8 rounded-full "
                src="https://randomuser.me/api/portraits/men/30.jpg"
                alt=""
              />
            </td>
            <td>
              <span className="ml-2 font-semibold text-center">Dean Lynch</span>
            </td>
            <td className="px-16 py-2">
              <button className="px-4 py-2 text-white bg-indigo-500 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                Open Link
              </button>
            </td>
            <td className="px-16 py-2">
              <span>05/06/2020</span>
            </td>
            <td className="px-16 py-2">
              <span>10:00</span>
            </td>

            <td className="px-16 py-2">
              <span className="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h5 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  stroklinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </span>
            </td>
          </tr>
          <tr className="bg-white border-4 border-gray-200">
            <td className="flex flex-row items-center px-16 py-2">
              <img
                className="object-cover w-8 h-8 rounded-full "
                src="https://randomuser.me/api/portraits/men/76.jpg"
                alt=""
              />
            </td>
            <td>
              <span className="ml-2 font-semibold text-center">Ralph Barnes</span>
            </td>
            <td className="px-16 py-2">
              <button className="px-4 py-2 text-white bg-indigo-500 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                Open Link
              </button>
            </td>
            <td className="px-16 py-2">
              <span>05/06/2020</span>
            </td>
            <td className="px-16 py-2">
              <span>12:15</span>
            </td>

            <td className="px-16 py-2">
              <span className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  stroklinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
              </span>
            </td>
          </tr>
          <tr className="bg-white border-4 border-gray-200">
            <td className="flex flex-row items-center px-16 py-2">
              <img
                className="object-cover w-8 h-8 rounded-full "
                src="https://randomuser.me/api/portraits/men/38.jpg"
                alt=""
              />
            </td>
            <td>
              <span className="ml-2 font-semibold text-center">Brett Castillo</span>
            </td>
            <td className="px-16 py-2">
              <button className="px-4 py-2 text-white bg-indigo-500 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                Open Link
              </button>
            </td>
            <td className="px-16 py-2">
              <span>05/06/2020</span>
            </td>
            <td className="px-16 py-2">
              <span>08:35</span>
            </td>

            <td className="px-16 py-2">
              <span className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  stroklinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
