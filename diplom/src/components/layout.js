import './layout.css';
import React from 'react'
import {Header} from './header';
import {Footer} from './footer';

export const Layout = ({children, withImage = false}) => (
    <div className={'layout__container'}>
        <div className={'layout__header'}>
            <Header/>
            <div className={withImage ? 'layout__content-with-image' : 'layout__content'}>
                {children}
            </div>
        </div>
        {/*<Footer/>*/}
    </div>
)
