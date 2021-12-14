import React from 'react'
import { styled } from '@mui/system'
import './footer.css'
import image from './img/Rectangle.png'

export const Footer = () => (
  <div className={'footer__container'}>
      <img src={image} alt={image} />
      <div>
          <h2>Explore</h2>
          <ul>
              <li>
                  <a href={'/'}>Electric skateboards</a>
              </li>
          </ul>
          <ul>
              <li>
                  <a href={'/'}>Electric scooters</a>
              </li>
          </ul>
          <ul>
              <li>
                  <a href={'/'}>Accessories</a>
              </li>
          </ul>
          <ul>
              <li>
                  <a href={'/'}>Electric skateboards</a>
              </li>
          </ul>
          <ul>
              <li>
                  <a href={'/'}>Electric skateboards</a>
              </li>
          </ul>
          <ul>
              <li>
                  <a href={'/'}>Electric skateboards</a>
              </li>
          </ul>
      </div>
      <div>
          <h2>About Boosted USA</h2>
          <ul>
              <li>
                  <a href={'/'}>Electric skateboards</a>
              </li>
          </ul>
          <ul>
              <li>
                  <a href={'/'}>Electric scooters</a>
              </li>
          </ul>
          <ul>
              <li>
                  <a href={'/'}>Accessories</a>
              </li>
          </ul>
          <ul>
              <li>
                  <a href={'/'}>Electric skateboards</a>
              </li>
          </ul>
          <ul>
              <li>
                  <a href={'/'}>Electric skateboards</a>
              </li>
          </ul>
          <ul>
              <li>
                  <a href={'/'}>Electric skateboards</a>
              </li>
          </ul>
      </div>
  </div>
)

// const Container = styled('footer')({
//   color: 'darkslategray',
//   backgroundColor: 'aliceblue',
// });
