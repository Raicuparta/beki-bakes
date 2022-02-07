import Head from "next/head";
import React from "react";
import { Stack, Typography } from "@mui/material";
import {
  ChocolateRollIcon,
  CookieIcon,
  MatchaRollIcon,
  VanillaRollIcon,
} from "../../components/icons";
import { MenuItem } from "../../components/MenuItem";
import { MenuPageContainer } from "../../components/MenuPageContainer";

const Menu = () => (
  <>
    <Head>
      <title>bekibakes</title>
    </Head>
    <MenuPageContainer
      footer={
        <>
          <Typography>Full-size roll: 21 x 9 x 7 cm</Typography>
          <Typography>Half-size roll: 10.5 x 9 x 7 cm</Typography>
        </>
      }
    >
      <MenuItem
        title="Matcha Azuki Roll"
        description="Matcha chiffon cake with fresh whipped cream and azuki paste"
        price={20}
      >
        <MatchaRollIcon />
      </MenuItem>
      <MenuItem
        title="Chocolate Chestnut Roll"
        description="Chocolate chiffon cake with fresh whipped cream and chestnut paste"
        price={20}
      >
        <ChocolateRollIcon />
      </MenuItem>
      <MenuItem
        title="Vanilla Salted Caramel Roll"
        description="Vanilla chiffon cake with fresh whipped cream and salted caramel mousse"
        price={20}
      >
        <VanillaRollIcon />
      </MenuItem>
      <MenuItem
        title="Assorted Box"
        description='3 half-size rolls of each flavour and 4 "Hup Toh Soh" Walnut cookies'
        price={32}
      >
        <Stack>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <MatchaRollIcon />
            <ChocolateRollIcon />
            <VanillaRollIcon />
            <CookieIcon />
          </Stack>
        </Stack>
      </MenuItem>
    </MenuPageContainer>
  </>
);

export default Menu;
