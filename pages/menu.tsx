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
          p: 2,
          color: "text.secondary",
        }}
      >
        <Stack
          direction={"column"}
          sx={{
            pb: 1,
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
            }}
          >
            bekibakes
          </Typography>
        </Stack>
        <Stack>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <RollCakeIcon
              outlineColor="#677d2b"
              cakeColor="#a3b554"
              fillingColor="#a44b3c"
            />
            <Stack>
              <Typography>Matcha outside azuki inside hehe</Typography>
              <Typography>Azuki inside hehe</Typography>
            </Stack>
          </Stack>
          <RollCakeIcon
            outlineColor="#251d17"
            cakeColor="#4c392b"
            fillingColor="#a58a71"
          />
          <RollCakeIcon
            outlineColor="#b8954a"
            cakeColor="#ebd691"
            fillingColor="#d09e6f"
          />
        </Stack>
      </Box>
    </main>
  </>
);

export default Menu;
