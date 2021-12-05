import React from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import { Product } from "../../components";
import { SelectedProduct, products } from "../../components";
import { GetStaticPaths } from "next";
import { PageContainer } from "../../components/PageContainer";
import { ProductId, ProductVariantId } from "../../components/productPhotos";
import { BreadcrumbsList } from "../../components/BreadcrumbsList";

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
        <PageContainer>
          <BreadcrumbsList
            items={[
              { title: "Products", href: "/" },
              { title: product.name, href: `/${productId}` },
            ]}
          />
          <SelectedProduct product={product} variantId={variantId} />
        </PageContainer>
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
