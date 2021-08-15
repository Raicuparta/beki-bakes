import {
  Container,
  Grid,
} from '@material-ui/core'
import React from 'react'
import { ListedProduct } from './ListedProduct'

export const products = {
  rollCake: {
    name: 'Roll cake',
    price: 10.00,
    id: 'rollCake',
    variants: [
      {
        name: 'Chestnut Mousse',
        picture: 'rollCake',
      },
      {
        name: 'Salted Caramel',
        picture: 'rollCake',
      },
      {
        name: 'Matcha Adzuki',
        picture: 'rollCake',
      },
    ],
    packages: [
      {
        quantity: 1,
        price: 10,
      },
    ],
  },
  macarons: {
    name: 'Macaroons',
    price: 2.00,
    id: 'macarons',
    variants: [
      {
        name: 'Raspberry',
        picture: 'raspberry',
      },
      {
        name: 'Chocolate',
        picture: 'chocolate',
      },
      {
        name: 'Pistachio',
        picture: 'pistachio',
      },
      {
        name: 'Yuzu',
        picture: 'yuzu',
      },
      {
        name: 'Caramel',
        picture: 'macarons',
      },
    ],
    packages: [
      {
        quantity: 12,
        price: 18,
      },
      {
        quantity: 24,
        price: 35,
      },
      {
        quantity: 48,
        price: 50,
      },
    ],
  },
  cookies: {
    name: 'Cookies',
    price: 1.50,
    id: 'cookies',
    variants: [
      {
        name: 'Cookies',
        picture: 'cookies',
      },
    ],
    packages: [
      {
        quantity: 12,
        price: 18,
      },
      {
        quantity: 24,
        price: 35,
      },
      {
        quantity: 48,
        price: 50,
      },
    ],
  },
  poundCake: {
    name: 'Pound cake',
    price: 3.00,
    id: 'poundCake',
    variants: [
      {
        name: 'Lemon',
        picture: 'lemon',
      },
      {
        name: 'Red Velvet',
        picture: 'redVelvet',
      },
    ],
    packages: [
      {
        quantity: 12,
        price: 18,
      },
      {
        quantity: 24,
        price: 35,
      },
      {
        quantity: 48,
        price: 50,
      },
    ],
  },
} as const;

export type ProductId = keyof(typeof products)
export type Product = typeof products[ProductId];

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
