import Head from "next/head";
import React from "react";
import { Box, Grid, SliderTrack, Stack, Typography } from "@mui/material";

import { products } from "../components";
import { ListedProduct } from "../components/ListedProduct";
import { PageContainer } from "../components/PageContainer";
import { productPhotos } from "../components/productPhotos";
import { BreadcrumbsList } from "../components/BreadcrumbsList";
import { ChocolateRollIcon, MatchaRollIcon } from "./menu/roll-cake";
import { MenuButton } from "../components/MenuButton";
import { PoundCakeIcon } from "../components/icons";
import { MatchaPoundCakeIcon } from "./menu/pound-cake";
import { MatchaTartIcon } from "./menu/tart";

const Home = () => (
  <>
    <Head>
      <title>bekibakes</title>
    </Head>
    <main>
      <PageContainer>
        {/* <Grid container spacing={2} sx={{ mb: 2 }}>
          {Object.values(products).map(({ id, name }) => (
            <ListedProduct
              key={id}
              href={`/${id}`}
              name={name}
              image={productPhotos[id]["main"]}
              price={0}
            />
          ))}
        </Grid> */}
        <Stack spacing={2} sx={{ maxWidth: 350, margin: "auto" }}>
          <MenuButton href="/menu/roll-cake" name="Roll cake">
            <MatchaRollIcon size={80} />
          </MenuButton>
          <MenuButton href="/menu/pound-cake" name="Pound cake">
            <MatchaPoundCakeIcon size={80} />
          </MenuButton>
          <MenuButton href="/menu/tart" name="Tart">
            <MatchaTartIcon size={80} />
          </MenuButton>
        </Stack>
      </PageContainer>
    </main>
  </>
);

export default Home;
