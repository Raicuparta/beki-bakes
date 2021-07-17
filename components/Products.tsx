/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Stack,
  Grid,
  Box,
  IconButton,
} from '@material-ui/core'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
} from '@material-ui/icons'
import { motion } from 'framer-motion'

const products = {
  rollCake: {
    name: 'Roll cake',
    price: "10.00",
  },
  macaroons: {
    name: 'Macaroons',
    price: "2.00",
  },
  cookies: {
    name: 'Cookies',
    price: "1.50",
  },
  poundCake: {
    name: 'Pound cake',
    price: "3.00",
  },
} as const;

export type ProductId = keyof(typeof products)

type Props = {
  selectedProductId?: ProductId;
}

export const Products = ({
  selectedProductId,
}: Props) => {
  const selectedProduct = selectedProductId ? products[selectedProductId] : undefined;

  return (
    <>
      <Head>
        <title>bekibakes</title>
        <meta name="description" content="Beki Bakes" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#d3be56" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#2d57b4" />
      </Head>
      <main>
        <Stack sx={{ pt: 3, pb: 1, mb: 2, backgroundColor: 'background.paper', alignItems: 'center' }}>
          <Link href="/test">
            <a>
              <motion.figure layoutId="snail">
                <img
                  src="/snail-halfwhite.svg"
                  alt="beki bakes"
                  width={75}
                  height={75}
                  />
              </motion.figure>
            </a>
          </Link>
          <Typography
            component="h1"
            align="center"
            sx={{ fontWeight: 'bold', fontSize: 30 }}
          >
            beki
            <Box component="span">
              bakes
            </Box>
          </Typography>
        </Stack>
        <Container maxWidth="sm">
          <Stack
            spacing={4}
            direction="row"
            justifyContent="center"
            sx={{ mb: 2 }}
          >
            <IconButton
              component="a"
              href="https://www.instagram.com/bekibakes"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="large"
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com/bekibakeshop"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="large"
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
          </Stack>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {Object.entries(products).map(([id, product]) => (
              <Grid
                key={id}
                item
                xs={12}
                sm={6}
              >
                <motion.div layoutId={"card-" + product.name}>
                  <Card>
                    <Link href={`/${id}`} passHref>
                      <CardActionArea component="a">
                        <CardMedia
                          component="img"
                          alt={product.name}
                          title={product.name}
                          image={`/photos/${id}.jpg`}
                          height={230}
                        />
                        <CardContent sx={{ py: 1 }}>
                          <Stack direction="row" justifyContent="space-between">
                            <Typography variant="h6">
                              {product.name}
                            </Typography>
                            <Typography variant="h6">
                              €{product.price}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  )
}
