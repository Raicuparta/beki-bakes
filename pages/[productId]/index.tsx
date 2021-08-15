import Head from 'next/head'
import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';

import {
  PageHeader,
  ProductId,
  products,
  SocialIcons,
} from '../../components';
import { ListedProduct } from '../../components/ListedProduct';
import { CountertopsOutlined } from '@material-ui/icons';

const ProductPage = () => {
  const { beforePopState, query } = useRouter();
  useEffect(() => {
    beforePopState(state => {
      // Disable scroll restoration on navigation,
      // to prevent messy animations.
      state.options.scroll = false;
      return true;
    });
  }, [beforePopState]);

  const productId = query.productId as ProductId;
  if (!productId) return null;

  const product = products[productId];
  if (!product) return null;
  
  return (
    <>
      <Head>
        <title>bekibakes</title>
      </Head>
      <main>
        <PageHeader isSmall href="/" />
        <Container maxWidth="sm" sx={{ my: 2 }}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {Object.entries(product.variants).map(([variantId, variantName]) => (
              <ListedProduct
                key={variantId}
                href={`/${product.id}/${variantId}`}
                image={`/photos/${product.id}/${variantId}.jpg`}
                name={variantName}
                price={0}
              />
            ))}
          </Grid>
          <SocialIcons />
        </Container>
      </main>
    </>
  );
};

export default ProductPage;
