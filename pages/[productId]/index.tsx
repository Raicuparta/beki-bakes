import Head from "next/head";
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/dist/client/router";

import { products } from "../../components";
import { ListedProduct } from "../../components/ListedProduct";
import { GetStaticPaths } from "next";
import { PageContainer } from "../../components/PageContainer";
import { ProductId, productPhotos } from "../../components/productPhotos";
import { BreadcrumbsList } from "../../components/BreadcrumbsList";

const ProductPage = () => {
  const { beforePopState, query } = useRouter();
  useEffect(() => {
    beforePopState((state) => {
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
        <PageContainer>
          <BreadcrumbsList items={[{ title: "Products", href: "/" }]} />
          <Grid container spacing={2} sx={{ mb: 2 }} justifyContent="center">
            {Object.entries(product.variants).map(
              ([variantId, variantName]) => (
                <ListedProduct
                  key={variantId}
                  href={`/${product.id}/${variantId}`}
                  // @ts-ignore
                  image={productPhotos[product.id][variantId]}
                  name={variantName}
                  price={0}
                />
              )
            )}
          </Grid>
        </PageContainer>
      </main>
    </>
  );
};

// export const getStaticProps = async () => ({ props: {} });

// export const getStaticPaths: GetStaticPaths = async () => ({
//   paths: Object.keys(products).map((productId) => ({ params: { productId } })),
//   fallback: false,
// });

export default ProductPage;
