import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router'
import { Layout } from '../components/layout'
import { AppContext } from '../context'

export const AuthPage = () => {
  const { onAuth, isAuth } = useContext(AppContext)
  
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  
  const onLogin = (e) => {
    e.preventDefault()
    onAuth(login, password)
  }

  if (isAuth) {
    return <Navigate to="/profile" />
  }

  return (
    <Layout>
      <div>
        <Box display="flex" alignItems="center" justifyContent="center" flex={1} style={{ width: '600px', height: '300px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <Box width="100%" maxWidth={400} component="form" display="flex" flexDirection="column" style={{ margin: '15px'}} onSubmit={onLogin}>
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
        </Box>
      </div>
    </Layout>
  )
}
