import React from 'react';
import Head from 'next/head'

import { useRouter } from 'next/dist/client/router'
import {  } from '../../components'
import {
  SelectedProduct,
  PageHeader,
  ProductId,
  products
} from '../../components';

const VariantPage = () => {
  const { query } = useRouter();
  const productId = query.productId as ProductId;
  const variantId = query.variantId as string;

  return (
    <>
      <Head>
        <title>bekibakes</title>
      </Head>
      <main>
        <PageHeader isSmall />
        <SelectedProduct
          product={products[productId]}
          variantId={variantId}
        />
      </main>
    </>
  );
};

export default VariantPage;
