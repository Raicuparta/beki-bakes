import Head from 'next/head'
import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';

import { PageHeader, products, SocialIcons } from '../components';
import { ListedProduct } from '../components/ListedProduct';

const Home = () => {
  const { beforePopState } = useRouter();

  useEffect(() => {
    beforePopState(state => {
      // Disable scroll restoration on navigation,
      // to prevent messy animations.
      state.options.scroll = false;
      return true;
    });
  }, [beforePopState]);
  
  return (
    <>
      <Head>
        <title>bekibakes</title>
      </Head>
      <main>
        <PageHeader />
        <SocialIcons />
        <Container maxWidth="sm">
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {Object.values(products).map(({
              id,
              name,
            }) => (
              <ListedProduct
                key={id}
                href={`/${id}`}
                name={name}
                image={`/photos/${id}/${id}.jpg`}
                price={0}
              />
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Home;
