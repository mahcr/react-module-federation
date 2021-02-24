import React, { useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Header from 'lib/Header'
import Login from 'login/form'
import { useSession } from 'login/session'
import Dashboard from 'dashboard/users'

const Index = () => {
  const history = useHistory()
  const { setSession } = useSession()

  const handleLogin = () => {
    history.push('/dashboard')
    setSession(true)
  }

  const handleLogout = () => {
    history.push('/')
    setSession(false)
  }

  return (
    <div>      
      <Header onLogout={handleLogout}/>
      <Switch>
        <Route exact path="/">       
          <Login onLogin={handleLogin} />          
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>          
    </div>
  )
}

export default Index
