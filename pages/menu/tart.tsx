import { Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import {
  MatchaPyramidIcon,
  RubyPyramidIcon,
  SpecificIconProps,
  TartIcon,
} from "../../components/icons";
import { MenuItem } from "../../components/MenuItem";
import { MenuPageContainer } from "../../components/MenuPageContainer";

const snailSize = 70;

export const MatchaTartIcon = ({ size }: SpecificIconProps) => (
  <TartIcon size={size} />
);

const Menu = () => (
  <>
    <Head>
      <title>bekibakes</title>
    </Head>
    <MenuPageContainer
      title="tart"
      footer={
        <>
          <Typography> Round tart: ⌀ 16 cm </Typography>
          <Typography> Fuji tart: 8 x 8 x 6 cm</Typography>
        </>
      }
    >
      <MenuItem
        title="Matcha Ganache"
        description="Pate Sablee crust filled with Matcha white chocolate ganache and matcha glaze"
        price="12"
      >
        <MatchaTartIcon />
      </MenuItem>
      <MenuItem
        title="Matcha Fuji Strawberry Mousse"
        description="Pate sablee, almond cream, Matcha namelaka and strawberry yogurt mousse"
        price="6"
      >
        <MatchaPyramidIcon />
      </MenuItem>
      <MenuItem
        title="Ruby Fuji Yuzu Mousse"
        description="Pate sablee, almond cream, Ruby chocolate namelaka and yuzu mousse"
        price="6.50"
      >
        <RubyPyramidIcon />
      </MenuItem>
    </MenuPageContainer>
  </>
);

export default Menu;
