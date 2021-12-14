import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router'
import { Layout } from '../components/layout'
import { AppContext } from '../context'
import './auth-page.css'

export const AuthPage = () => {
  const { onAuth, isAuth } = useContext(AppContext)
  
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  
  const onLogin = (e) => {
    e.preventDefault()
    onAuth(login, password)
  }

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <Layout>
      <div className='authPage__container'>
        <div className='authPage__outer'>
          <Box component="form" className='authPage__inner' onSubmit={onLogin}>
            <TextField
              label="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              size="medium"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="medium"
            />
            <Button type="submit">Sign in</Button>
          </Box>
        </div>
      </div>
    </Layout>
  )
}
