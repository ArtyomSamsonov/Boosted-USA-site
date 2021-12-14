import './layout.css';
import React from 'react'
import { Header } from './header';
import { Footer } from './footer';



export const Layout = ({ children }) => (
  <div className={'layout__container'}>
    <div className={'layout__header'} >
      <Header />
      <div className={'layout__content'} >
        {children}
      </div>
    </div>
    <Footer />
  </div>
)
