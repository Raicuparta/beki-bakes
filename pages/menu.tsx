import Head from "next/head";
import React from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import Image from "next/image";
import { RollCakeIcon } from "../components/icons/roll-cake-icon";

import { products } from "../components";
import { ListedProduct } from "../components/ListedProduct";
import { PageContainer } from "../components/PageContainer";
import { productPhotos } from "../components/productPhotos";
import { BreadcrumbsList } from "../components/BreadcrumbsList";

const size = 60;

const Menu = () => (
  <>
    <Head>
      <title>bekibakes</title>
    </Head>
    <main>
      <Box
        sx={{
          width: 540,
          height: 1920 / 2,
          background: "white",
          margin: "auto",
        }}
      >
        <Stack
          direction={"column"}
          sx={{
            pt: 2,
            pb: 1,
            color: "text.primary",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Image
            src="/snail-halfwhite.svg"
            alt="beki bakes"
            width={size}
            height={size}
            priority
          />
          <Typography
            component="h1"
            align="center"
            sx={{
              fontWeight: "bold",
              fontSize: 25,
              color: "text.secondary",
            }}
          >
            bekibakes
          </Typography>
        </Stack>
        <RollCakeIcon
          outlineColor="#000000"
          cakeColor="#4c392b"
          fillingColor="#a58a71"
        />
        <RollCakeIcon
          outlineColor="#677d2b"
          cakeColor="#a3b554"
          fillingColor="#a44b3c"
        />
        <RollCakeIcon
          outlineColor="#b8954a"
          cakeColor="#ebd691"
          fillingColor="#d09e6f"
        />
      </Box>
    </main>
  </>
);

export default Menu;
