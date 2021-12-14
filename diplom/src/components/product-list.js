import React, {useContext, useEffect} from 'react'
import {Box, Button, Rating} from '@mui/material'
import {AppContext} from '../context'
import {Link} from 'react-router-dom'
import scooter from './img/scooter.jpg'
import './product-list.css'

export const ProductList = ({size}) => {
    const {products, setProducts, basket, handleSetBasket} = useContext(AppContext)

    useEffect(() => {
        const tryAsync = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const json = await response.json()
                setProducts(json.map(product => ({...product, price: 15000})))
            } catch (ex) {
                console.error(ex)
            }
        }

        !products?.length && tryAsync()
    }, [products, setProducts])

    const showProducts = (size && products?.filter((_, index) => size > index)) || products

    return (
        <Box display="flex" flexWrap="wrap" justifyContent="center">
            {showProducts?.map(product => (
                <ProductCard key={product.id} product={product} basket={basket} handleSetBasket={handleSetBasket}/>
            ))}
        </Box>
    )
}


const ProductCard = ({product}) => {
    return (
        <Box as="article" m={2} p={2} minWidth={240} className='product-card__product-list'>
            <img src={scooter} alt={scooter} className='product-card__img'/>
            <p><Link to={`/catalog/${product.id}`} style={{margin: 0, padding: 0}}>{product.title?.slice(0, 10)}</Link>
            </p>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
            <ProductButton product={product}/>
        </Box>
    )
}

export const ProductButton = ({product}) => {
    const {basket, handleSetBasket} = useContext(AppContext)
    const isHasItem = basket?.findIndex(item => item.id === product.id)

    return (
        <Button variant='contained' onClick={() => handleSetBasket(product)}>
            {isHasItem > -1 ? 'Удалить из корзины' : `в корзину ${product.price} р.`}
        </Button>
    )
}
