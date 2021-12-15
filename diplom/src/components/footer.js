import React from 'react'
import {styled} from '@mui/system'
import './footer.css'
import image from './img/Rectangle.png'
import image_1 from "./img/1.png";
import image_2 from "./img/2.png";
import image_3 from "./img/3.png";
import image_4 from "./img/4.png";

export const Footer = ({isMainPage}) => (
    <div className={'footer__container'}>
        {
            isMainPage &&
            <div className={'welcome-page__block'}>
                <div className={'welcome-page__block-sub'}>
                    <img src={image_1} alt={image_1}/>
                    <img src={image_2} alt={image_2}/>
                    <img src={image_3} alt={image_3}/>
                    <img src={image_4} alt={image_4}/>
                </div>
            </div>
        }

        <div className="footer__block-links">
            <img src={image} alt={image}/>
            <div>
                <h2>Explore</h2>
                <ul className="footer__block-ul">
                    <li className="footer__block-li">
                        <a className="footer__block-a" href={'/'}>Electric skateboards</a>
                    </li>
                </ul>
                <ul className="footer__block-ul">
                    <li className="footer__block-li">
                        <a className="footer__block-a" href={'/'}>Electric scooters</a>
                    </li>
                </ul>
                <ul className="footer__block-ul">
                    <li className="footer__block-li">
                        <a className="footer__block-a" href={'/'}>Accessories</a>
                    </li>
                </ul>
                <ul className="footer__block-ul">
                    <li className="footer__block-li">
                        <a className="footer__block-a" href={'/https://en.wikipedia.org/wiki/Motorized_scooter'}>FAQs</a>
                    </li>
                </ul>
                <ul className="footer__block-ul">
                    <li className="footer__block-li">
                        <a className="footer__block-a" href={'/profile'}>Profile</a>
                    </li>
                </ul>
                <ul className="footer__block-ul">
                    <li className="footer__block-li">
                        <a className="footer__block-a" href={'https://chrome.google.com/'}>More info</a>
                    </li>
                </ul>
            </div>
            <div className="footer__block-paragraph">
                <h2>About Boosted USA</h2>
                <p className={'footer__paragraph'}>Boosted empowers people everywhere to commute across their cities, campuses, and communities in ways that were never before possible. Boosted is solving one of the biggest problems people face each day: transportation.</p>
                <p className={'footer__paragraph'}>CaliRides LLC - DBA Boosted USA</p>
                <p className={'footer__paragraph'}>1281 Andersen Drive Ste. K</p>
                <p className={'footer__paragraph'}>San Rafael, CA 94901</p>
            </div>
        </div>
    </div>
)