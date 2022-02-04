import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { Layout } from '../../components/layout/layout'
import { AppContext } from '../../context'
import './basket-page.css'

export const BasketPage = () => {
  const { basket, handleаIncrementQuantity, handleаDecrementQuantity } = useContext(AppContext)
  const sum = basket?.reduce((sum, product) => {
    return sum + product.price * product.quantity
  }, 0)
  return (
    <Layout>
      <div>
        {basket?.map(product => (
          <Box className={'basket__field'} key={product.id} my={2}  >
            <Box flex={1}>
              <Box className={'basket__field-position'}>
                {product.title.slice(0, 40)}
              </Box>
              <Box>
                Number of catalogue: {product.id}
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" >
              <Box>{product?.price * product?.quantity} $ </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Button disabled={product?.quantity <= 1} onClick={() => handleаDecrementQuantity(product)}>-</Button>
                <Box>{product?.quantity ?? 1}</Box>
                <Button onClick={() => handleаIncrementQuantity(product)}>+</Button>
              </Box>
            </Box>
          </Box>
        ))}
        <Box className={'basket__sum'}>
          Total price: {sum} $
        </Box>
      </div>
    </Layout>
  )
}
