import React from 'react';
import Head from 'next/head'

import { useRouter } from 'next/dist/client/router'
import { ProductId, products } from '../components'
import {
  SelectedProduct,
  PageHeader,
  SocialIcons,
} from '../components';

const Test = () => {
  const { query } = useRouter();
  const productId = query.productId as ProductId;

  return (
    <>
      <Head>
        <title>bekibakes</title>
      </Head>
      <main>
        <PageHeader isSmall />
        <SelectedProduct product={products[productId]} />
      </main>
    </>
  );
};

export default Test;
