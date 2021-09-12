import React from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import { SocialIcons } from "../../components";
import {
  SelectedProduct,
  PageHeader,
  ProductId,
  products,
} from "../../components";
import { Box } from "@material-ui/core";
import { GetStaticPaths } from "next";
import { PageContainer } from "../../components/PageContainer";

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
        <PageHeader isSmall href={`/${productId}`} />
        <PageContainer>
          <SelectedProduct
            product={products[productId]}
            variantId={variantId}
          />
        </PageContainer>
        <SocialIcons />
      </main>
    </>
  );
};

// export const getStaticProps = async () => ({ props: {} });

// export const getStaticPaths: GetStaticPaths = async () => ({
//   paths: Object.values(products)
//     .map(({ id: productId, variants }) =>
//       Object.keys(variants).map((variantId) => ({
//         params: {
//           productId,
//           variantId,
//         },
//       }))
//     )
//     .flat(),
//   fallback: false,
// });

export default VariantPage;
