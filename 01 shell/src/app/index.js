import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Header from 'lib/Header'
import Login from 'login/form'
import Dashboard from 'dashboard/users'

const Index = () => {
  const history = useHistory()

  const handleLogin = () => {
    history.push('/dashboard')
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  )
}

export default Index
