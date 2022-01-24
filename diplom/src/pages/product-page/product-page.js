import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../../components/layout/layout'
import { ProductButton } from '../../components/product-list/product-list'
import { AppContext } from '../../context'
import scooter from "../../components/img/scooter.jpg"
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
        <img src={scooter} alt={scooter} className='product-page__img'/>
        <p className={'product-page__title'}>{product?.title}</p>
        <p className={'product-page__price'}>Price: {product?.price} $</p>
        <p className={'product-page__body'}>{product?.body}</p>
        <ProductButton product={product} />
      </div>
    </Layout>
  )
}
