import React, {useContext, useEffect} from 'react'
import {Box, Button, Rating, Typography} from '@mui/material'
import {AppContext} from '../context'
import {Link} from 'react-router-dom'
import scooter from './img/scooter.jpg'
import './product-list.css'

export const ProductList = ({size}) => {
    const {products, setProducts, basket, handleSetBasket} = useContext(AppContext)

    useEffect(() => {
        const tryAsync = async () => {
            try {
                // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const response = await fetch('https://mocki.io/v1/7983ad3b-0d7e-4a0d-aebf-c62b1e58b44f')
                const json = await response.json()
                // setProducts(json.map(product => ({...product, price: 15000})))
                setProducts(json.products)
            } catch (ex) {
                console.error(ex)
            }
        }

        !products?.length && tryAsync()
    }, [])

    // const showProducts = (size && products?.filter((_, index) => size > index)) || products

    if (!products) {
        return <></>
    } else {
        return (
            <Box display="flex" flexWrap="wrap" justifyContent="center">
                {products && products?.map(product => (
                    <ProductCard key={product.id} product={product} basket={basket} handleSetBasket={handleSetBasket}/>
                ))}
            </Box>
        )
    }
}


const ProductCard = ({product}) => {
    return (
        <Link to={`/catalog/${product.id}`} style={{ textDecoration: 'none' }}>
            <Box as="article" m={2} p={2} minWidth={240} className='product-card__product-list'>
                <img src={scooter} alt={scooter} className='product-card__img'/>
                <Typography color='primary' variant='h6' style={{margin: 0, padding: 0}}>
                    {product.title.length > 21 ? product.title?.toUpperCase().slice(0, 21) + ' ...' : product.title.toUpperCase()}
                </Typography>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
                <ProductButton product={product}/>
            </Box>
        </Link>
    )
}

export const ProductButton = ({product}) => {
    const {basket, handleSetBasket} = useContext(AppContext)
    const isHasItem = basket?.findIndex(item => item.id === product.id)

    const handleClick = (e, product) => {
        e.preventDefault()
        handleSetBasket(product)
    }

    return (
        <Button variant='contained' onClick={(e) => handleClick(e, product)}>
            {isHasItem > -1 ? 'Удалить из корзины' : `в корзину ${product.price} р.`}
        </Button>
    )
}
