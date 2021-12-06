import Head from "next/head";
import React from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import Image from "next/image";
import { RollCakeIcon, CookieIcon } from "../components/icons";

import { products } from "../components";
import { ListedProduct } from "../components/ListedProduct";
import { PageContainer } from "../components/PageContainer";
import { productPhotos } from "../components/productPhotos";
import { BreadcrumbsList } from "../components/BreadcrumbsList";

const snailSize = 80;

type Props = {
  children: React.ReactNode;
  title: string;
  price: number;
};

const MenuItem = (props: Props) => (
  <Stack sx={{ alignItems: "center" }}>
    {props.children}
    <Stack sx={{ alignItems: "center" }}>
      <Typography variant="h5">{props.title}</Typography>
      <Typography fontSize={20}>€{props.price}</Typography>
    </Stack>
  </Stack>
);

const MatchaRollIcon = () => (
  <RollCakeIcon
    outlineColor="#677d2b"
    cakeColor="#a5ad55"
    fillingColor="#a44b3c"
  />
);

const ChocolateRollIcon = () => (
  <RollCakeIcon
    outlineColor="#251d17"
    cakeColor="#4c392b"
    fillingColor="#a58a71"
  />
);

const VanillaRollIcon = () => (
  <RollCakeIcon
    outlineColor="#b8954a"
    cakeColor="#ebd691"
    fillingColor="#d09e6f"
  />
);

const Menu = () => (
  <>
    <Head>
      <title>bekibakes</title>
    </Head>
    <main>
      <Stack
        sx={{
          width: 540,
          height: 1920 / 2,
          margin: "auto",
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            p: 2,
            alignItems: "flex-end",
            justifyContent: "center",
            position: "relative",
            bgcolor: "background.paper",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 30,
              lineHeight: 1,
            }}
          >
            menu
          </Typography>
        </Stack>
        <Box
          sx={{
            background: "white",
            p: 2,
            color: "text.secondary",
            flex: 1,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: (theme) => theme.spacing(2),
              bottom: (theme) => theme.spacing(2),
            }}
          >
            <Image
              src="/snail-halfwhite.svg"
              alt="beki bakes"
              width={snailSize}
              height={snailSize}
              priority
            />
          </Box>
          <Stack spacing={2}>
            <MenuItem title="Matcha Azuki Roll" price={20}>
              <MatchaRollIcon />
            </MenuItem>
            <MenuItem title="Chocolate Chestnut Roll" price={20}>
              <ChocolateRollIcon />
            </MenuItem>
            <MenuItem title="Vanilla Salted Caramel Roll" price={20}>
              <VanillaRollIcon />
            </MenuItem>
            <MenuItem title="Box Set" price={32}>
              <Stack>
                <Stack direction="row" spacing={0.5}>
                  <MatchaRollIcon />
                  <ChocolateRollIcon />
                </Stack>
                <Stack
                  direction="row"
                  spacing={0.5}
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <VanillaRollIcon />
                  <CookieIcon />
                </Stack>
              </Stack>
            </MenuItem>
            <MenuItem title="Box Set" price={32}>
              <Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <MatchaRollIcon />
                  <ChocolateRollIcon />
                  <VanillaRollIcon />
                  <CookieIcon />
                </Stack>
              </Stack>
            </MenuItem>
          </Stack>
        </Box>
      </Stack>
    </main>
  </>
);

export default Menu;
