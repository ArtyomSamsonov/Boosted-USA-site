import React from 'react'
import { Layout } from '../components/layout'
import {TextField, TextareaAutosize} from "@mui/material";
import './profile-page.css'

export const ProfilePage = () => {
  return (
    <Layout>
      <div className={'profile__container'}>
          <div className={'profile__outer'}>
              <div className={'profile__inner'}>
                  <h2>Your Account</h2>
                  <TextField id="standard-basic" label="Name" variant="standard" size="medium" />
                  <TextField id="standard-basic" label="Last Name" variant="standard" size="medium" />
                  <TextField id="standard-basic" type="email" label="Email" variant="standard" size="medium" />
                  <TextField id="standard-basic" type="phone" label="Phone number" variant="standard" size="medium" />
                  <TextareaAutosize
                      aria-label="minimum height"
                      minRows={10}
                      placeholder="Message..."
                      style={{ width: 400, marginTop: '30px' }}
                  />
              </div>
          </div>
      </div>
    </Layout>
  )
}
