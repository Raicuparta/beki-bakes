import React from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import { Product, SocialIcons } from "../../components";
import { SelectedProduct, PageHeader, products } from "../../components";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { GetStaticPaths } from "next";
import { PageContainer } from "../../components/PageContainer";
import { ProductId, ProductVariantId } from "../../components/productPhotos";

const VariantPage = <TProductId extends ProductId>() => {
  const { query } = useRouter();
  const productId = query.productId as TProductId;
  const variantId = query.variantId as ProductVariantId<TProductId>;
  const product = products[productId] as Product<TProductId>;

  if (!product) return null;

  return (
    <>
      <Head>
        <title>bekibakes</title>
      </Head>
      <main>
        <PageHeader forceSmall href={`/${productId}`} />
        <PageContainer>
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" href="/" sx={{ color: "inherit" }}>
              Home
            </Link>
            <Link
              underline="hover"
              href={`/${productId}`}
              sx={{ color: "inherit" }}
            >
              {product.name}
            </Link>
            <Typography color="background.paper">
              {product.variants[variantId]}
            </Typography>
          </Breadcrumbs>
          <SelectedProduct product={product} variantId={variantId} />
        </PageContainer>
        <SocialIcons />
      </main>
    </>
  );
};

export const getStaticProps = async () => ({ props: {} });

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Object.values(products)
    .map(({ id: productId, variants }) =>
      Object.keys(variants).map((variantId) => ({
        params: {
          productId,
          variantId,
        },
      }))
    )
    .flat(),
  fallback: false,
});

export default VariantPage;
