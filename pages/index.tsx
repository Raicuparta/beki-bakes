import Head from "next/head";
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/dist/client/router";

import { products } from "../components";
import { ListedProduct } from "../components/ListedProduct";
import { PageContainer } from "../components/PageContainer";
import { productPhotos } from "../components/productPhotos";
import { BreadcrumbsList } from "../components/BreadcrumbsList";

const Home = () => {
  const { beforePopState } = useRouter();

  useEffect(() => {
    beforePopState((state) => {
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
        <PageContainer>
          <BreadcrumbsList items={[{ title: "Products" }]} />
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {Object.values(products).map(({ id, name }) => (
              <ListedProduct
                key={id}
                href={`/${id}`}
                name={name}
                image={productPhotos[id]["main"]}
                price={0}
              />
            ))}
          </Grid>
        </PageContainer>
      </main>
    </>
  );
};

export default Home;
