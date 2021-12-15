import React from 'react'
import { Layout } from '../components/layout'
import {TextField} from "@mui/material";
import './profile-page.css'

export const ProfilePage = () => {
  return (
    <Layout>
      <div className={'profile__container'}>
          <div className={'profile__outer'}>
              <div className={'profile__inner'}>
                  <TextField id="standard-basic" label="Name" variant="standard" size="medium" />
                  <TextField id="standard-basic" label="Last Name" variant="standard" size="medium" />
              </div>
          </div>
      </div>
    </Layout>
  )
}
