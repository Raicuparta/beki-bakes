import {
  Container,
  Grid,
} from '@material-ui/core'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { ListedProduct } from './ListedProduct'
import { SelectedProduct } from './SelectedProduct'

export const products = {
  rollCake: {
    name: 'Roll cake',
    price: "10.00",
    id: 'rollCake',
  },
  macaroons: {
    name: 'Macaroons',
    price: "2.00",
    id: 'macaroons',
  },
  cookies: {
    name: 'Cookies',
    price: "1.50",
    id: 'cookies',
  },
  poundCake: {
    name: 'Pound cake',
    price: "3.00",
    id: 'poundCake',
  },
} as const;

export type ProductId = keyof(typeof products)
export type Product = typeof products[ProductId];

type Props = {
  selectedProductId?: ProductId;
}

export const Products = () => (
  <Container maxWidth="sm">
    <Grid container spacing={2} sx={{ mb: 2 }}>
      {Object.values(products).map((product) => (
        <ListedProduct
          key={product.id}
          product={product}
        />
      ))}
    </Grid>
  </Container>
);
