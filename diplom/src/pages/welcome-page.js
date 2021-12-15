import React from 'react'
import { Layout } from '../components/layout'
import './welcome-page.css';


export const WelcomePage = () => {
    return (
    <Layout isMainPage>
      <div className={'welcome-page'}>
          <h1 className={'welcome-page__title'}>Welcome to Boosted USA</h1>
          <h2 className={'welcome-page__field'}>The Holy Grail of Electric Skateboards and One REVolutionary Scooter</h2>
          <div className={'welcome-page__buttons'}>
              <button className={'welcome-page__button'}>BOOSTED REVS</button>
              <button className={'welcome-page__button'}>BOOSTED BOARDS</button>
          </div>
      </div>
    </Layout>
  )
}
