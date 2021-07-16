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
import React from 'react'
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
} from '@material-ui/icons'

const products = [{
  name: 'Roll cake',
  photo: 'roll-cake',
  price: "10.00",
},
{
  name: 'Macarrons',
  photo: 'macarrons',
  price: "2.00",
},
{
  name: 'Cookies',
  photo: 'cookies',
  price: "1.50",
},
{
  name: 'Pound cake',
  photo: 'pound-cake',
  price: "3.00",
}]

export default function Home() {
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
          <img
            src="/snail-halfwhite.svg"
            alt="beki bakes"
            width={75}
            height={75}
          />
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
            {products.map(product => (
              <Grid
                key={product.name}
                item
                xs={12}
                sm={6}
              >
                <Card>
                  <CardActionArea
                    component="a"
                    href={`/photos/${product.photo}.jpg`}
                  >
                    <CardMedia
                      component="img"
                      alt={product.name}
                      title={product.name}
                      image={`/photos/${product.photo}.jpg`}
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
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  )
}
