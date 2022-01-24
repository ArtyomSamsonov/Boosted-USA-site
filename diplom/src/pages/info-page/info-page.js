import React from 'react'
import { Layout } from '../../components/layout/layout'
import './info-page.css'
import shopboard from '../../components/img/shopboards.jpg'
import shoprev from '../../components/img/shoprevs.jpg'

export const InfoPage = () => {
    return (
        <Layout>
            <div className={'info'}>
                <div className={'info-page'}>
                    <h2 className={'info-page__title'}>Looking for Boosted Boards, or Boosted Revs??</h2>
                </div>
                <div className={'info-page'}>
                    <h3 className={'info-page__field'}>Boosted USA acquired all of the remaining inventory directly from Boosted. This means we have the electric skateboards and scooter you all love and have been looking for. Get your hands on these highly sought after products while supplies last.</h3>
                </div>
                <div className={'info__block'}>
                    <div className={'block'}>
                        <h3 className={'block__title'}>Shop Boosted Boards</h3>
                        <img src={shopboard} alt={shopboard}/>
                    </div>
                    <div className={'block'}>
                        <h3 className={'block__title'}>Shop Boosted Revs</h3>
                        <img src={shoprev} alt={shoprev}/>
                    </div>
                </div>
                <div className={'info__block'}>
                    <div className={'block'}>
                        <iframe width="580" height="315" src="https://www.youtube.com/embed/oAQxk9dOJ8k"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </div>
                    <div className={'block'}>
                        <iframe width="580" height="315" src="https://www.youtube.com/embed/78bXV1ZqQWI"
                                 title="YouTube video player" frameBorder="0"
                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                 allowFullScreen/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
