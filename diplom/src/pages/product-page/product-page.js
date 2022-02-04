import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../../components/layout/layout'
import { ProductButton } from '../../components/product-list/product-list'
import { AppContext } from '../../context'
import scooter1 from "../../components/img/scooter1.png"
import scooter2 from "../../components/img/scooter2.png"
import scooter3 from "../../components/img/scooter3.png"
import scooter4 from "../../components/img/scooter4.png"
import './product-page.css'

export const ProductPage = ({ location }) => {
  const { products } = useContext(AppContext)
  const { id } = useParams()
  const [product, setProduct] = useState(() => products?.find(product => product.id === +id))

  useEffect(() => {
    const tryAsync = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const json = await response.json()
        setProduct(json)
      } catch (ex) {
        console.error(ex)
      }
    }

    !product && tryAsync()
  }, [product, id])

  return (
    <Layout>
      <div className={'product-page__info'}>
        <img src={scooter1} alt={scooter1} className='product-page__img'/>
        {/*<div className={'slider middle'}>*/}
        {/*  <div className={'slides'}>*/}
        {/*    <input type={'radio'} name={'r'} id={'r1'} checked/>*/}
        {/*    <input type={'radio'} name={'r'} id={'r2'}/>*/}
        {/*    <input type={'radio'} name={'r'} id={'r3'}/>*/}
        {/*    <input type={'radio'} name={'r'} id={'r4'}/>*/}

        {/*    <div className={'slide s1'}><img src={scooter1} alt={scooter1} className='product-page__img'/></div>*/}
        {/*    <div className={'slide'}><img src={scooter2} alt={scooter2} className='product-page__img'/></div>*/}
        {/*    <div className={'slide'}><img src={scooter3} alt={scooter3} className='product-page__img'/></div>*/}
        {/*    <div className={'slide'}><img src={scooter4} alt={scooter4} className='product-page__img'/></div>*/}
        {/*  </div>*/}
        {/*  <div className={'navigation'}>*/}
        {/*    <label htmlFor={'r1'} className={'bar'}>*/}
        {/*      <input/>*/}
        {/*    </label>*/}
        {/*    <label htmlFor={'r2'} className={'bar'}>*/}
        {/*      <input/>*/}
        {/*    </label>*/}
        {/*    <label htmlFor={'r3'} className={'bar'}>*/}
        {/*      <input/>*/}
        {/*    </label>*/}
        {/*    <label htmlFor={'r4'} className={'bar'}>*/}
        {/*      <input/>*/}
        {/*    </label>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <p className={'product-page__title'}>{product?.title}</p>
        <p className={'product-page__price'}>Price: {product?.price} $</p>
        <p className={'product-page__body'}>{product?.body}</p>
        <ProductButton product={product} />
      </div>
    </Layout>
  )
}
