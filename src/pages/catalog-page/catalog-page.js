import React from 'react'
import { Layout } from '../../components/layout/layout'
import { ProductList } from '../../components/product-list/product-list'
import './catalog-page.css'

export const CatalogPage = () => {
  return (
    <Layout>
        <h1 className={'catalog-page__title'}>Looking for Accessories?</h1>
      <div>
        <ProductList />
      </div>
    </Layout>
  )
}
