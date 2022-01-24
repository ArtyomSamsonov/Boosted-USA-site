import React from 'react'
import { Layout } from '../../components/layout/layout'
import './skaters-page.css'
import skater from '../../components/img/Elecskate.jpg'
import {Link} from 'react-router-dom';

export const SkaterPage = () => {
    return (
        <Layout>
            <div className={'skater-page'}>
                <div className={'skater-page__div'}>
                    <img className={'skater-page__img'} src={skater} alt={skater}/>
                </div>
                <div className={'skater-page__block'}>
                    <p className={'skater-page__field'}>High-performance</p>
                </div>
                <div className={'skater-page__block'}>
                    <p className={'skater-page__title'}>Electric Skateboards</p>
                </div>
                <div className={'skater-page__block'}>
                    <p className={'skater-page__field_2'}>Cruising campus, going to work or getting through that long list of errands has never been easier or more fun.</p>
                </div>
                <div className={'skater-page__buttons'}>
                    <Link to="/catalog">
                        <button className={'skater-page__button'}>Shop now</button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}