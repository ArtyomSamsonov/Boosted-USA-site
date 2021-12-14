import React from 'react'
import { Layout } from '../components/layout'
import { ProductList } from '../components/product-list'
import './welcome-page.css';
import image_1 from "../components/img/1.png";
import image_2 from "../components/img/2.png";
import image_3 from "../components/img/3.png";
import image_4 from "../components/img/4.png";

export const WelcomePage = () => {
    return (
    <Layout>
      <div className={'welcome-page'}>
          <h1 className={'welcome-page__title'}>Welcome to Boosted USA</h1>
          <h2 className={'welcome-page__field'}>The Holy Grail of Electric Skateboards and One REVolutionary Scooter</h2>
          <div className={'welcome-page__buttons'}>
              <button className={'welcome-page__button'}>BOOSTED REVS</button>
              <button className={'welcome-page__button'}>BOOSTED BOARDS</button>
          </div>
        {/*<ProductList size={4} />*/}
          <div className={'welcome-page__block'}>
              <div className={'welcome-page__block-sub'}>
                  <img src={image_1} alt={image_1} />
                  <img src={image_2} alt={image_2} />
                  <img src={image_3} alt={image_3} />
                  <img src={image_4} alt={image_4} />
              </div>
          </div>
      </div>
    </Layout>
  )
}
