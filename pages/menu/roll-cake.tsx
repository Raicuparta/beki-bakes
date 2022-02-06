import Head from "next/head";
import React from "react";
import { Stack } from "@mui/material";
import { RollCakeIcon, CookieIcon } from "../../components/icons";
import { MenuItem } from "../../components/MenuItem";
import { SpecificIconProps } from "../menu";
import { MenuPageContainer } from "../../components/MenuPageContainer";

export const MatchaRollIcon = ({ size }: SpecificIconProps) => (
  <RollCakeIcon
    outlineColor="#677d2b"
    cakeColor="#a5ad55"
    fillingColor="#a44b3c"
    size={size}
  />
);

export const ChocolateRollIcon = ({ size }: SpecificIconProps) => (
  <RollCakeIcon
    outlineColor="#251d17"
    cakeColor="#4c392b"
    fillingColor="#a58a71"
    size={size}
  />
);

export const VanillaRollIcon = ({ size }: SpecificIconProps) => (
  <RollCakeIcon
    outlineColor="#b8954a"
    cakeColor="#ebd691"
    fillingColor="#d09e6f"
    size={size}
  />
);

const Menu = () => (
  <>
    <Head>
      <title>bekibakes</title>
    </Head>
    <MenuPageContainer>
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
