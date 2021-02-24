import React, { createContext, useContext, useState } from 'react'

const SessionContext = createContext(null)

const useStateSession = () => {
  const [isSessionActive, setSession] = useState(false);

  return {
    isSessionActive,
    setSession,
  };
}

export const SessionProvider = ({ children }) => {
  const value = useStateSession()
  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

export const useSession = () => {
  const context = useContext(SessionContext)
  if (!context) {
    throw new Error(`useSession must be used within a SessionContext`)
  }
  return context
}